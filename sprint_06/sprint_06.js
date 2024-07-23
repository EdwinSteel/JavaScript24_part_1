// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, получает ЧИСЛО из input.i-1 и если это число больше чем 1500 выводит в .out-1 единицу. 

function t01 () {

    let inp1 = +document.querySelector('.i-1').value;
    document.querySelector('.out-1').textContent = '';

    if (inp1 > 1500) {
        document.querySelector('.out-1').textContent = 1;
    }    
    // console.log(inp1);
    // console.log(typeof inp1);
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// В предыдущем задании условие выполняется когда изменялся вывод. Если вывод не изменялся, то if не работал и состояние вывода не изменялось. Это не удобно. Давайте изменим задачу и сделаем "вилку", т.е. программа ОБЯЗАТЕЛЬНО пойдет или по одной, или по другой ветке. Если у вас вилка - применяем if else.
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, получает ЧИСЛО из input.i-2 и если это число больше чем 1500 выводит в .out-2 единицу, если меньше - нуль.


function t02 () {

    let inp2 = +document.querySelector('.i-2').value;
    let out2 = document.querySelector('.out-2');
    out2.textContent = '';

    if (inp2 > 1500) {
        out2.textContent = 1;
    } 
    
    else if (inp2 === 1500) {
        out2.textContent = 'Введено число 1500, но для него в условии не описано что делать';
    }
    
    else {
        out2.textContent = 0;
    }
        
    console.log(inp2);
    console.log(typeof inp2);
}

document.querySelector('.b-2').onclick = t02;


// Task 3
// В некоторых случаях в задаче могут идти просто не связанных друг с другом условий.
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, получает ЧИСЛО из input.i-3 и если это число больше нуля выводит в .out-31 единицу, если меньше - нуль. Если число четное, то в .out-32 выводится строка 'even', если нечетное - 'odd'.

function t03 () {

    let inp3 = +document.querySelector('.i-3').value;
    let out31 = document.querySelector('.out-31');
    let out32 = document.querySelector('.out-32');
    out31.textContent = '';
    out32.textContent = '';

    if (inp3 > 0) {
        out31.textContent = 1;
    } 
    
    else if (inp3 === 0) {
        out31.textContent = 'Введено число 0, но для него в условии не описано что делать';
    }
    
    else {
        out31.textContent = 0;
    }
    
    if (inp3 % 2) {
        out32.textContent = 'odd';
    }
    else {
        out32.textContent = 'even';
    }

    console.log(inp3);
    console.log(typeof inp3);
}

document.querySelector('.b-3').onclick = t03;


// Task 4 -------- Изучил
// Создана функция t04. Функция запускается при нажатии .b-4. Функция всегда будет выводить в .out-4 строку 'Ян Павел ', потому, что условие в if всегда выполняется. Проверьте. Не забывайте, что условие внутри if всегда сводится к true, false. 

function t04 () {
    if (true) {
        document.querySelector('.out-4').textContent += 'Ян Павел ';
    }
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 в переменную, например num. Дальше напишите условие вида if (num) то выводим в .out-5 число 1, в противном случае число 0. Попробуйте запустить ваш код подставляя в input разные числа. Попробуйте отрицательные числа и обязательно нуль.

function t05 () {
    
    let num = +document.querySelector('.i-5').value;
    let out5 = document.querySelector('.out-5');

    if (num){
        out5.textContent = 1;
    } 

    else {
        out5.textContent = 0;
    }

    console.log(num);
    console.log(typeof num);
}

document.querySelector('.b-5').onclick = t05;

// Task 6 --- ЗАКОНЧЕН. НО ЧТО ДЕЛАЕМ ЕСЛИ === 10 ?
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции, который читает строку из input.i-6 и если длина строки больше 10 символов то выводит в .out-6 true. Если меньше - false. Обратите внимание, данную задачу можно решить без операторов if...

function t06 () {

    let inp6 = document.querySelector('.i-6').value;
    let out6 = document.querySelector('.out-6');
    
    out6.textContent = (inp6.length > 10) ? true : false;
    
    console.log(inp6);
    console.log(inp6.length);
    console.log(typeof inp6);
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Функция читает из input.i-71 и input.i-72 числа и выводит в .out-7 большее из двух этих чисел. Если числа равны, то выводится число из .i-71.

function t07 () {

    let i71 = +document.querySelector('.i-71').value;
    let i72 = +document.querySelector('.i-72').value;
    let out7 = document.querySelector('.out-7');

    out7.textContent = '';

    if (i71 > i72) {
        out7.textContent = i71;
    }

    else if (i71 === i72) {
        out7.textContent = i71;
    }
    
    else {
        out7.textContent = i72;
    }

    console.log(i71, i72);
    console.log(typeof i71, typeof i72);    
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция читает год рождения из input.i-8 и если пользователю больше 16 лет, то выводит единицу в .out-8. Если пользователю меньше 16 лет, то выводит в .out-8 число -1. Если пользователю 16 лет, то выводит 0.

function t08 () {
    
    let year = new Date().getFullYear(); // текущий год
    let birthyear = +document.querySelector('.i-8').value; // год рождения
    let out8 = document.querySelector('.out-8');

    if (year - birthyear > 16) {
        out8.textContent = 1;
    }
    
    else if (year - birthyear === 16) {
        out8.textContent = 0;
    }
        
    else {
        out8.textContent = -1;
    }    
    
    console.log(year, typeof year);
    console.log(birthyear, typeof birthyear);    
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции, код читает номер квартиры из input.i-9. В доме три подъезда:
// первый квартиры от 1 до 36
// второй квартиры от 37 до 87
// третий от 88 до 110.
// все числа указаны включительно. Функция должна выводить в .out-9 номер подъезда в зависимости от введенной квартиры. Если число выходит из указанных диапазонов - то выводится 0.

function t09 () {

    let room = +document.querySelector('.i-9').value;
    let out9 = document.querySelector('.out-9');
        
    if (room >= 1 && room <=36) {
        out9.textContent = 1;
    } 
        
    else if (room >= 37 && room <=87) {
        out9.textContent = 2;
    }

    else if (room >= 88 && room <=110) {
        out9.textContent = 3;
    }

    else {
        out9.textContent = 0;
    }
    
    console.log(room, typeof room);
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при изменении input.r-10. Если число от:
// 20 до 30 то в .out-10 выводится строка 'cold'
// 31 до 50 то в .out-10 выводится строка 'warm'
// 51 до 70 то в .out-10 выводится строка 'hot'

function t10 () {

    let r10 = +document.querySelector('.r-10').value;
    let out10 = document.querySelector('.out-10');

    if (r10 >= 20 && r10 <= 30) {
        out10.textContent = 'cold';
    } 
    
    if (r10 >= 31 && r10 <= 50) {
        out10.textContent = 'warm';
    }

    if (r10 >= 51 && r10 <= 70) {
        out10.textContent = 'hot';
    }
    
    console.log(r10, typeof r10);
}

document.querySelector('.r-10').oninput = t10;


// Task 11 -------- ГДЕ-ТО У МЕНЯ ОШИБКА ??????
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код внутри функции, который читает имя пользователя из .i-111 и пароль из .i-112. Если имя пользователя пустая строка, то в .out-11 выводится строка 'username error' и проверка дальше не делается. Если длина пароля меньше 10 символов, то в .out-11 выводится 'password error'. Если ошибок нет, то в .out-11 выводится true.

function t11 () {

    let i111 = document.querySelector('.i-111').value; // user name
    let i112 = document.querySelector('.i-112').value; // password
    let out11 = document.querySelector('.out-11');
    
    // out11.textContent = '';
    
    if (i111 === '') {
        out11.textContent = 'username error';
        // break;
    } 
    
    // else {
    //     out11.textContent = 'wwwwwwwwwww';
    // }


    console.log(i111, i112);
}

document.querySelector('.b-11').onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который выводит в .out-12 большее из двух чисел num_1 и num_2. Примените тернарный оператор. Случай равенства не рассматриваем.

let num_1 = 5;
let num_2 = 9;

function t12 () {

    let out12 = document.querySelector('.out-12');

    out12.textContent = (num_1 > num_2) ? num_1 : num_2;    
}

document.querySelector('.b-12').onclick = t12;


// Task 13 --------
// Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который выводит в .out-13 отрицание переменной bool.

let bool = true;

function t13 () {
   
    
}

document.querySelector('.b-13').onclick = t13;


// Task 14 --------
// Создана функция t14. Функция запускается при нажатии .b-14. Напишите код внутри функции, который проверяет, что если g14 не равна 2000 то выводит в .out-14 число 0. Если равна - число 1. Примените тернарный оператор.

let g14 = 2001;

function t14 () {
   
}

document.querySelector('.b-14').onclick = t14;


// Тask 15 --------
// При изменении select запускается функция t15. Список select содержит названия товаров. Если value товара кодируется true, то товар продается по скидке. Напишите внутри функции код, который получает value текущего товара и если предусмотрена скидка - выводит в .out-15 строку 'sale'. Если скидка не предусмотрена - выводится пустая строка.

function t15() {

}

document.querySelector('.s-15').onchange = t15;


// Task 16 --------
// Создана функция t16. Функция запускается при вводе в input.i-16 текста. Функция должна выводить вводимый в input текст в .out-16. Если длина текста меньше 5 символов, то .out-16 должен окрашиваться (backgroundColor) в цвет 'red'. Если длина текста от 5 (включительно) до 10 (включительно), то цвет фона - 'orange'. Если длина текста больше 10 символов, то цвет фона 'green'. 

function t16 () {
   
}

document.querySelector('.i-16').oninput = t16;

// Task 17 --------
// Создана функция t17. Функция запускается при нажатии .b-17. Функция сравнивает значение из переменной url и если:
// url равно '/' то в .out-17 выводится строка 'frontend'
// url равно '/admin' то в .out-17 выводится строка 'backend'
// в остальных случаях в .out-17 выводится строка 'site'
// примените switch case.

let url ='/admin';

function t17 () {
   
}

document.querySelector('.b-17').onclick = t17;


// Task 18 --------
// Создана функция t18. Функция запускается при нажатии кнопки .b-18. Функция считывает value из select.s-18 и если:
// value = 1 выводит в .out-18 строку 'admin'
// value = 2 выводит в .out-18 строку 'moderator'
// value = 3 выводит в .out-18 строку 'user'
// применяйте switch case

function t18 () {
   
}

document.querySelector('.b-18').onclick = t18;

// Task 19 --------
// Создана функция t19. Функция запускается при клике на кнопку .b-19. Если .ch-19 является выбранным (checked), то выведите в .out-19 число 1. Если не выбран - число 0.


function t19() {

}

document.querySelector('.b-19').onclick = t19;

// Task 20 --------
// Создана функция t20. Функция запускается при изменении состояния .ch-20. Если .ch-20 является выбранным, то в .out-20 выводите value данного input[type="checkbox"]. Если не выбран - выводите нуль.

function t20() {

}

document.querySelector('.ch-20').oninput = t20;

// **************************************
// Task 11 --------
// Task 13 --------
// Task 14 --------
// Тask 15 --------
// Task 16 --------
// Task 17 --------
// Task 18 --------
// Task 19 --------
// Task 20 --------
// Task 4 -------- Изучил