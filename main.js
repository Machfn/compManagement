const { app, BrowserWindow } = require('electron')

const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 800,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.removeMenu()
    win.loadURL("http://localhost:3000/")
    win.focus();
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })