// Task 1
// Напишите код в функции t01. Код получает атрибут lang из тега html и выводит в .out-1.

function t01 () {
    let out1 = document.querySelector('.out-1');
    let lang01 = document.querySelector('html').getAttribute('lang');
    // console.log(lang01);
    out1.textContent = lang01;  
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Напишите код в функции t02. Код задает атрибут lang для тега html, значение атрибута - 'ru'.

function t02 () {
    let lang02 = document.querySelector('html');
    lang02.setAttribute('lang', 'ru');
    console.log(lang02);
}

document.querySelector('.b-2').onclick = t02;


// Task 3
// Напишите код в функции t03. Функция должна вывести текст из элемента #d-3 в .out-3.

function t03 () {
    document.querySelector('.out-3').textContent = document.querySelector('#d-3').textContent;
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Напишите код в функции t04. Функция должна получить элемент #d-3 и изменить его id на значение 'd-4'. Затем вывести текст из элемента #d-4 в .out-4.

function t04 () {
    let out4 = document.querySelector('.out-4');
    let d4 = document.querySelector('#d-3');
    
    d4.setAttribute('id', 'd-4');
    console.log('d4');
    console.log('id:' + d4.getAttribute('id'));
    
    out4.textContent = d4.textContent;
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Напишите код в функции t05. Функция должна получить input.i-5 и заменить атрибут type="text" на type="password".

function t05 () {
    let i5 = document.querySelector('.i-5');
    i5.setAttribute('type', 'password');
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Напишите код в функции t06. Функция должна получить input.i-6 и добавить ему атрибут placeholder равный 'Arch Druidess'.

function t06 () {
    document.querySelector('.i-6').setAttribute('placeholder', 'Arch Druidess');

    // console.log('placeholder:' + document.querySelector('.i-6').getAttribute('placeholder'));
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Напишите код в функции t07. Функция должна вывести атрибут alt изображения .img-7 в .out-7.

function t07 () {
    let out7 = document.querySelector('.out-7');
    
    out7.textContent = document.querySelector('.img-7').getAttribute('alt');    
}

document.querySelector('.b-7').onclick = t07;

// Task 8
// Напишите код в функции t08. Функция должна заменить атрибут src изображения .img-8 на строку './images/witch.png'.

function t08 () {
    document.querySelector('.img-8').setAttribute('src', './images/witch.png');
}

document.querySelector('.b-8').onclick = t08;


// Task 9
// Напишите код в функции t09. Функция должна задавать атрибут checked для input.ch-9.

function t09 () {
    document.querySelector('.ch-9').setAttribute('checked', true);
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Напишите код в функции t10. Функция должна задавать атрибут title для гиперссылки .link-10, равный 'Pendergast'.

function t10 () {
    document.querySelector('.link-10').setAttribute('title', 'Pendergast');

    // console.log('title:' + document.querySelector('.link-10').getAttribute('title'));
}

document.querySelector('.b-10').onclick = t10;


// Task 11
// Напишите код в функции t11. Функция должна задавать атрибут disabled для input.i-11.

function t11 () {
    document.querySelector('.i-11').setAttribute('disabled', true);
}

document.querySelector('.b-11').onclick = t11;



// Task 12
// Напишите код в функции t12. Функция должна задавать атрибут hidden для img.img-12.

function t12 () {
    document.querySelector('.img-12').setAttribute('hidden', true);
}

document.querySelector('.b-12').onclick = t12;

// Task 13
// Напишите код в функции t13. Функция должна задавать атрибут start равный 5 для ol.list-13.

function t13 () {
    document.querySelector('.list-13').setAttribute('start', 5);
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Напишите код в функции t14. Функция должна задавать атрибут reversed для ol.list-13.

function t14 () {
    document.querySelector('.list-13').setAttribute('reversed', true);
}

document.querySelector('.b-14').onclick = t14;


// Task 15 -- НУЖНО ПОДУМАТЬ !!!
// Напишите код в функции t15. Функция должна проверять наличие атрибута hidden у div.out-15. Если атрибут есть - удалять его. Если нет - добавлять.

function t15 () {
    let out15 = document.querySelector('.out-15');
    let hid15 = out15.getAttribute('hidden');

    if (hid15 == true) {
        hid15.removeAttribute('hidden');        
    } else {
        hid15.setAttribute('hidden', true);
    }
}

document.querySelector('.b-15').onclick = t15;

// ********************************************
// Task 15
// --------------
// Task 1 -- ok
// Task 2 -- ok
// Task 3 -- ok
// Task 4 -- ok
// Task 5 -- ok
// Task 6 -- ok
// Task 7 -- ok
// Task 8 -- ok
// Task 9 -- ok
// Task 10 -- ok
// Task 11 -- ok
// Task 12 -- ok
// Task 13 -- ok
// Task 14 -- ok
