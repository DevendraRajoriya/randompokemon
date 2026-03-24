import { Metadata } from "next";
import PokedexClient from "./PokedexClient";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokédex | Complete Pokemon Database | Random Pokemon Generator",
  description:
    "Browse the complete Pokédex with all 1025+ Pokemon species. Search, filter by type, and view detailed stats, evolutions, and abilities for every Pokemon.",
  keywords: [
    "pokedex",
    "pokemon database",
    "complete pokedex",
    "all pokemon list",
    "pokemon stats",
    "national pokedex",
    "pokemon search",
    "pokemon types",
  ],
  alternates: {
    canonical: `${siteUrl}/pokedex`,
  },
  openGraph: {
    title: "Pokédex | Complete Pokemon Database",
    description:
      "Browse all 1025+ Pokemon species with stats, types, and evolutions. The complete Pokemon database.",
    url: `${siteUrl}/pokedex`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pokédex - Complete Pokemon Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokédex | Complete Pokemon Database",
    description: "Browse all 1025+ Pokemon species with stats, types, and evolutions.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const pokedexJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pokédex - Complete Pokemon Database",
  description:
    "Browse the complete Pokédex with all 1025+ Pokemon species. Search and filter by type.",
  url: `${siteUrl}/pokedex`,
  isPartOf: {
    "@type": "WebSite",
    name: "Random Pokemon Generator",
    url: siteUrl,
  },
};

interface PokemonListItem {
  name: string;
  url: string;
}

async function getPokemonList(): Promise<{ list: PokemonListItem[]; count: number }> {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0",
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon list");
    }

    const data = await response.json();
    return {
      list: data.results as PokemonListItem[],
      count: data.count as number,
    };
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return { list: [], count: 0 };
  }
}

export default async function PokedexPage() {
  const { list, count } = await getPokemonList();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pokedexJsonLd) }}
      />
      <PokedexClient initialPokemonList={list} totalCount={count} />
    </>
  );
}
