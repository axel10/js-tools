export default function animateScroll(element: HTMLElement | Window, to: { x: number, y: number }, duration: number) {
    const { x, y } = to;
    const startY = element === window ? element.scrollY : (element as HTMLElement).scrollTop;
    const startX = element === window ? element.scrollX : (element as HTMLElement).scrollLeft;
    const changeX = x - startX;
    const changeY = y - startY;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const valX = easeInOutQuad(currentTime, startX, changeX, duration);
      const valY = easeInOutQuad(currentTime, startY, changeY, duration);

      element.scrollTo({ left: valX, top: valY });
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
}


function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }