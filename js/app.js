const showNav = document.getElementById('hamburger');
// close image in phoneNav (hide PhoneNav)
const closeNav = document.querySelector('div.phoneNav div img');
// phone Nav section
const phonNavSec = document.querySelector('div.phoneNav');

// hamburger image event listener (show phone Nav)
showNav.addEventListener('click', ()=>{
  phonNavSec.classList.add('active');
  showNav.style.display = 'none';
});

// close image event listener (hide phone Nav)
closeNav.addEventListener('click', ()=>{
  phonNavSec.classList.remove('active');
  showNav.style.display = 'block';
});
if(window.outerWidth>420){
  showNav.style.display='none';
}

const goToTop = document.getElementById('goTop');
goToTop.addEventListener('click', ()=>{
  window.scrollTo(0, -(document.body.scrollHeight));
});
