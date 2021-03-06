function getRem() {
    var html = document.getElementsByTagName("html")[0]; /*获取标签元素<html>*/
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth; /*获取设备的宽度  ||后为兼容IE低版本写法*/
    html.style.fontSize = oWidth / 3.75 + "px"; /*设置根元素<html>字体大小   计算出的值 就相当于1rem;为什么？ 这就是rem单位的规定 1rem就等于根元素<html>字体大小*/
}

window.onload = function() {
    /*初始化*/
    getRem();
    /*getRem绑定监听*/
    window.addEventListener("resize", getRem, false);
}
