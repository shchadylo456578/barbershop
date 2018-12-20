import './styles/main.scss';
import openAndClosePopupSearch from './js/Popup-search.js';
import Slider from './js/Slider';

openAndClosePopupSearch();

let slider = new Slider({
  images: '.slide',
  prev: '#prev',
  next: '#next',
  active: 'active',
  auto: false,
  rate: 5000,
  dots: '.dot',
  activeDot: 'dot-active',
  stopDurationTime: 5000
});

// if (module.hot) {
//   module.hot.accept('./js/Popup-search.js', function () {
//     console.log('Accepting the updated PopupSearch module!');
//   });
// }

// if (module.hot) {
//   module.hot.accept('./js/Slider.js', function () {
//     console.log('Accepting the updated Slider module!');

  

//   });
// }
