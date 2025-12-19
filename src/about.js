"use strict";
//Creates The About Page Div then returns it to be exported;
import bannerImage from "./assets/papas-pizzeria-game-banner.jpg";
export const aboutDiv = createHomeDiv();

function createHomeDiv() {
  const aboutDiv = document.createElement("div");
  const aboutTitle = document.createElement("div");
  aboutTitle.textContent = "About Papa’s Pizzeria";
  aboutTitle.classList.add("aboutTitle");
  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `Papa’s Pizzeria is a fun and fast-paced restaurant management game where you step into the role of a pizza chef running Papa Louie’s famous pizzeria. What starts as a simple job quickly turns into a challenge of speed, accuracy, and customer satisfaction as more hungry customers walk through the door.
        <br><br>
In the game, players take customer orders, carefully add toppings, bake pizzas to perfection, and slice them just right before serving. Each step matters—customers will judge your work based on how closely the pizza matches their order. The better you perform, the more tips you earn, helping you improve your skills and progress through the game.
<br><br>`

const banner = document.createElement("img");
banner.src = bannerImage;
banner.classList.add("bannerImage");
info.appendChild(banner);

info.innerHTML += `<br><br>As you advance, the pizzeria becomes busier and more demanding. New customers with unique preferences appear, and multitasking becomes essential. The game rewards attention to detail and time management, encouraging players to balance speed with precision to keep everyone happy.
<br><br>
With its colorful art style, simple controls, and satisfying gameplay loop, Papa’s Pizzeria is easy to learn but challenging to master. Whether you’re aiming for perfect scores or just enjoying the process of making virtual pizzas, the game delivers a fun and engaging experience for players of all ages.`

  aboutDiv.appendChild(aboutTitle);
  aboutDiv.appendChild(info);
  return aboutDiv;
}