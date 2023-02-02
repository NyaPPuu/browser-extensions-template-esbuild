import React from "react";
import { app, DEV } from "../lib/common";

main(async() => {
	const { Button } = await import("@mui/material");
	const { render } = await import("../lib/renderer");

	app.storage.sync.get(["rainbowBackground"], function(options: { [key: string]: any }) {
		if (options.rainbowBackground) {
			sauron("body", () => {
				document.body.style.transition = "background-color 1s";
				let colorIdx = 0;
				const interval = setInterval(() => {
					document.body.style.backgroundColor = "hsl(" + (360 * colorIdx / 60) + ",80%,50%)";
					colorIdx++;
					if (colorIdx == 60) {
						colorIdx = 0;
					}
				}, 1000);

				document.body.append(render(<Button variant="contained" onClick={() => { clearInterval(interval); }}>Wow! rainbow!</Button>));
			});
		}
	});
});
