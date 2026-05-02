import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_API_KEY = "9e3d3f10ba6f48ed8833d1118262842d";
const SITE_HOST = "www.randompokemon.co";
const SITE_URL = `https://${SITE_HOST}`;
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_API_KEY}.txt`;

// Internal secret to protect this endpoint from unauthorized access
const SUBMIT_SECRET = process.env.INDEXNOW_SUBMIT_SECRET || "pokegen-indexnow-submit-2026";

/**
 * POST /api/indexnow
 * 
 * Submits URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 * 
 * Body: { urls?: string[], submitAll?: boolean, secret: string }
 * - urls: specific URLs to submit (max 10,000 per batch)
 * - submitAll: if true, fetches sitemap and submits all URLs
 * - secret: authorization secret
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls, submitAll, secret } = body;

    // Verify authorization
    if (secret !== SUBMIT_SECRET) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    let urlList: string[] = [];

    if (submitAll) {
      // Fetch all URLs from sitemap
      urlList = await fetchSitemapUrls();
    } else if (urls && Array.isArray(urls)) {
      urlList = urls;
    } else {
      return NextResponse.json(
        { error: "Provide 'urls' array or set 'submitAll' to true" },
        { status: 400 }
      );
    }

    if (urlList.length === 0) {
      return NextResponse.json(
        { error: "No URLs to submit" },
        { status: 400 }
      );
    }

    // IndexNow accepts max 10,000 URLs per request
    const batchSize = 10000;
    const results: { batch: number; status: number; count: number }[] = [];

    for (let i = 0; i < urlList.length; i += batchSize) {
      const batch = urlList.slice(i, i + batchSize);
      const batchNumber = Math.floor(i / batchSize) + 1;

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

      results.push({
        batch: batchNumber,
        status: response.status,
        count: batch.length,
      });
    }

    const totalSubmitted = results.reduce((sum, r) => sum + r.count, 0);
    const allSuccessful = results.every(
      (r) => r.status === 200 || r.status === 202
    );

    return NextResponse.json({
      success: allSuccessful,
      message: `Submitted ${totalSubmitted} URLs to IndexNow in ${results.length} batch(es)`,
      results,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("IndexNow submission error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit URLs to IndexNow",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow
 * 
 * Health check - returns IndexNow configuration status
 */
export async function GET() {
  return NextResponse.json({
    service: "IndexNow",
    status: "configured",
    host: SITE_HOST,
    keyLocation: KEY_LOCATION,
    endpoint: "https://api.indexnow.org/indexnow",
    documentation: "https://www.indexnow.org/documentation",
  });
}

/**
 * Fetches all URLs from the sitemap XML
 */
async function fetchSitemapUrls(): Promise<string[]> {
  try {
    const response = await fetch(`${SITE_URL}/sitemap.xml`, {
      next: { revalidate: 0 }, // Always fetch fresh
    });

    if (!response.ok) {
      throw new Error(`Sitemap fetch failed: ${response.status}`);
    }

    const xml = await response.text();

    // Parse <loc> tags from sitemap XML
    const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) return [];

    return urlMatches.map((match) =>
      match.replace(/<\/?loc>/g, "").trim()
    );
  } catch (error) {
    console.error("Error fetching sitemap URLs:", error);
    // Fallback: return main pages manually
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
