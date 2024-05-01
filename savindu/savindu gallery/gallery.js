document.addEventListener("DOMContentLoaded", function () {
  // Your code that interacts with the DOM elements goes here

  const buttons = document.querySelectorAll(".project");
  const overlay = document.querySelector(".overlay");
  const overlayImage = document.querySelector(".overlay__inner img");
  const btn = document.getElementById("btn");

  /*Opens the overlay and displays the full popup image*
  function open(e) {
    overlay.classList.add("open");
    const src = e.currentTarget.querySelector("img").src;
    overlayImage.src = src;
  }*/


  
  const largeFont = document.querySelector("#largeFont");
  const medFont = document.querySelector("#medFont");
  const smallFont = document.querySelector("#smallFont");
  const greyBtn = document.querySelector("#greyBtn");
  const whiteBtn = document.querySelector("#whiteBtn");
  const greenBtn = document.querySelector("#greenBtn");
  const redBtn = document.querySelector("#redBtn");

  /*Changes background colour when the relevant button is clicked*/
  greyBtn.addEventListener("click", function onclick(event) {
    const bod = document.querySelector("body");
    bod.style.backgroundColor = "#808080";
    console.log("Hello world!");
  });

  whiteBtn.addEventListener("click", function onclick(event) {
    const bod = document.querySelector("body");
    bod.style.backgroundColor = "white";
  });

  greenBtn.addEventListener("click", function onclick(event) {
    const bod = document.querySelector("body");
    bod.style.backgroundColor = "#3e7e00";
  });

  redBtn.addEventListener("click", function onclick(event) {
    const bod = document.querySelector("body");
    bod.style.backgroundColor = "#e0474c";
  });

  /*Generates random colors as the background color*/
  function generateRandomColor() {
    let max = 0xffffff; // 16777215
    let randomNum = Math.random() * max;
    randomNum = Math.floor(randomNum);
    randomNum = randomNum.toString(16);
    let randColor = randomNum.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  }

  randomBtn.addEventListener("click", function onclick(event) {
    const bod = document.body;
    bod.style.backgroundColor = generateRandomColor();
  });

  /*Generates random colors as the background color*/
  function generateRandomColor() {
    let max = 0xffffff; // 16777215
    let randomNum = Math.random() * max;
    randomNum = Math.floor(randomNum);
    randomNum = randomNum.toString(16);
    let randColor = randomNum.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  }

  randomBtn.addEventListener("click", function onclick(event) {
    const bod = document.body;
    bod.style.backgroundColor = generateRandomColor();
  });
});
