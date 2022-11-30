// 예시 파일

/**
 * This is a popup view
 * This script is bundled and imported by
 * popup.html
 */

import React from "react";
import { createRoot } from "react-dom/client";

export default function App() {
	return <h1>React App Popup</h1>;
}

const container = document.getElementById("root");
if (container) {
	const root = createRoot(container); // createRoot(container!) if you use TypeScript
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

