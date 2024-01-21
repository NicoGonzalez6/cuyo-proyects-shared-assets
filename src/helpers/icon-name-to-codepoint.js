const Handlebars = require('handlebars');
const iconNameToCodePoint = require('./name-to-codepoint');
function registerHelpers() {
    Handlebars.registerHelper('iconNameToCodePoint', iconNameToCodePoint);
    Handlebars.registerHelper('toHex', (decimal) => decimal.toString(16));
}

module.exports = {
    registerHelpers,
};
