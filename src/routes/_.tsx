import { Button } from "@mui/material";
import React from "react";
import app, { render } from "../lib/common";

console.log("routes/_.tsx", sauron);

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

