// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false, 
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: false, 
            contextIsolation: true,  
            preload: path.join(__dirname, 'preload.js')  
        }
    });

    mainWindow.loadFile('main.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

   
    ipcMain.on('minimize', () => {
        mainWindow.minimize();
    });

    ipcMain.on('close', () => {
        mainWindow.close();  
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
