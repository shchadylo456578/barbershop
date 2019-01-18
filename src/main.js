import './styles/main.scss';
import openAndClosePopupSearch from './js/Popup-search.js';
import Slider from './js/Slider';
import navAnimation from './js/Nav-animation';
import navMobile from './js/Nav-mobile'

navMobile();
navAnimation();
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
