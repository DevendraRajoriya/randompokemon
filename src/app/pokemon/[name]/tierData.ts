/**
 * Smogon Generation 9 (Scarlet/Violet) tier data.
 * Key = lowercase Pokémon name as returned by PokéAPI.
 * Tiers: AG > Uber > OU > UU > RU > NU > PU > NFE > LC
 * Source: Smogon Gen 9 tier lists (public usage data, ~2025).
 */

export type SmogonTier =
  | "AG" | "Uber" | "OU" | "UU" | "RU" | "NU" | "PU" | "NFE" | "LC";

export interface TierEntry {
  tier: SmogonTier;
}

export const TIER_COLORS: Record<SmogonTier, { bg: string; text: string }> = {
  AG:   { bg: "#7c3aed", text: "#fff" },
  Uber: { bg: "#dc2626", text: "#fff" },
  OU:   { bg: "#d97706", text: "#fff" },
  UU:   { bg: "#2563eb", text: "#fff" },
  RU:   { bg: "#059669", text: "#fff" },
  NU:   { bg: "#6b7280", text: "#fff" },
  PU:   { bg: "#9ca3af", text: "#000" },
  NFE:  { bg: "#e5e7eb", text: "#374151" },
  LC:   { bg: "#fbbf24", text: "#000" },
};

export const TIER_DESCRIPTIONS: Record<SmogonTier, string> = {
  AG:   "Anything Goes — no bans apply. Dominant force even among legends.",
  Uber: "Uber tier — too powerful for standard OU play.",
  OU:   "Overused (OU) — the standard competitive tier. Widely used and effective.",
  UU:   "Underused (UU) — strong but not dominant enough for OU.",
  RU:   "Rarely Used (RU) — viable in the right team; outclassed in higher tiers.",
  NU:   "Never Used (NU) — niche options exist but faces stiff competition.",
  PU:   "PU — the lowest official tier; mainly used for fun or specialist builds.",
  NFE:  "Not Fully Evolved — LC/NFE play only; evolves into a higher-tier form.",
  LC:   "Little Cup (LC) — level 5 battles; first-stage Pokémon only.",
};

// ---------------------------------------------------------------------------
// Gen 9 Tier Map  (name → tier)
// ---------------------------------------------------------------------------
export const SMOGON_TIERS: Record<string, SmogonTier> = {
  // ── Anything Goes ──
  "rayquaza": "AG", "calyrex-shadow-rider": "AG", "eternatus": "AG",

  // ── Uber ──
  "mewtwo": "Uber", "lugia": "Uber", "ho-oh": "Uber",
  "kyogre": "Uber", "groudon": "Uber",
  "dialga": "Uber", "palkia": "Uber", "giratina": "Uber",
  "reshiram": "Uber", "zekrom": "Uber", "kyurem-black": "Uber", "kyurem-white": "Uber",
  "xerneas": "Uber", "yveltal": "Uber", "zygarde": "Uber",
  "solgaleo": "Uber", "lunala": "Uber", "necrozma": "Uber",
  "necrozma-dusk-mane": "Uber", "necrozma-dawn-wings": "Uber",
  "zacian": "Uber", "zacian-crowned": "Uber",
  "zamazenta": "Uber", "zamazenta-crowned": "Uber",
  "koraidon": "Uber", "miraidon": "Uber",
  "flutter-mane": "Uber", "iron-bundle": "Uber",
  "palafin": "Uber", "palafin-hero": "Uber",
  "spectrier": "Uber", "magearna": "Uber",
  "pheromosa": "Uber", "xurkitree": "Uber", "naganadel": "Uber",
  "deoxys": "Uber", "deoxys-attack": "Uber",
  "blaziken": "Uber", "arceus": "Uber",
  "marshadow": "Uber", "terapagos": "Uber",
  "calyrex-ice-rider": "Uber",

  // ── Overused (OU) ──
  "dragapult": "OU", "garchomp": "OU", "corviknight": "OU",
  "toxapex": "OU", "clefable": "OU", "heatran": "OU",
  "weavile": "OU", "volcarona": "OU", "landorus-therian": "OU",
  "iron-valiant": "OU", "gholdengo": "OU", "great-tusk": "OU",
  "kingambit": "OU", "roaring-moon": "OU", "garganacl": "OU",
  "iron-moth": "OU", "ogerpon": "OU", "annihilape": "OU",
  "meowscarada": "OU", "cinderace": "OU", "rillaboom": "OU",
  "grimmsnarl": "OU", "pelipper": "OU", "hippowdon": "OU",
  "amoonguss": "OU", "tornadus-therian": "OU", "jirachi": "OU",
  "mew": "OU", "keldeo": "OU", "tapu-koko": "OU",
  "tapu-lele": "OU", "tapu-fini": "OU", "melmetal": "OU",
  "urshifu": "OU", "urshifu-rapid-strike": "OU",
  "blacephalon": "OU", "celesteela": "OU", "kartana": "OU",
  "buzzwole": "OU", "regieleki": "OU",
  "tyranitar": "OU", "dragonite": "OU", "gyarados": "OU",
  "ferrothorn": "OU", "chansey": "OU", "arcanine": "OU",
  "magnezone": "OU", "rotom-wash": "OU", "excadrill": "OU",
  "togekiss": "OU", "gliscor": "OU", "mandibuzz": "OU",
  "darkrai": "OU", "iron-hands": "OU", "ting-lu": "OU",
  "chi-yu": "OU", "chien-pao": "OU", "baxcalibur": "OU",
  "sneasler": "OU", "ursaluna": "OU",
  "iron-treads": "OU", "walking-wake": "OU",
  "gouging-fire": "OU", "raging-bolt": "OU",
  "iron-boulder": "OU", "iron-crown": "OU",
  "thundurus-therian": "OU",

  // ── Underused (UU) ──
  "salamence": "UU", "metagross": "UU", "infernape": "UU",
  "lucario": "UU", "scizor": "UU", "alakazam": "UU",
  "hydreigon": "UU", "krookodile": "UU", "slowbro": "UU",
  "slowking": "UU", "gallade": "UU", "empoleon": "UU",
  "tangrowth": "UU", "mamoswine": "UU", "swampert": "UU",
  "gardevoir": "UU", "breloom": "UU", "medicham": "UU",
  "azumarill": "UU", "venusaur": "UU", "charizard": "UU",
  "typhlosion": "UU", "feraligatr": "UU", "umbreon": "UU",
  "vaporeon": "UU", "sylveon": "UU", "terrakion": "UU",
  "latias": "UU", "latios": "UU", "victini": "UU",
  "zeraora": "UU", "thundurus": "UU", "landorus": "UU",
  "ninetales": "UU", "incineroar": "UU", "primarina": "UU",
  "tapu-bulu": "UU", "skarmory": "UU",
  "blissey": "UU", "conkeldurr": "UU",
  "skeledirge": "UU", "quaquaval": "UU",
  "inteleon": "UU", "iron-jugulis": "UU", "iron-leaves": "UU",
  "wo-chien": "UU", "talonflame": "UU",

  // ── Rarely Used (RU) ──
  "kingdra": "RU", "heracross": "RU", "staraptor": "RU",
  "roserade": "RU", "togetic": "RU", "rotom": "RU",
  "haxorus": "RU", "chandelure": "RU", "reuniclus": "RU",
  "gastrodon": "RU", "froslass": "RU",
  "milotic": "RU", "flygon": "RU", "porygon-z": "RU",
  "sableye": "RU", "aerodactyl": "RU", "lapras": "RU",
  "tauros": "RU", "pinsir": "RU", "scyther": "RU",
  "azelf": "RU", "uxie": "RU", "celebi": "RU",
  "shaymin": "RU", "cobalion": "RU",
  "nihilego": "RU", "stakataka": "RU", "regidrago": "RU",
  "rhyperior": "RU", "honchkrow": "RU", "mismagius": "RU",
  "lopunny": "RU", "torterra": "RU", "glalie": "RU",
  "seismitoad": "RU", "cloyster": "RU",
  "whimsicott": "RU", "golisopod": "RU", "toxtricity": "RU",
  "obstagoon": "RU", "mimikyu": "RU",
  "marowak-alola": "RU", "rotom-heat": "RU", "rotom-mow": "RU",
  "rotom-fan": "RU", "zarude": "RU", "glastrier": "RU",
  "sandy-shocks": "RU", "scream-tail": "RU", "brute-bonnet": "RU",
  "iron-thorns": "RU", "sinistcha": "RU", "okidogi": "RU",
  "munkidori": "RU", "fezandipiti": "RU", "hydrapple": "RU",
  "pecharunt": "RU", "decidueye": "RU",

  // ── Never Used (NU) ──
  "sceptile": "NU", "slaking": "NU", "virizion": "NU",
  "ambipom": "NU", "braviary": "NU", "abomasnow": "NU",
  "electivire": "NU", "magmortar": "NU", "guzzlord": "NU",
  "jynx": "NU", "omastar": "NU", "kabutops": "NU",
  "walrein": "NU",

  // ── PU ──
  "pikachu": "PU", "raichu": "PU", "eevee": "PU",
  "jolteon": "PU", "flareon": "PU", "leafeon": "PU",
  "glaceon": "PU", "luxray": "PU", "floatzel": "PU",
  "absol": "PU", "banette": "PU", "dusknoir": "PU",
  "spiritomb": "PU", "cacturne": "PU", "luvdisc": "PU",
  "huntail": "PU", "gorebyss": "PU", "relicanth": "PU",
  "mesprit": "PU", "raichu-alola": "PU",

  // ── NFE ──
  "murkrow": "NFE", "haunter": "NFE", "porygon2": "NFE",
  "electabuzz": "NFE", "magmar": "NFE", "sneasel": "NFE",
  "vigoroth": "NFE", "poipole": "NFE", "dipplin": "NFE",
  "poltchageist": "NFE",

  // ── Little Cup (LC) ──
  "gastly": "LC", "deino": "LC", "meltan": "LC",
  "larvitar": "LC", "gible": "LC", "bagon": "LC",
  "beldum": "LC", "pawniard": "LC", "mienfoo": "LC",
};

/**
 * Look up the Smogon Gen 9 tier for a Pokémon by name.
 * Returns null if the Pokémon isn't in our map (untiered / unknown).
 */
export function getTier(pokemonName: string): TierEntry | null {
  const tier = SMOGON_TIERS[pokemonName.toLowerCase()];
  return tier ? { tier } : null;
}

/**
 * Derive a BST-based competitive blurb.
 * Used as fallback when no explicit tier data exists.
 */
export function generateCompetitiveBlurb(
  name: string,
  tier: SmogonTier | null,
  bst: number,
  types: string[],
  highestStatName: string,
  highestStatVal: number,
  isLegendary: boolean,
  isMythical: boolean
): string {
  const displayName = name;
  const roleMap: Record<string, string> = {
    attack: "physical attacker",
    "special-attack": "special attacker",
    defense: "physical wall",
    "special-defense": "special wall",
    speed: "speed control pivot",
    hp: "bulky pivot",
  };
  const role = roleMap[highestStatName] ?? "flexible battler";
  const typeStr = types.join("/");

  if (tier === "AG") {
    return `${displayName} is dominant even among top-tier legends and is restricted to Anything Goes (AG) format. Its unchecked power makes it unsuitable for standard competitive play.`;
  }
  if (tier === "Uber") {
    return `${displayName} is too powerful for standard OU play and competes in the Uber tier. ${isLegendary || isMythical ? "As a legendary, it brings overwhelming stats to dedicated Ubers teams." : "Its exceptional capabilities place it firmly above the OU threshold."}`;
  }
  if (tier === "OU") {
    return `${displayName} is an Overused (OU) staple. As a ${typeStr}-type ${role} with ${highestStatVal} in its best stat, it finds consistent use across ladder and tournament teams.`;
  }
  if (tier === "UU") {
    return `${displayName} competes in Underused (UU). Its ${typeStr} typing and ${role} profile give it a strong niche below OU, where it faces less competition from the metagame's top threats.`;
  }
  if (tier === "RU") {
    return `${displayName} sits in Rarely Used (RU) with a BST of ${bst}. It can shine as a ${role} in the right team, though it faces stiff competition from stronger threats in higher tiers.`;
  }
  if (tier === "NU" || tier === "PU") {
    return `${displayName} operates in the lower tiers (${tier}) with a BST of ${bst}. Specialist builds can make use of its ${typeStr} typing, but it is outclassed in most higher-tier formats.`;
  }
  if (tier === "NFE") {
    return `${displayName} is not fully evolved and is primarily used in NFE or LC formats. It evolves into a stronger form that may see higher-tier play.`;
  }
  if (tier === "LC") {
    return `${displayName} is a Little Cup (LC) Pokémon — level 5 battles featuring first-stage species. In LC it can be a top threat thanks to its ${role} potential.`;
  }
  // No tier — BST-based fallback
  if (bst >= 600) {
    return `With a BST of ${bst}, ${displayName} has the raw stats of a top-tier threat. Its ${typeStr} typing as a ${role} makes it a serious consideration for competitive teams.`;
  }
  if (bst >= 500) {
    return `${displayName}'s BST of ${bst} puts it in a competitive range. As a ${typeStr}-type ${role}, it can fit well into balance and offensive teams in the right tier.`;
  }
  return `${displayName} has a BST of ${bst} and serves best as a ${role}. While not a top-tier threat, its ${typeStr} typing opens up niche team roles.`;
}
