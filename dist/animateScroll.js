export default function animateScroll(element, to, duration) {
    var x = to.x, y = to.y;
    var startY = element === window ? element.scrollY : element.scrollTop;
    var startX = element === window ? element.scrollX : element.scrollLeft;
    var changeX = x - startX;
    var changeY = y - startY;
    var currentTime = 0;
    var increment = 20;
    var animateScroll = function () {
        currentTime += increment;
        var valX = easeInOutQuad(currentTime, startX, changeX, duration);
        var valY = easeInOutQuad(currentTime, startY, changeY, duration);
        element.scrollTo({ left: valX, top: valY });
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
//# sourceMappingURL=animateScroll.js.map