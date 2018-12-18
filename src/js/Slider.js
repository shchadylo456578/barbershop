export default function Slider(obj) {

  this.images = document.querySelectorAll(obj.images);
  this.next = document.querySelector(obj.next);
  this.prev = document.querySelector(obj.prev);
  this.active = obj.active || false;
  this.rate = obj.rate || 1000;
  this.auto = obj.auto;
  this.dots = document.querySelectorAll(obj.dots); //class dots css
  this.activeDot = obj.activeDot; // class animation dots css
  this.stopDurationTime = obj.stopDurationTime || 3000;

  let slider = this;
  let timeout;
  let i = 0;
  let j = 0;



  let eventsSlider = {

    clearTime: () => {
      clearInterval(timeout);
      timeout = setTimeout(function () {
        btnNextAuto()
      }, slider.stopDurationTime);
    },

    imgEventNext: () => {
      slider.images[i].classList.remove(slider.active);
      i++;
      // console.log(i);
      if (i >= slider.images.length) {
        i = 0;
      }
      slider.images[i].classList.add(slider.active);


    },

    imgEventPrev: () => {
      slider.images[i].classList.remove(slider.active);
      i--;
      if (i < 0) {
        i = slider.images.length - 1;
      }
      slider.images[i].classList.add(slider.active);
    },

    dotsEventNext: () => {
      slider.dots[j].classList.remove(slider.activeDot);
      j++;
      //console.log(i);
      if (j >= slider.dots.length) {
        j = 0;
      }
      slider.dots[j].classList.add(slider.activeDot);
    },

    dotsEventPrev: () => {

      slider.dots[j].classList.remove(slider.activeDot);
      j--;
      if (j < 0) {
        j = slider.dots.length - 1;
      }
      slider.dots[j].classList.add(slider.activeDot);
    }


  };


  function btnNextAuto() {
    if (slider.auto === true) {
      timeout = setInterval(() => {
        eventsSlider.imgEventNext();
        eventsSlider.dotsEventNext();

      }, slider.rate);
    }

  }

  btnNextAuto();

  (function btnNext() {
    slider.next.addEventListener('click', () => {
      eventsSlider.imgEventNext();
      eventsSlider.dotsEventNext();
      eventsSlider.clearTime();


    });
  })();

  (function btnPrev() {
    slider.prev.addEventListener('click', () => {
      eventsSlider.imgEventPrev();
      eventsSlider.dotsEventPrev();
      // clearTime();


    });
  })();
  return this;
}
