"use strict";
//Creates The Menu Page Div then returns it to be exported;
export const menuDiv = createHomeDiv();

function createHomeDiv() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  //Pizza 1
  const pizzaDiv1 = document.createElement("div");
  pizzaDiv1.classList.add("pizza");
  const pizzaTitle1 = document.createElement("div");
  pizzaTitle1.classList.add("pizzaTitle");
  pizzaTitle1.textContent = "Pepperoni";
  const pizzaImage1 = document.createElement("div");
  pizzaImage1.classList.add("pizzaImage");
  pizzaImage1.id = "pizza1";
  pizzaDiv1.appendChild(pizzaTitle1);
  pizzaDiv1.appendChild(pizzaImage1);
  menuDiv.appendChild(pizzaDiv1);

  //Pizza 2
  const pizzaDiv2 = document.createElement("div");
  pizzaDiv2.classList.add("pizza");
  const pizzaTitle2 = document.createElement("div");
  pizzaTitle2.classList.add("pizzaTitle");
  pizzaTitle2.textContent = "Tangy Olivian";
  const pizzaImage2 = document.createElement("div");
  pizzaImage2.classList.add("pizzaImage");
  pizzaImage2.id = "pizza2";
  pizzaDiv2.appendChild(pizzaTitle2);
  pizzaDiv2.appendChild(pizzaImage2);
  menuDiv.appendChild(pizzaDiv2);

  //Pizza 3
  const pizzaDiv3 = document.createElement("div");
  pizzaDiv3.classList.add("pizza");
  const pizzaTitle3 = document.createElement("div");
  pizzaTitle3.classList.add("pizzaTitle");
  pizzaTitle3.textContent = "Margherita";
  const pizzaImage3 = document.createElement("div");
  pizzaImage3.classList.add("pizzaImage");
  pizzaImage3.id = "pizza3";
  pizzaDiv3.appendChild(pizzaTitle3);
  pizzaDiv3.appendChild(pizzaImage3);
  menuDiv.appendChild(pizzaDiv3);

  //Pizza 4
  const pizzaDiv4 = document.createElement("div");
  pizzaDiv4.classList.add("pizza");
  const pizzaTitle4 = document.createElement("div");
  pizzaTitle4.classList.add("pizzaTitle");
  pizzaTitle4.textContent = "Cheesy Mushrooms";
  const pizzaImage4 = document.createElement("div");
  pizzaImage4.classList.add("pizzaImage");
  pizzaImage4.id = "pizza4";
  pizzaDiv4.appendChild(pizzaTitle4);
  pizzaDiv4.appendChild(pizzaImage4);
  menuDiv.appendChild(pizzaDiv4);

  //Pizza 5
  const pizzaDiv5 = document.createElement("div");
  pizzaDiv5.classList.add("pizza");
  const pizzaTitle5 = document.createElement("div");
  pizzaTitle5.classList.add("pizzaTitle");
  pizzaTitle5.textContent = "Black Tomatino";
  const pizzaImage5 = document.createElement("div");
  pizzaImage5.classList.add("pizzaImage");
  pizzaImage5.id = "pizza5";
  pizzaDiv5.appendChild(pizzaTitle5);
  pizzaDiv5.appendChild(pizzaImage5);
  menuDiv.appendChild(pizzaDiv5);

  //Pizza 6
  const pizzaDiv6 = document.createElement("div");
  pizzaDiv6.classList.add("pizza");
  const pizzaTitle6 = document.createElement("div");
  pizzaTitle6.classList.add("pizzaTitle");
  pizzaTitle6.textContent = "Leafy Tomatos";
  const pizzaImage6 = document.createElement("div");
  pizzaImage6.classList.add("pizzaImage");
  pizzaImage6.id = "pizza6";
  pizzaDiv6.appendChild(pizzaTitle6);
  pizzaDiv6.appendChild(pizzaImage6);
  menuDiv.appendChild(pizzaDiv6);

  return menuDiv;
}