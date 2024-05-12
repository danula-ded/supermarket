function calculateTotalPrice() {
  // Находим все элементы span с классом price
  const priceSpans = document.querySelectorAll(".price");

  // Получаем элемент span с id total-price для вывода итоговой суммы
  const totalPriceDiv = document.getElementById("total-price");

  // Переменная для хранения общей суммы
  let totalPrice = 0;

  // Для каждого span с классом price
  priceSpans.forEach((span) => {
    // Находим родительский элемент .busket__product
    const product = span.closest(".busket__product");

    // Находим чекбокс .product__checkbox внутри родительского элемента
    const checkbox = product.querySelector(".product__checkbox");

    // Находим ближайшее числовое поле ввода
    const inputField = product.querySelector(
      '.busket__product__button input[type="number"]'
    );

    // Если чекбокс включен
    if (checkbox.checked) {
      // Получаем значение цены из span
      const price = parseFloat(span.textContent);

      // Получаем значение из числового поля ввода и умножаем его на цену
      const inputValue = parseInt(inputField.value);
      const totalProductPrice = price * inputValue;

      // Добавляем цену товара к общей сумме
      totalPrice += totalProductPrice;
    }
  });

  // Отображаем итоговую сумму в элементе span с id total-price
  totalPriceDiv.textContent = totalPrice + "₽";
}

// Вызываем функцию для первоначального расчета итоговой суммы
calculateTotalPrice();

// Навешиваем обработчики событий на чекбоксы и числовые поля ввода для пересчета суммы
const checkboxes = document.querySelectorAll(".product__checkbox");
const numberInputs = document.querySelectorAll(
  '.busket__product__button input[type="number"]'
);
const btns = document.querySelectorAll(".busket__product__button button");
console.log(buttons);
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", calculateTotalPrice);
});

numberInputs.forEach((input) => {
  input.addEventListener("change", calculateTotalPrice);
});

btns.forEach((button) => {
  button.addEventListener("click", calculateTotalPrice);
});
