function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

function iconNameToCodePoint(iconName) {
    const base = 0xe000;
    const hash = hashCode(iconName.toLowerCase());
    return base + (hash % 0x1000);
}

module.exports = iconNameToCodePoint;
