// Homework #1


// 1) Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: 
//    Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
const celsius = 27;
let fahrenheit = (9 / 5) * celsius + 32;
console.log(fahrenheit); // or alert()


// 2) Работа с переменными.
const one   =  1;
let two     =  '2';
var three   =  true;


// 3) Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
let admin;
let name = 'Василий';
admin = name;
console.log(admin); // 'Василий'!


// 4) * Чему будет равно JS-выражение 1000 + "108";
console.log(1000 + '108'); // 1000108


// 5) * Самостоятельно разобраться с атрибутами тега script (async и defer)
// <script src="app.js" async></script> скрипт загружается асинхронно вместе со страницей
// <script src="app.js" defer></script> скрипт также загружается асинхронно вместе с загрузкой страницы, 
// но он гарантирует порядок выполнения скриптов сверху вниз, в отличие от async.