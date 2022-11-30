/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require("esbuild");
const path = require("path");
const srcDir = path.join(__dirname, "src");
const fs = require("fs");


esbuild
	.build({
		entryPoints: [path.join(srcDir, "pages.ts")],
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
		outdir: "./public/dist",
		define: {
			"process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
		}
	})
	.catch(() => process.exit(1));

const entryPoints = [path.join(srcDir, "background.ts"), path.join(srcDir, "options.tsx"), path.join(srcDir, "popup.tsx")];
fs.readdirSync(path.join(srcDir, "routes")).forEach(function(file) {
	if (file.match(/.*\.tsx?$/))
		entryPoints.push(path.join(srcDir, "routes", file));
});
fs.readdirSync(path.join(srcDir, "lib")).forEach(function(file) {
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
