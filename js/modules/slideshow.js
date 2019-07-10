(function(){
  const links = document.querySelectorAll(".pagination__item");
  const slides = document.querySelectorAll(".header__slide");
  let active = 0;

  function switchActive(index){    
    if(active !== index) {      
      links[active].classList.remove('is-active');
      links[index].classList.add('is-active');
      slides[active].classList.remove('is-active');
      slides[index].classList.add('is-active');
      active = index;
    }
  }

  for (let i=0; i<links.length; i++) {
    links[i].addEventListener('click', (e) =>{
      e.preventDefault();   
      switchActive(i);
    })      
  }  
}());