export default function nawMobile() {
  let btnToggleMenuMobile = document.querySelector('#btn-mobile-toggle-js');
  let navToggleMobile = document.querySelector('#toggle-nav-mobile-js');

  btnToggleMenuMobile.addEventListener('click', function() {
    if (navToggleMobile.style.transform === 'translateX(-100%)') {
      navToggleMobile.style.transform = 'translateX(0)';
    } else {
      navToggleMobile.style.transform = 'translateX(-100%)';
    }
  });
}
