const data = `
<div class="container" data-aos="fade-left">
<img src="images/calculator-min.jpg" alt="JavaScript calculator" />
<div class="desc">
  <h2>Calculator App</h2>
  <h3>Calculator app usign vanilla Js and CSS</h3>
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
  <img src="images/blogWebsite.png" alt="Blog Website" />
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
  <img src="images/weatherApp-min.jpg" alt="Weather Checking App" />
  <div class="desc">
    <h2>Weather App</h2>
    <h3>Weather App using open Weather API</h3>
    
    <div class="btns">
      <a href="https://github.com/Aashar-Mehmood/JavaScript-WeatherApp"
        >View Code</a
      >
      <a href="https://youtu.be/kSoPUyBrwDM">Watch Demo</a>
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
  lessBtn.style.display = "block";
}

function showLess() {
  container.innerHTML = data1;
  container.scrollIntoView();
  moreBtn.style.display = "block";
  lessBtn.style.display = "none";
}
