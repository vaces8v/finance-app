import path from 'path'
import { app, ipcMain, Tray, Menu, } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

let tray

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const icon = path.join(__dirname, '..', 'resources', 'icon.jpg');
  tray = new Tray(icon)

  Menu.setApplicationMenu(null)

  const mainWindow = createWindow('main', {
    minWidth: 700,
    minHeight: 500,
    width: 1000,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false
    },
  })

  ipcMain.on('close-window', () => {
    mainWindow.close();
  });

  ipcMain.on('minimize-window', () => {
    mainWindow.minimize();
  });

  ipcMain.on('maximize-window', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
