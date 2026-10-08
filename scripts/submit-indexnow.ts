/**
 * IndexNow Submission Script
 * 
 * Submits all sitemap URLs directly to IndexNow (Bing, Yandex, Seznam, Naver).
 * Usage: npm run indexnow
 */

const INDEXNOW_API_KEY = "fabd63cb7a4b4d3988f87e8cbdbc11f6";
const SITE_HOST = "www.randompokemon.co";
const SITE_URL = `https://${SITE_HOST}`;
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_API_KEY}.txt`;

async function fetchSitemapUrls(): Promise<string[]> {
  try {
    console.log(`📡 Fetching sitemap from ${SITE_URL}/sitemap.xml...`);
    const response = await fetch(`${SITE_URL}/sitemap.xml`);

    if (!response.ok) {
      throw new Error(`Sitemap fetch failed with HTTP ${response.status}`);
    }

    const xml = await response.text();
    const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) return [];

    return urlMatches.map((match) =>
      match.replace(/<\/?loc>/g, "").trim()
    );
  } catch (error) {
    console.warn("⚠️ Failed to fetch live sitemap, using core pages fallback:", error);
    return [
      SITE_URL,
      `${SITE_URL}/pokedex`,
      `${SITE_URL}/shiny-pokemon-generator`,
      `${SITE_URL}/legendary-pokemon-generator`,
      `${SITE_URL}/starter-pokemon-generator`,
      `${SITE_URL}/paldea-pokemon-generator`,
      `${SITE_URL}/galar-pokemon-generator`,
      `${SITE_URL}/alola-pokemon-generator`,
      `${SITE_URL}/kalos-pokemon-generator`,
      `${SITE_URL}/kanto-pokemon-generator`,
      `${SITE_URL}/hoenn-pokemon-generator`,
      `${SITE_URL}/sinnoh-pokemon-generator`,
      `${SITE_URL}/unova-pokemon-generator`,
      `${SITE_URL}/johto-pokemon-generator`,
      `${SITE_URL}/nuzlocke-generator`,
      `${SITE_URL}/draft-league-generator`,
      `${SITE_URL}/randomizer-guide`,
      `${SITE_URL}/about`,
      `${SITE_URL}/contact`,
      `${SITE_URL}/guide`,
      `${SITE_URL}/pokemon-card-generator`,
    ];
  }
}

async function main() {
  console.log(`\n🔍 IndexNow URL Submission`);
  console.log(`📍 Host: ${SITE_HOST}`);
  console.log(`⏰ Time: ${new Date().toISOString()}\n`);

  try {
    const urls = await fetchSitemapUrls();
    console.log(`📋 Found ${urls.length} URLs to submit.`);

    if (urls.length === 0) {
      console.log("No URLs to submit. Exiting.");
      return;
    }

    const batchSize = 10000;
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const batchNumber = Math.floor(i / batchSize) + 1;

      console.log(`🚀 Submitting batch ${batchNumber} (${batch.length} URLs) to api.indexnow.org...`);

      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          host: SITE_HOST,
          key: INDEXNOW_API_KEY,
          keyLocation: KEY_LOCATION,
          urlList: batch,
        }),
      });

      const statusEmoji = response.status === 200 || response.status === 202 ? "✅" : "❌";
      console.log(`   ${statusEmoji} Batch ${batchNumber}: HTTP ${response.status} (${response.statusText})`);
    }

    console.log(`\n🎉 IndexNow submission completed at ${new Date().toISOString()}`);
  } catch (error) {
    console.error("❌ Submission error:", error);
    process.exit(1);
  }
}

main();
