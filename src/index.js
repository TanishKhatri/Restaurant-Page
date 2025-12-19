import { homeDiv } from "./home";
import { menuDiv } from "./menu";
import { aboutDiv } from "./about";
import "./styles.css";

function createEventListeners(homeDiv, menuDiv, aboutDiv) {
  const homeButton = document.querySelector("#homeButton");
  const menuButton = document.querySelector("#menuButton");
  const aboutButton = document.querySelector("#aboutButton");
  const contentDiv = document.querySelector("#content");

  homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(homeDiv);
  });
  
  menuButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuDiv);
  });

  aboutButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(aboutDiv);
  });
}

createEventListeners(homeDiv, menuDiv, aboutDiv);

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(homeDiv);