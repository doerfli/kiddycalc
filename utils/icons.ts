export { getRandomIcon, allIcons };

function getRandomIcon(): string {
    return ICONS[Math.floor(Math.random() * ICONS.length)];
}

function allIcons(): Array<string> {
    return ICONS;
}

const FREE_ICONS: Array<string> = [
    "car-side",
    "truck",
    "motorcycle",
    "bicycle",
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

const PRO_ICONS: Array<string> = [
    // fontawesome pro icons
    "whale",
    "narwhal",
    "dolphin",
    "sheep",
    "elephant",
    "unicorn",
    "deer-rudolph",
    "duck",
    "squirrel",
    "squid",
    "bat",
];

const ICONS = FREE_ICONS.concat(PRO_ICONS);
