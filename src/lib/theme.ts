import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";

export const theme = createTheme({
	shape: { borderRadius: 0 }
});

export const cache = function() {
	return createCache({
		key: "css",
		prepend: true,
	});
}

export default theme;
