"use strict";

const mainTitle = document.querySelector(".header__container");

const URL =
"https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json";

async function request() {
    const response = await fetch(URL);
    const object = await response.json();
    const name = object.recipe.name;
    const title = document.createTextNode(name);
    mainTitle.appendChild(title);
    const currency = object.recipe.currency;
    const ingredients = object.recipe.ingredients;
    ingredients.map(ingredient => {
        const product = ingredient.product;
        const brand = ingredient.brand;
        const quantity = ingredient.quantity;
        const price = ingredient.price;
    });
    console.log(title);
    

}