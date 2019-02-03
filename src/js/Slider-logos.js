import Glide from '@glidejs/glide';


export default function sliderLogos() {
  var sliders = document.querySelectorAll('.glide');

  for (var i = 0; i < sliders.length; i++) {
    let glideSlider = new Glide(sliders[i], {
      type: 'carousel',
      focusAt: 'center',
      gap: 50,
      perView: 5,
      autoplay: 2000,
      animationDuration: 1000,
      breakpoints: {
        600: {
          perView: 3,
          gap: 5,
        }
      }
    }).mount()
  }



};