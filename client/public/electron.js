const path = require("path");

const { app, BrowserWindow, Menu, shell } = require("electron");
const isDev = require("electron-is-dev");

const menuItems = [
  {
    label: "Menu",
  },
  {
    label: "File",
    submenu: [
      {
        label: "Exit",
        click: () => app.quit(),
      },
    ],
  },
  {
    label: "About",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          await shell.openExternal(
            "https://www.rohanmathew3.com/projects/foodsuggestionbot"
          );
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    movable: true,
    resizable: false,
    backgroundColor: "#161620",
    title: "FoodSuggestionBot",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "../preload.js"),
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.webContents.on("new-window", function (event, url) {
    event.preventDefault();
    shell.openExternal(url);
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
