const goods = document.querySelector('.goods'); // select
const square = document.querySelector('.square'); // площадь
const layer = document.querySelector('.layer'); // толщина слоя
const out1 = document.querySelector('.out-1'); // расход
const out2 = document.querySelector('.out-2'); // количество мешков
const out3 = document.querySelector('.out-3'); // цена
const goodsImg = document.querySelector('.goods-img'); // картинка (иображение) материала

// функция - расход
function t01() {
    let expenditure = 0; // расход
    let k = 0; // коэффициент, зависит от материала
    let price = 0; // цена 1 мешка

    const value = goods.value;

    if (square.value < 1) square.value = 1;
    if (square.value > 10000) square.value = 1; // обсуждаем с заказчиком
    if (layer.value < 1) layer.value = 1;
    if (layer.value > 100) layer.value = 100; // обсуждаем с заказчиком

    switch (value) {
        case 'budmaster':
            console.log('budmaster');
            k = 1.9;
            price = 157;
            break;
        case 'ceresit':
            console.log('ceresit');
            k = 2;
            price = 136;
            break;
        case 'polimin':
            console.log('polimin');
            k = 1;
            price = 110;
            break;
        case 'siltek':
            console.log('siltek');
            k = 2;
            price = 151;
            break;
    }

    expenditure = square.value * layer.value * k; // вычисляем расход
    out1.textContent = expenditure + ' кг.';
    out2.textContent = Math.ceil(expenditure / 25) + ' мешка / мешков'; // Math.ceil - Метод Math.ceil производит округление числа до целых всегда в большую сторону
    out3.textContent = price * Math.ceil(expenditure / 25) + ' uah'; // вычисляем итоговую стоимость
}

// Замена изображения при выборе товара в select
function t02() {
    const value = goods.value;
    // console.log(value);
    goodsImg.src = './images/' + value + '.jpg';
    out1.textContent = ''; // очищаем поля вывода от предыдущих значений
    out2.textContent = '';
    out3.textContent = '';
}

goods.onchange = t02;
document.querySelector('.b-1').onclick = t01;


// Task 15
// Добавьте проверки на пустую строку вводимую в square и layer. Если значение - пустая строка, то ставьте значение переменных равное 1 и присвойте в input для площади и толщины слоя значение 1.

// Проверка на пустую строку проводится так:

// if (square.value.trim() === '') {
//   square.value = 1;
// }
// аналогично и для толщины слоя.

// ============================================================
// Task 15
