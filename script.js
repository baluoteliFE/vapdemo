import Vap from 'video-animation-player';

// 配置参数
const options = {
  container: document.getElementById('vap-container'),
  src: 'demo.mp4', // 这里假设 demo.mp4 在项目根目录下，根据实际情况调整路径
  config: 'demo.json', // 这里假设 demo.json 在项目根目录下，根据实际情况调整路径
  width: 640,
  height: 480,
  fps: 20,
  mute: false,
  loop: false,
  type: 0,
  beginPoint: 0,
  fontStyle: '',
  accurate: false,
  precache: false,
  onDestroy: function () {
    console.log('VAP 实例已销毁');
  },
  onLoadError: function (error) {
    console.error('加载失败:', error);
  },
  ext: '' // 如果有融合参数请填写
};

// 创建 VAP 实例
let vap = new Vap(options);

// 绑定 playering 事件
vap.on('playering', function () {
  console.log('视频正在播放');
});

// 播放视频
vap.play();

// 暂停视频（这里只是示例，可根据需要调整调用时机）
// setTimeout(() => {
//   vap.pause();
// }, 5000);

// 销毁实例（这里只是示例，可根据需要调整调用时机）
// setTimeout(() => {
//   vap.destroy();
// }, 10000);