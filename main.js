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

const recipeTitle = document.querySelector(".header__title");
const ingredientsList = document.querySelector(".ingredients__container");

const totalItems = document.querySelector(".result__items-value");
const subtotalPrice = document.querySelector(".result__subtotal-value");
const shippingPrice = document.querySelector(".result__shipping-value");
const totalPrice = document.querySelector(".result__price-total");

// const URL =
//   "https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json";

// async function request() {
//   const response = await fetch(URL);
//   const object = await response.json();
  const recipe = object.recipe;
  const name = recipe.name;
  const title = document.createTextNode(name);
  recipeTitle.appendChild(title);
  const ingredients = recipe.ingredients;
  paintElements();

  // ingredientsList.innerHTML += `<li>
  //   <label for="select" title="select">
  //     <input class="select-item" id="select" type="checkbox" value="select" name="select" />
  //   </label>
  //   <label for="quantity" title="quantity">
  //     <input id="quantity" type="number" value=${item} min="0" />
  //   </label>
  //   <div class="product__container">
  //     <h2>${product}</h2>
  //     <p>${brand === undefined ? "Marca no disponible" : brand}</p>
  //     <p>${quantity}</p>
  //   </div>
  //   <div class="price__container">
  //     <p>${price} ${currency}</p>
  //   </div>
  // </li>`;
// }

// request();

function paintElements() {
  ingredients.map((ingredient, index) => {
    //Create list element
    const listElement = document.createElement("li");

    //Create checkbox
    const labelCheckbox = document.createElement("label");
    labelCheckbox.for = index;
    labelCheckbox.title = "select";
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = index;
    inputCheckbox.name = "select";
    inputCheckbox.addEventListener("change", handleCheckboxChange);
    labelCheckbox.appendChild(inputCheckbox);

    //Create input for item quantity
    const labelNumber = document.createElement("label");
    labelNumber.for = index;
    labelNumber.title = "item";
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.id = index;
    inputNumber.min = "0";
    inputNumber.addEventListener("change", handleInputValue);
    labelNumber.appendChild(inputNumber);

    // Create product data elements
    const containerProduct = document.createElement("div");
    const productElement = document.createElement("h2");
    const product = document.createTextNode(ingredient.product);
    productElement.appendChild(product);

    const brandElement = document.createElement("p");
    const brand = document.createTextNode(ingredient.brand || " ");
    brandElement.appendChild(brand);

    const quantityElement = document.createElement("p");
    const quantity = document.createTextNode(ingredient.quantity);
    quantityElement.appendChild(quantity);

    containerProduct.append(productElement, brandElement, quantityElement);

    //Create price data elements
    const priceElement = document.createElement("p");
    const price = document.createTextNode(ingredient.price);
    const currency = document.createTextNode(recipe.currency);
    priceElement.append(price, " ", currency);

    //Put elements inside the list
    listElement.append(
      labelCheckbox,
      labelNumber,
      containerProduct,
      priceElement
    );

    ingredientsList.append(listElement);
    totalizer();
  });
}

function totalizer() {
  let shipping = 7;
  let countItems = 0;
  let subtotal = 0;

  ingredients.forEach(ingredient => {
    // const totalIngredient = inputNumber.value;
    // countItems += totalIngredient;
    subtotal += ingredient.price;
  });
  totalItems.innerHTML = countItems;
  subtotalPrice.innerHTML = subtotal;
  shippingPrice.innerHTML = shipping;
  totalPrice.innerHTML = subtotal + shipping;
}

function handleInputValue(e) {
  const { value } = e.target;
}

function handleCheckboxChange(e) {
  const { value } = e.target;
  const { checked } = e.target;
  inputNumber.value = value;
  //si checked es true, item = 1
  // checked
  //   ? value === ingredients[checked].items
  //   : ingredients[checked].items === 0;

  console.log(inputNumber.value);
}
