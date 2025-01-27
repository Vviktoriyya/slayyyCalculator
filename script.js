let digitInput1 = document.getElementById('digitInput1');
let digitInput2 = document.getElementById('digitInput2');
let operations = document.getElementById('operations');
let calculate = document.getElementById('calculate');
let resultCalculate = document.getElementById('resultCalculate');

let selectedOperation = null; // Змінна для збереження вибраної операції

// обробник подій для кнопок операцій
operations.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') { //це властивість об'єкта події, яка повертає тег елемента, на якому відбулася подія.
        selectedOperation = event.target.getAttribute('data-operation');
        console.log("Вибрана операція:", selectedOperation);
    }
});

calculate.addEventListener('click', function () {
    let num1 = digitInput1.value.trim(); //  trim видаляє пробіли
    let num2 = digitInput2.value.trim();

    if (num1 === "" || num2 === "") {
        resultCalculate.textContent = "Заповніть всі комірки!";
        return; // Зупиняємо виконання
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        resultCalculate.textContent = "Введіть коректні числа!";
        return;
    }

    if (!selectedOperation) {
        resultCalculate.textContent = "Оберіть операцію!";
        return;
    }

    // результат
    let result = calculateDigitsResult(num1, num2, selectedOperation);
    resultCalculate.textContent = result;
});

function calculateDigitsResult(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 === 0) {
                return "На 0 ділити не можна!";
            }
            return num1 / num2;
        default:
            return "Невідома операція!";
    }
}
