
const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electron', {
    minimize: () => ipcRenderer.send('minimize'),  
    close: () => ipcRenderer.send('close')        
});