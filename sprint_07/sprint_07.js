const goods = document.querySelector('.goods'); // select
const square = document.querySelector('.square'); // площадь
const layer = document.querySelector('.layer'); // толщина слоя
const out1 = document.querySelector('.out-1'); // Расход
const out2 = document.querySelector('.out-2'); // Количество мешков
const out3 = document.querySelector('.out-3'); // Цена
const goodsImg = document.querySelector('.goods-img'); // 

// функция - расход
function t01() {
    let expenditure = 0; // расход
    let k = 0; // коэффициент, зависит от материала
    let price = 0; // цена 1 мешка

    const value = goods.value;

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
        // case 'polimin':
        //     console.log('polimin');
        //     k = ;
        //     price = ;
        //     break;
        // case 'siltek':
        //     console.log('siltek');
        //     k = ;
        //     price = ;
        //     break;
    }

    expenditure = square.value * layer.value * k;
    out1.textContent = expenditure + ' кг.'
// STOP 25-00
}

// Замена изображения при выборе товара в select -- 15-59
function t02() {
    const value = goods.value;
    // console.log(value);
    goodsImg.src = './images/' + value + '.jpg';
}

goods.onchange = t02;
document.querySelector('.b-1').onclick = t01;















// *******************************

// Task 05
// Напишите switch case для первых двух товаров, как указано в видео.

// Task 06
// Добавьте в код расчет расхода по формуле:

// expenditure = square.value * layer.value * k
// Task 07
// Выведите результат расчета расхода в кг на страницу в элемент .out-1.

// Task 08
// Вернитесь в функцию t02, и после кода отвечающего за смену изображения, добавьте очистку элементов .out-1, .out-2, .out-3 как показано на видео.

// Task 9
// Вернитесь в функцию t01. Добавьте вывод на страницу расхода в мешках. Для это поделите переменную expenditure на 25, после чего округлите результат в большую сторону.

// Task 10
// Выведите стоимость товара, умножив количество мешков на их price.

// Task 11
// Добавьте остальные товары в выпадающий список и switch case. Проверьте работоспособность кода.

// Task 12
// Добавьте проверку на отрицательную площадь, вводимую в square.

// Task 13
// Добавьте проверку на отрицательную толщину слоя, вводимую в layer.

// Task 14
// Добавьте проверку на толщину слоя больше 100мм.

// Task 15
// Добавьте проверки на пустую строку вводимую в square и layer. Если значение - пустая строка, то ставьте значение переменных равное 1 и присвойте в input для площади и толщины слоя значение 1.

// Проверка на пустую строку проводится так:

// if (square.value.trim() === '') {
//   square.value = 1;
// }
// аналогично и для толщины слоя.
// ============================================================
// Task 05
// Task 06
// Task 07
// Task 08
// Task 9
// Task 10
// Task 11
// Task 12
// Task 13
// Task 14
// Task 15
