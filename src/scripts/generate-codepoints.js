const fs = require('fs');
const path = require('path');
const iconNameToCodePoint = require('../helpers/name-to-codepoint');

const srcPath = path.join(__dirname, '../../src');
const svgDirs = ['icons'];
const svgFiles = [];

svgDirs.forEach((dir) => {
    const files = fs.readdirSync(path.join(srcPath, dir)).filter((file) => file.endsWith('.svg'));
    svgFiles.push(...files);
});

const codepoints = {};
svgFiles.forEach((file) => {
    const iconName = path.basename(file, '.svg');
    const codePoint = iconNameToCodePoint(iconName);
    if (Object.values(codepoints).includes(codePoint)) {
        throw new Error(`Collision detected for ${iconName} and ${Object.keys(codepoints).find((key) => codepoints[key] === codePoint)} with codepoint ${codePoint}`);
    }
    codepoints[iconName] = codePoint;
});

fs.writeFileSync(path.join(__dirname, '../../dist/icons/codepoints.json'), JSON.stringify(codepoints, null, 2));
