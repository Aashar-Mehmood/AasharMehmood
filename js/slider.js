const mainContainer = document.querySelector("div.slideContainer");
const slideImages = document.querySelectorAll("div.slideContainer img");
const prevbtn = document.getElementById("left-arrow");
const nextbtn = document.getElementById("right-arrow");
const length = mainContainer.clientWidth;
let i = 0;

nextbtn.addEventListener("click", slideForward);
prevbtn.addEventListener("click", slideBackward);

function slideForward() {
  slideImages[i].classList.remove("active");
  if (slideImages[i].nextElementSibling) {
    slideImages[i].nextElementSibling.classList.add("active");
    i++;
  } else {
    i = 0;
    slideImages[i].classList.add("active");
  }
}

function slideBackward() {
  slideImages[i].classList.remove("active");
  if (slideImages[i].previousElementSibling) {
    slideImages[i].previousElementSibling.classList.add("active");
    i--;
  } else {
    i = slideImages.length - 1;
    slideImages[i].classList.add("active");
  }
}

function changeImgSrc() {
  let width = document.body.clientWidth;
  if (width > 1200) {
    slideImages[0].setAttribute("src", "./images/Client1_laptop.PNG");
    slideImages[1].setAttribute("src", "./images/Client2_laptop.PNG");
  } else if (width > 700) {
    slideImages[0].setAttribute("src", "./images/Client1.PNG");
    slideImages[1].setAttribute("src", "./images/Client2.PNG");
  } else if (width > 380) {
    slideImages[0].setAttribute("src", "./images/Client1_mobile.PNG");
    slideImages[1].setAttribute("src", "./images/Client2_mobile.PNG");
  } else {
    slideImages[0].setAttribute("src", "./images/Client1_sm_mobile.PNG");
    slideImages[1].setAttribute("src", "./images/Client2_sm_mobile.PNG");
  }
}

window.addEventListener("resize", () => {
  changeImgSrc();
});

changeImgSrc();
