const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
// Redux dev tools setting
const {
  default: installExtension,
  REDUX_DEVTOOLS
} = require("electron-devtools-installer");

const path = require("path");
const url = require("url");

let mainWindow;

app.on("ready", () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // Redux dev tools setting
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  // and load the index.html of the app.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });
  mainWindow.loadURL(startUrl);

  // Open the DevTools on start
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

// Communication tutorial basic
ipcMain.on("todo:add", (event, todo) => {
  console.log(todo, "received data from react in index.js");
  mainWindow.webContents.send("todo:add", "Akash");
});
