
define( function(require, exports,module) {

// 加载图片
var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
// 用于存放图像的标签<img />
var imgObjects = [];

// 在用到的时候,这样拿图像:
// imgObjects[0]
// load_imgs.js模块是入口模块，
// 在这个load_imgs.js模块中又依赖main模块
// 而在main.js模块中又依赖load_imgs.js模块中的图片资源，即imgObjects这个对象
// 所以load_imgs.js模块中调用mian函数时候把imgObjects当参数穿进去 main模块中的函数接收这个参数
var main=require('./main.js');
var loadCount = 0;
// 图片加载完成后的监听器
function listener() {
    loadCount++;
    if (loadCount >= imgs.length) {
        main(imgObjects);
    }
}

imgs.forEach(function (imgurl) {
    // 通过遍历，创建了五个IMG标签
    var img = new Image(); // 这个是img标签。
    img.addEventListener('load', listener);
    img.src = './imgs/' + imgurl;
    imgObjects.push(img);
});


    
});