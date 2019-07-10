(function() {
  const slider = document.querySelector('.actions__list');
  const buttons = document.querySelectorAll('.actions__navigation-link');
  let run = true;

  function moveSlide(index) {
    slider.style.left = -index*100+'%';
  }
  function activate(index) {
    let active = document.querySelector('.actions__navigation-link.is-active');
    if(active !== buttons[index]) {      
      active.classList.remove('is-active');
      buttons[index].classList.add('is-active');      
    }
  }
  for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) =>{
      e.preventDefault();
      if(!run) return;
        run = false;
        moveSlide(i)
        activate(i);
        setTimeout(function(){
          run = true;
        },800)          
    })      
  }

}());