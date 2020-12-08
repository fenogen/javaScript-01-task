// Напиши скрипт присвоения переменной message одной из двух строк 
// в зависимости от количества товаров на складе с помощью тернарного
// оператора.


'use strict'; 

const total = 130; // 100 20 80 130
const ordered = 50;

console.log(ordered <= total);

const message = ordered <= total ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров';

// if (ordered <= total) {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//  }
//  else {
//     message = 'На складе недостаточно товаров';
// }

console.log(message);