export default function navAnimation() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.menu').style.top = "0";
    } else {
      document.querySelector('.menu').style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
}