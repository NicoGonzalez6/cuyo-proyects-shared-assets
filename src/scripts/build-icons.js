const svgtofont = require("svgtofont");
const path = require("path");

const currentDirectory = __dirname;

svgtofont({
  src: path.join(currentDirectory, "..", "icons"),
  dist: path.join(currentDirectory, "..", "..", "dist"),
  fontName: "cp",
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    title: "Assets Ui Library",
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },
    logo: "",
    description: `Cuyo Craft Assets Ui Library`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/NicoGonzalez6/cuyo-proyects-assets-ui",
      },
      {
        title: "Font Class",
        url: "index.html",
      },
      {
        title: "Unicode",
        url: "unicode.html",
      },
    ],
  },
  useCSSVars: false,
  generateInfoData: {},
}).then(() => {
  console.log("done!");
});
