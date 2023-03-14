const moon = `<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
class="feather feather-moon"
>
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
</svg>`;
const sun = `<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
class="feather feather-sun"
>
<circle cx="12" cy="12" r="5" />
<line x1="12" y1="1" x2="12" y2="3" />
<line x1="12" y1="21" x2="12" y2="23" />
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
<line x1="1" y1="12" x2="3" y2="12" />
<line x1="21" y1="12" x2="23" y2="12" />
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</svg>`;
const toggler = document.querySelector(".theme-toggler");
const projects = document.getElementById("projects");

toggler.addEventListener("click", () => {
  const root = document.querySelector(":root");
  let theme = getCurrentTheme();
  if (theme === "dark") {
    toggler.innerHTML = moon;
    theme = "light";
  } else {
    toggler.innerHTML = sun;
    theme = "dark";
  }
  localStorage.setItem("aashar.theme", `${theme}`);
  setTheme(theme);
});

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  localStorage.getItem("aashar.theme")
    ? (theme = localStorage.getItem("aashar.theme"))
    : null;

  return theme;
}

function setTheme(userPrefered) {
  const root = document.querySelector(":root");

  if (userPrefered === "dark") {
    toggler.innerHTML = moon;
    projects.style.boxShadow = "0 -2px 4px 0px rgb(253, 253, 253)";
  } else {
    toggler.innerHTML = sun;
    projects.style.boxShadow = "none";
  }
  root.setAttribute("theme", `${userPrefered}`);
}

window.addEventListener("DOMContentLoaded", () => {
  setTheme(getCurrentTheme());
});

const data = `
<div class="container" data-aos="fade-left">
          <img src="images/weatherApp-min.jpg" alt="Weather Checking App" />
          <div class="desc">
            <h2>Weather App</h2>
            <h3>Responsive Weather App using open Weather API</h3>

            <div class="btns">
              <a href="https://github.com/Aashar-Mehmood/JavaScript-WeatherApp"
                >View Code</a
              >
              <a href="https://youtu.be/kSoPUyBrwDM">Watch Demo</a>
            </div>
          </div>
        </div>

<div class="container" data-aos="fade-up">
<img src="images/crowdFunding-min.jpg" alt="Crowd Funding Website" />
<div class="desc">
  <h2>Crowd Funding </h2>
  <h3>Website challenge from Frontend Mentor</h3>
  <br />

  <div class="btns">
    <a href="https://github.com/Aashar-Mehmood/Crowd-Funding-Website"
      >View Code</a
    >
    <a href="https://aashar-mehmood.github.io/Crowd-Funding-Website"
      >Launch</a
    >
  </div>
</div>
</div>

<div class="container" data-aos="fade-left">
<img src="images/slider-min.jpg" alt="Responsive Image Slider" />
<div class="desc">
  <h2>Image Slider</h2>
  <h3>Vanilla Js Image Slider</h3>
  <br />
  <br />
  <div class="btns">
    <a href="https://github.com/Aashar-Mehmood/JavaScript-SlideShow"
      >View Code</a
    >
    <a href="https://aashar-mehmood.github.io/JavaScript-SlideShow"
      >Launch</a
    >
  </div>
</div>
</div>

`;

const data1 = `<h2>Some of Project Samples</h2>
<div class="container" data-aos="fade-right">
  <img src="images/starshare.png" alt="Star Share" />
  <div class="desc">
    <h2>StarShare</h2>
    <h3>Music Platform for stars, organizers and suppliers</h3>
   

    <div class="btns">
      <a
        href="https://github.com/Aashar-Mehmood/starshare"
        target="_blank"
        >View Code</a
      >
      <a
        href="https://starshare-web.000webhostapp.com/starshare/"
        target="_blank"
        >Launch</a
      >
      <!-- <a href="https://youtu.be/56W7dLD-2Gg">Watch Demo</a> -->
    </div>
  </div>
</div>
<div class="container" data-aos="fade-down">
  <img src="images/bloggingBlaze.png" alt="Blog Website" />
  <div class="desc">
    <h2>Blog Website</h2>
    <h3>Blog Website using PHP, MYSQL, jQuery</h3>
    

    <div class="btns">
      <a href="https://github.com/Aashar-Mehmood/Dynamic-Blog-Website"
        >View Code</a
      >
      <a href="https://youtu.be/sGFQVU3JL7w">Watch Demo</a>
    </div>
  </div>
</div>
<div class="container" data-aos="fade-left">
  <img src="images/Quizzical.png" alt="Quizzical" />
  <div class="desc">
    <h2>Quizzical</h2>
    <h3>Quiz App using React and OTDB API</h3>
    

    <div class="btns">
      <a href="https://github.com/Aashar-Mehmood/react-quiz"
        >View Code</a
      >
      <a href="https://react-quiz-scrimba.netlify.app/">Launch</a>
    </div>
  </div>
</div>
<div class="container" data-aos="fade-right">
  <img src="images/tenzies.png" alt="tenzies" />
  <div class="desc">
    <h2>Tenzies</h2>
    <h3>Tenzies Game using React and Local Storage</h3>
    
    <div class="btns">
      <a href="https://github.com/Aashar-Mehmood/react-tenzies-game"
        >View Code</a
      >
      <a href="https://aashar-mehmood.github.io/react-tenzies-game/">Launch</a>
    </div>
  </div>
</div>
<div class="container" data-aos="fade-up">
          <img src="images/multiStepForm.png" alt="React Multi Step Form" />
          <div class="desc">
            <h2>Multi Step Form</h2>
            <h3>React Multi Step Form along with validation</h3>
        

            <div class="btns">
              <a
                href="https://github.com/Aashar-Mehmood/multi-step-form"
                >View Code</a
              >
              <a href="https://multi-step-form-12.netlify.app/">Launch</a>
            </div>
          </div>
        </div>
        <div class="container" data-aos="fade-left">
        <img src="images/calculator.png" alt="JavaScript calculator" />
        <div class="desc">
          <h2>Calculator App</h2>
          <h3>Multi theme Calculator app usign vanilla Js and CSS</h3>
          <br />

          <div class="btns">
            <a href="https://github.com/Aashar-Mehmood/JavaScript-Calculator"
              >View Code</a
            >
            <a href="https://aashar-mehmood.github.io/JavaScript-Calculator"
              >Launch</a
            >
          </div>
        </div>
      </div>`;

const moreBtn = document.getElementById("moreProj");
const lessBtn = document.getElementById("lessProj");
const container = document.getElementById("projects");

moreBtn.addEventListener("click", showMore);
lessBtn.addEventListener("click", showLess);

function showMore() {
  container.innerHTML += data;
  container.scrollBy(0, 20);
  moreBtn.style.display = "none";
  lessBtn.style.display = "flex";
}

function showLess() {
  container.innerHTML = data1;
  container.scrollIntoView();
  moreBtn.style.display = "flex";
  lessBtn.style.display = "none";
}
