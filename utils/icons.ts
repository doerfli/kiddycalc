export { getRandomIcon, allIcons };

function getRandomIcon(): string {
    return ICONS[Math.floor(Math.random() * ICONS.length)];
}

function allIcons(): string[] {
    return ICONS;
}

const ICONS = [
    "car-side",
    "truck",
    "motorcycle",
    "bicyle",
    "truck-medical",
    "helicopter",
    "sailboat",
    "paper-plane",
    "plane",
    "hippo",
    "fish",
    "dragon",
    "otter",
    "kiwi-bird",
    "spider",
    "shrimp",
    "mosquito",
    "horse",
    "frog",
    "dog",
    "crow",
    "cow",
    "cat",
    "bug",
    "egg",
    "moon",
    "cloud",
    "sun",
    "snowflake",
    "robot",
    "snowman",
    "face-smile",
    "ghost",
    "carrot",
    "lemon",
    "apple-whole",
    "lightbulb",
    "leaf",
    "tree",
];