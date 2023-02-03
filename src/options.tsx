import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, TextField, ThemeProvider, CssBaseline, Container, Toolbar, Typography, Button, IconButton, Snackbar, Alert, AlertColor, Switch, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import app from "./lib/common";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export interface OptionsType {
	[key: string]: unknown;
	"rainbowBackground": boolean;
}
export const defaultOptions: OptionsType = {
	"rainbowBackground": true
};

function OptionRow(props: React.PropsWithChildren<{ subject: React.ReactNode }>) {
	return (
		<>
			<Grid xs={12} md={2} textAlign={{ xs: "left", md: "right" }}>
				{props.subject}
			</Grid>
			<Grid xs={12} md={10}>
				{props.children}
			</Grid>
		</>
	);
}
function OptionHeading(props: { subject: React.ReactNode; }) {
	return (
		<Grid xs={12} paddingLeft={{ xs: 1, md: 10 }}>
			<Typography variant="h6">{ props.subject }</Typography>
		</Grid>
	);
}

export default function App() {

	const [form, setForm] = React.useState<OptionsForm>(defaultOptions);
	const [snackPack, setSnackPack] = React.useState<{ message?: string; type: AlertColor; open: boolean; }>({
		type: "success",
		open: false
	});

	const handleClickSave = function() {
		const options: { [key: string]: unknown; } = { ...form };
		try {
			app.storage.sync.set(options, () => {
				showSnackbar("Saved");
			});
		} catch (error) {
			let message;
			if (error instanceof Error) message = error.message;
			else message = String(error);
			showSnackbar("Error — " + message, "error");
		}
	};

	const handleChange = function(event: React.ChangeEvent<HTMLElement>) {
		const name = event.target.getAttribute("name");
		if (!name) return;
		const newData = { ...form };
		if (event.target.tagName == "INPUT" && event.target.getAttribute("type") == "checkbox") {
			const target = event.target as HTMLInputElement;
			newData[name] = target.checked;
			setForm(newData);
		} else if (event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA") {
			const target = event.target as HTMLInputElement;
			newData[name] = target.value;
			setForm(newData);
		}
	};

	const showSnackbar = function(message: string, type: AlertColor = "success") {
		setSnackPack({ message, type, open: true });
	};
	const handleCloseSnackbar = function() {
		setSnackPack({ ...snackPack, open: false });
	};

	React.useEffect(() => {
		document.title = chrome.runtime.getManifest().name;
		app.storage.sync.get(null, function(result) {
			setForm({ ...form, ...result });
		});
	}, []);

	return (
		<>
			<Toolbar sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 3 }}>
				<Box sx={{ flex: 1, textAlign: "center", whiteSpace: "nowrap" }}>
					<Typography
						component="span"
						variant="h5"
						color="inherit"
						mr={1}
					>{chrome.runtime.getManifest().name}</Typography>
					<Typography variant="caption">v{chrome.runtime.getManifest().version}</Typography>
				</Box>
				<Button variant="contained" size="small" onClick={handleClickSave}>
					Save
				</Button>
			</Toolbar>
			<Grid container spacing={2}>
				<OptionHeading subject="기본 옵션" />
				<OptionRow subject="배경 색상 무지개화">
					<Switch name="rainbowBackground" checked={form["rainbowBackground"] ? true : false} onChange={handleChange} />
				</OptionRow>
			</Grid>
			<Snackbar
				key={"alert"}
				open={snackPack.open}
				autoHideDuration={snackPack.type == "error" ? 10000 : 3000}
				onClose={handleCloseSnackbar}
				message={snackPack.message}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				action={
					<React.Fragment>
						<Button color="secondary" size="small" onClick={handleCloseSnackbar}>
						UNDO
						</Button>
						<IconButton
							aria-label="close"
							color="inherit"
							sx={{ p: 0.5 }}
							onClick={handleCloseSnackbar}
						>
							<CloseIcon />
						</IconButton>
					</React.Fragment>
				}
			>
				<Alert onClose={handleCloseSnackbar} severity={snackPack.type} sx={{ width: "100%" }} variant="filled">{snackPack.message}</Alert>
			</Snackbar>
		</>
	);
}

const theme = createTheme({ palette: { mode: "dark" } });

const container = document.getElementById("root");
if (container) {
	const root = ReactDOM.createRoot(container);
	root.render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth="lg">
					<App />
				</Container>
			</ThemeProvider>
		</React.StrictMode>,
	);
}
