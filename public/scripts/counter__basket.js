// Выбираем все элементы с классом "example-class"
var buttons = document.querySelectorAll(".busket__product__button");

// Проходим по всем найденным кнопкам и навешиваем на них функцию обработчика
buttons.forEach((btn) => createCounter(btn));

function createCounter(btn) {
  // Создаем новый элемент input для ввода чисел
  var inputField = document.createElement("input");
  inputField.type = "number";
  inputField.value = 1;

  // Создаем переменную для таймера
  var timeoutId;

  // Добавляем обработчик события keydown для поля ввода
  inputField.addEventListener("keydown", function (event) {
    // Проверяем, нажата ли клавиша "-"
    if (event.key === "-" || event.key === "e") {
      // Предотвращаем действие по умолчанию (вставку символа "-" / "e")
      event.preventDefault();
    }
  });

  // Создаем кнопку "+"
  var incrementBtn = document.createElement("button");
  incrementBtn.textContent = "+";
  incrementBtn.onclick = function () {
    inputField.value = parseInt(inputField.value) + 1;
    update_to_cart(inputField.value);
  };

  // Создаем кнопку "-"
  var decrementBtn = document.createElement("button");
  decrementBtn.textContent = "-";
  decrementBtn.onclick = function () {
    inputField.value = parseInt(inputField.value) - 1;

    // делаем провеку при изменении значения оно не должно быть меньше 1 и не должно быть пустым
    if (!check_value()) {
      update_to_cart(inputField.value); // функция отправки данных в корзину
    }
  };

  // Добавляем обработчик события change для поля ввода
  inputField.addEventListener("change", function () {
    // делаем провеку при изменении значения оно не должно быть меньше 1 и не должно быть пустым
    if (!check_value()) {
      update_to_cart(inputField.value); // функция отправки данных в корзину
    }
  });

  // Добавляем элементы на страницу
  btn.appendChild(decrementBtn);
  btn.appendChild(inputField);
  btn.appendChild(incrementBtn);

  // функция отправки данных в корзину
  function update_to_cart(value) {
    // Это функция, которая будет вызвана, при каждом изменении значения
    // Добавляем обработчик события input для поля ввода
    clearTimeout(timeoutId); // Отменяем предыдущий таймер
    timeoutId = setTimeout(function () {
      console.log("В корзине: " + value + " единиц");
    }, 500); // Задержка в миллисекундах для определения завершения ввода
  }
  function check_value() {
    if (
      parseInt(inputField.value) <= 0 ||
      isNaN(parseInt(inputField.value)) ||
      inputField.value === ""
    ) {
      // Если значение становится <= 0, то поле ввода равно 1
      inputField.value = 1;
      return true;
    }
    return false;
  }
}
