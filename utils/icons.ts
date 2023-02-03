export { getRandomIcon, allIcons };

function getRandomIcon(): string {
    return ICONS[Math.floor(Math.random() * ICONS.length)];
}

function allIcons(): Array<string> {
    return ICONS;
}

const ICONS: Array<string> = [
    "heart",
    "car-side",
    "truck",
    "motorcycle",
    "bicycle",
    "truck-medical",
    "sailboat",
    "paper-plane",
    "plane",
    "hippo",
    "fish",
    "dragon",
    "otter",
    "kiwi-bird",
    "mosquito",
    "horse",
    "frog",
    "dog",
    "crow",
    "cow",
    "cat",
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
    "hat-wizard",
    "mouse-field",
    "flag-pennant",
    "feather", 
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

