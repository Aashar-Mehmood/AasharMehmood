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
if(document.body.clientWidth>420){
  showNav.style.display='none';
}
else{
  showNav.style.display = 'block';
}

const goToTop = document.getElementById('goTop');

window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  if(document.body.clientWidth<=768){
    // get total scroll-able height of body.
    const scrollHeight = document.body.scrollHeight;
    // when scrollTop becomes greater than 1/4 of total height show the icon
    if(document.body.scrollTop>=(scrollHeight/4) || document.documentElement.scrollTop>=(scrollHeight/4))
    {
      goToTop.style.display = "block";
    }
    else{
      goToTop.style.display = "none";
    }
    
  }
}

goToTop.addEventListener('click', ()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

//text animation
const h1 = document.querySelector('.h1');
const h2 = document.querySelectorAll('.h2');
setTimeout(() => {
  h1.classList.add('animate');
}, 1000);
setTimeout(() => {
  h2.forEach((elem)=>{
    elem.classList.add('animate');
  });
}, 1500);

