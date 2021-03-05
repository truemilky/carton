let callbackButton = document.getElementById("callback");

let extendedButtonOne = document.getElementById("extended-button-one");
let extendedButtonTwo = document.getElementById("extended-button-two");
let extendedButtonThree = document.getElementById("extended-button-three");
let extendedButtonFour = document.getElementById("extended-button-four");

let closeButtonExtended = document.getElementById("close-button-extended");
let closeButtonComressed = document.getElementById("compressed-close-button");

let popupExtended = document.getElementById("popup-extended");
let popupComressed = document.getElementById("popup-compressed");

let overlay = document.getElementById("overlay");
let body = document.getElementsByTagName("body");
let activeImage = document.getElementById("active-image");
let productionSlider = document.getElementById("production-slider");

callbackButton.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("active");
  popupComressed.classList.add("active");
});

closeButtonComressed.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("active");
  popupComressed.classList.remove("active");
});

extendedButtonOne.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("active");
  popupExtended.classList.add("active");
});

extendedButtonTwo.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("active");
  popupExtended.classList.add("active");
});

extendedButtonThree.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("active");
  popupExtended.classList.add("active");
});

extendedButtonFour.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("active");
  popupExtended.classList.add("active");
});

closeButtonExtended.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("active");
  popupExtended.classList.remove("active");
});





