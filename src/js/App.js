import Slider from './Slider';
import PopupSearch from './Popup-search'

export default function App() {
  //PopUp search
  PopupSearch();

  // Slider
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

}