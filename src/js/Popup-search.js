export default function openAndClosePopupSearch() {
  let popupSearch = document.querySelector('.search-popup');

  let btnShow = document.querySelector('.btn-search');
  let btnHide = document.querySelector('.close-search');

  let openPopupAnimation = document.querySelector('.open-popup');
  let closePopupAnimation = document.querySelector('.close-popup');

  btnShow.addEventListener('click', () => {
  
    let handler = () => {
      popupSearch.classList.remove('open-popup');
      popupSearch.removeEventListener('transitionend', handler);
    };
    
    popupSearch.style.display = 'block';
    popupSearch.classList.add('open-popup-animation');

    raf(()=>{
      popupSearch.classList.add('open-popup');
      popupSearch.classList.remove('open-popup-animation');
    });

    popupSearch.addEventListener('transitionend', handler);

  });
  
  btnHide.addEventListener('click', () => { 
  
    let handler = () => {
      popupSearch.style.display = 'none';
      popupSearch.classList.remove('close-popup');
      popupSearch.removeEventListener('transitionend', handler);
    };


    popupSearch.classList.add('close-popup');
    popupSearch.addEventListener('transitionend', handler);
  });


  function raf(fn) {
    window.requestAnimationFrame(()=> {
      window.requestAnimationFrame(()=>{
        fn();
      })
    })
  }

}
