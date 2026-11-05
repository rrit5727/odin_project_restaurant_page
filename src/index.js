import displayHeading from "./displayHeading";
import displayMenu from "./displayMenu";
import displayAbout from "./displayAbout";
console.log("Hello")



const content = document.getElementById("content");

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");

displayHeading();

homeButton.addEventListener('click', () => {
  content.textContent = "";
  displayHeading();
});

menuButton.addEventListener('click', () => {
  content.textContent = "";
  displayMenu();
});

aboutButton.addEventListener('click', () => {
  content.textContent = "";
  displayAbout();
});




// displayHeading();
