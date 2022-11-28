console.log("pages/_.tsx", sauron);

sauron("body", () => {
	document.body.style.transition = "background-color 1s";
	let colorIdx = 0;
	setInterval(() => {
		document.body.style.backgroundColor = "hsl(" + (360 * colorIdx / 60) + ",80%,50%)";
		colorIdx++;
		if (colorIdx == 60) {
			colorIdx = 0;
		}
	}, 1000);
});
