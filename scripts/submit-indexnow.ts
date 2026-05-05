/**
 * IndexNow Submission Script
 * 
 * Run this script after deploying to submit all URLs to IndexNow.
 * Usage: npx tsx scripts/submit-indexnow.ts
 * 
 * To test against localhost:
 * npx tsx scripts/submit-indexnow.ts --local
 */

const SITE_URL = "https://www.randompokemon.co";
const SUBMIT_SECRET = process.env.INDEXNOW_SUBMIT_SECRET || "pokegen-indexnow-submit-2026";

async function main() {
  const isLocal = process.argv.includes("--local");
  const baseUrl = isLocal ? "http://localhost:3000" : SITE_URL;

  console.log(`\n🔍 IndexNow URL Submission`);
  console.log(`📍 Target: ${baseUrl}${isLocal ? " (LOCAL)" : " (PRODUCTION)"}`);
  console.log(`⏰ Time: ${new Date().toISOString()}\n`);

  try {
    const response = await fetch(`${baseUrl}/api/indexnow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submitAll: true,
        secret: SUBMIT_SECRET,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      console.log(`✅ ${data.message}`);
      console.log(`\n📊 Batch Results:`);
      for (const result of data.results) {
        const statusEmoji = result.status === 200 || result.status === 202 ? "✅" : "❌";
        console.log(`   ${statusEmoji} Batch ${result.batch}: ${result.count} URLs (HTTP ${result.status})`);
      }
    } else {
      console.error(`❌ Submission failed:`, data);
    }

    console.log(`\n🕐 Completed at: ${data.timestamp || new Date().toISOString()}`);
  } catch (error) {
    console.error(`❌ Error:`, error);
    process.exit(1);
  }
}

main();
