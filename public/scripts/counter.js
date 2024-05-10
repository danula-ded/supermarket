const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countElement = document.getElementById("count");
const addToCartButton = document.getElementById("addToCart");

// FIXME: здесь надо сделать так чтобы каждый продукт добавлялся в корзину по нажатию на кнопку отдельно

let count = 0;

decrementButton.addEventListener("click", () => {
  count--;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

function updateCounter() {
  countElement.textContent = count;
}

addToCartButton.addEventListener("click", () => {
  addToCartButton.textContent = "В корзине";
  addToCartButton.style.backgroundColor = "#28a745";
});
