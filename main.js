"use strict";
const object = {
  recipe: {
    name: "Risotto de setas (vegano)",
    "shipping-cost": 7,
    currency: "€",
    ingredients: [
      {
        product: "Margarina de maíz",
        brand: "Artua",
        items: 1,
        quantity: "600 gr.",
        price: 2.95
      },
      {
        product: "Arroz de Valencia",
        brand: "De Nuestra Tierra",
        items: 1,
        quantity: "1 kg.",
        price: 2.4
      },
      {
        product: "Caldo de verduras natural",
        brand: "Aneto",
        items: 1,
        quantity: "1 l.",
        price: 3.6
      },
      {
        product: "Seta Shiitake ecológica",
        items: 1,
        quantity: "200 gr.",
        price: 3.55
      },
      {
        product: "Paragoce, vino blanco",
        brand: "Verdejo D.O. Rueda",
        items: 1,
        quantity: "0,57 cl.",
        price: 5.85
      },
      {
        product: "Ajo",
        items: 1,
        quantity: "270 gr.",
        price: 1.49
      },
      {
        product: "Cebolla chalotas",
        items: 1,
        quantity: "200 gr.",
        price: 2.99
      }
    ]
  }
};

const mainTitle = document.querySelector(".header__title");
const listOfIngredients = document.querySelector(".ingredients__container");
const totalPrice = document.querySelector(".result__price-total");
const totalItems = document.querySelector(".result__items-total");

const URL =
  "https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json";

async function request() {
  // function request() {
  const response = await fetch(URL);
  const object = await response.json();
  const recipe = object.recipe;
  const ingredients = recipe.ingredients;
  console.log(ingredients);

  paintElements();
}

function paintElements() {
  request();

  const name = recipe.name;
  const title = document.createTextNode(name);
  mainTitle.appendChild(title);

  ingredients.map(ingredient => {
    //list
    const listElement = document.createElement("li");

    //checkbox
    const labelCheckbox = document.createElement("label");
    labelCheckbox.for = "select";
    labelCheckbox.title = "select";
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "select";
    inputCheckbox.value = "select";
    inputCheckbox.name = "select";
    labelCheckbox.appendChild(inputCheckbox);

    //number
    const labelNumber = document.createElement("label");
    labelNumber.for = "quantity";
    labelNumber.title = "quantity";
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.id = "quantity";
    inputNumber.value = ingredient.quantity;
    inputNumber.min = "0";
    labelNumber.appendChild(inputNumber);

    //product
    const containerProduct = document.createElement("div");

    const productElement = document.createElement("h2");
    const product = document.createTextNode(ingredient.product);
    productElement.appendChild(product);

    const brandElement = document.createElement("p");
    const brand = document.createTextNode(
      ingredient.brand === undefined ? "Marca no disponible" : ingredient.brand
    );
    brandElement.appendChild(brand);

    const weightElement = document.createElement("p");
    const weight = document.createTextNode(ingredient.weight);
    weightElement.appendChild(weight);

    containerProduct.appendChild(productElement, brandElement, weightElement);

    //price

    const containerPrice = document.createElement("div");

    const priceElement = document.createElement("p");
    const price = document.createTextNode(ingredient.price);
    priceElement.appendChild(price);

    const currencyElement = document.createElement("p");
    const currency = document.createTextNode(ingredient.currency);
    currencyElement.appendChild(currency);

    containerPrice.appendChild(priceElement, currencyElement);

    listElement.append(
      labelCheckbox,
      labelNumber,
      containerProduct,
      containerPrice
    );
    console.log(listElement);
  });
}

function total() {}
