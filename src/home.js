"use strict";
//Creates The Home Page Div then returns it to be exported;
export const homeDiv = createHomeDiv();

function createHomeDiv() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  
  const welcomeSpan1 = document.createElement("span");
  welcomeSpan1.classList.add("welcome");
  welcomeSpan1.textContent = "Welcome to Papa’s Pizzeria";

  const breakElement = document.createElement("br");

  const welcomeSpan2 = document.createElement("span");
  welcomeSpan2.classList.add("welcome");
  welcomeSpan2.innerHTML = `This is Roy, Papa Louie has trusted him with his beloved pizzeria, and now it’s up to him to keep the ovens hot and the customers happy! <br> <br> Problem is he has no cooking experience! If you want burned pizzas and far more change then you need come to Papa's Pizzeria and enjoy your meal!`;
  
  homeDiv.appendChild(welcomeSpan1);
  homeDiv.appendChild(breakElement);
  
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("royProfile");

  homeDiv.appendChild(imageDiv);
  homeDiv.appendChild(breakElement);
  homeDiv.appendChild(welcomeSpan2);
  return homeDiv;
}