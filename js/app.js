const showNav = document.getElementById('hamburger');
// close image in phoneNav (hide PhoneNav)
const closeNav = document.querySelector('div.phoneNav div img');
// phone Nav section
const phonNavSec = document.querySelector('div.phoneNav');

//goto top selector
const goToTop = document.getElementById('goTop');

//text animation
const h1 = document.querySelector('.h1');
const h2 = document.querySelectorAll('.h2');
setTimeout(() => {
  h1.classList.add('animate');
}, 400);
setTimeout(() => {
  h2.forEach((elem) => {
    elem.classList.add('animate');
  });
}, 800);


window.addEventListener('resize', () => {
  if (document.body.clientWidth >= 480) {
    showNav.style.display = 'none';
  }
  else {
    showNav.style.display = 'block';
  }
});


// hamburger image event listener (show phone Nav)
showNav.addEventListener('click', () => {
  phonNavSec.classList.add('active');
  showNav.style.display = 'none';
});

// close image event listener (hide phone Nav)
closeNav.addEventListener('click', () => {
  phonNavSec.classList.remove('active');
  showNav.style.display = 'block';
});

// go to top event listener
goToTop.addEventListener('click', ()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});