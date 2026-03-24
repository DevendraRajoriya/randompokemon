// Shared Pokemon type colors and gradients
// Used across multiple components to maintain consistency

export const TYPE_COLORS: Record<string, string> = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
};

export const TYPE_GRADIENTS: Record<string, string> = {
    normal: "linear-gradient(180deg, #C6C6A7 0%, #A8A878 100%)",
    fire: "linear-gradient(180deg, #F5AC78 0%, #F08030 100%)",
    water: "linear-gradient(180deg, #9DB7F5 0%, #6890F0 100%)",
    electric: "linear-gradient(180deg, #FAE078 0%, #F8D030 100%)",
    grass: "linear-gradient(180deg, #A7DB8D 0%, #78C850 100%)",
    ice: "linear-gradient(180deg, #BCE6E6 0%, #98D8D8 100%)",
    fighting: "linear-gradient(180deg, #D67873 0%, #C03028 100%)",
    poison: "linear-gradient(180deg, #C183C1 0%, #A040A0 100%)",
    ground: "linear-gradient(180deg, #EBD69D 0%, #E0C068 100%)",
    flying: "linear-gradient(180deg, #C6B7F5 0%, #A890F0 100%)",
    psychic: "linear-gradient(180deg, #FA92B2 0%, #F85888 100%)",
    bug: "linear-gradient(180deg, #C6D16E 0%, #A8B820 100%)",
    rock: "linear-gradient(180deg, #D1C17D 0%, #B8A038 100%)",
    ghost: "linear-gradient(180deg, #A292BC 0%, #705898 100%)",
    dragon: "linear-gradient(180deg, #A27DFA 0%, #7038F8 100%)",
    dark: "linear-gradient(180deg, #A29288 0%, #705848 100%)",
    steel: "linear-gradient(180deg, #D1D1E0 0%, #B8B8D0 100%)",
    fairy: "linear-gradient(180deg, #F4BDC9 0%, #EE99AC 100%)",
};

export function getTypeColor(type: string): string {
    return TYPE_COLORS[type] || "#68A090";
}

export function getTypeGradient(type: string): string {
    return TYPE_GRADIENTS[type] || TYPE_GRADIENTS.normal;
}
