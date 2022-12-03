const path = require("path");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

function createWindow() {
	const win = new BrowserWindow({
		width: 960,
		height: 630,
		frame: false,
		titleBarStyle: "hidden",
		titleBarOverlay: {
			color: "#f2f1f1",
			symbolColor: "#000",
			height: 30,
		},
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	win.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);

	if (isDev) {
		win.webContents.openDevTools({ mode: "detach" });
	}
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
