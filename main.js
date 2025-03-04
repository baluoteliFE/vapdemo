const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const preloadPath = path.join(__dirname, 'preload.js');
  console.log('Preload script path:', preloadPath); // 添加调试信息

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath, // 添加 preload 脚本
      nodeIntegration: true,
      contextIsolation: false,
      // 放宽内容安全策略，允许 unsafe-eval
      contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-eval'; object-src 'self'"
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 处理未处理的 Promise 拒绝
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // 你可以在这里添加更多的错误处理逻辑
});