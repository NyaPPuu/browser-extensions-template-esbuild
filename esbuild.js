const esbuild = require("esbuild");
const path = require("path");
const srcDir = path.join(__dirname, "src");
const fs = require("fs");

const entryPoints_inc = [];
fs.readdirSync(path.join(srcDir, "inc")).forEach(function (file) {
  if (file.match(/.*\.tsx?$/))
    entryPoints_inc.push(path.join(srcDir, "inc", file));
});
esbuild
  .build({
    entryPoints: entryPoints_inc,
    bundle: false,
    minify: process.env.NODE_ENV != "dev",
    watch:
      process.env.NODE_ENV == "dev"
        ? {
            onRebuild(error, result) {
              if (error) console.error("watch build failed:", error);
              else console.log("watch build succeeded:", result);
            }
          }
        : false,
    target: ["chrome107", "firefox57"],
    outdir: "./public/dist/inc",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    }
  })
  .catch(() => process.exit(1));

const entryPoints = [path.join(srcDir, "background.ts")];
fs.readdirSync(path.join(srcDir, "routes")).forEach(function (file) {
  if (file.match(/.*\.tsx?$/))
    entryPoints.push(path.join(srcDir, "routes", file));
});
fs.readdirSync(path.join(srcDir, "lib")).forEach(function (file) {
  if (file.match(/.*\.(tsx?|css)$/))
    entryPoints.push(path.join(srcDir, "lib", file));
});

esbuild
  .build({
    // format: "cjs",
    entryPoints,
    bundle: true,
    minify: process.env.NODE_ENV != "dev",
    watch:
      process.env.NODE_ENV == "dev"
        ? {
            onRebuild(error, result) {
              if (error) console.error("watch build failed:", error);
              else console.log("watch build succeeded:", result);
            }
          }
        : false,
    target: ["chrome107", "firefox57"],
    outdir: "./public/dist",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    }
  })
  .catch(() => process.exit(1));
