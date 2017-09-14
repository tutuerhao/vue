const doc = document
const win = window
const initFontSize = function (fontsize) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      console.log('clientWidth==>'+clientWidth)
      if (!clientWidth) return;
      //按照iphone6的屏幕尺寸来计算
      docEl.style.fontSize = fontsize * (clientWidth / 375) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}
export default initFontSize
