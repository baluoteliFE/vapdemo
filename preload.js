// preload.js
// 示例：暴露一个简单的 API 给渲染进程
window.myAPI = {
  doSomething: () => {
    console.log('Doing something from the main process');
  }
};