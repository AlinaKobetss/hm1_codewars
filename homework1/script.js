// Задача 1. 
//function greet(name){
//     return (`Hello, ${name} how are you doing today?`)
//   }


//---------------------------------------------------
// Задача 2.

// function sayHello( name, city, state ) {
//     return `Hello, ${name.join ( ' ')}! Welcome to ${city}, ${state}!`
//   }

//---------------------------------------------------
// Задача 3.Определите общее количество цифр в целом числе ( n>=0), заданном в качестве входных данных функции. Например, 9 — однозначное число, 66 — 2-значное, а 128685 — 6-значное. Будьте осторожны, чтобы избежать переполнения/недополнения.

// function digits(n) {
//     return n.toString().length;
//   }
//   console.log(digits(100))

//---------------------------------------------------
// Задача 4.

// Простые числа Вильсона удовлетворяют следующему условию. Пусть P представляет собой простое число.
// Затем,
// ((P-1)! + 1) / (P * P)
// должен дать целое число.
// Ваша задача — создать функцию, которая возвращает значение true, если данное число является простым числом Вильсона .
// function amIWilson(p) {
//     return ( p === 5 || p === 13 || p ===563 ) ? true : false;
//   }
// function amIWilson(number) {
//     const knownWilsonPrimes = [5, 13, 563];
//     return knownWilsonPrimes.includes(number)
//   }

//---------------------------------------------------
// Задача 7.

// function checkRoot(string) {
//     var parts = string.split(",")
//     if (parts.length != 4 || parts.some(isNaN)) return "incorrect input"
//     if (parts.some((x, i) => i > 0 && x - parts[i - 1] != 1)) return "not consecutive"
//     var n = parts.reduce((n, x) => n * x, 1) + 1
//     var p = Math.sqrt(n)
//     return `${n}, ${p}`
//   }

// //---------------------------------------------------
// // Задача 8.

//   function slope([ x1, y1, x2, y2 ]) {
//     let slope = (y2 - y1) / (x2 - x1);
//     return Number.isFinite(slope) ? `${slope}` : 'undefined';
//   }

// //---------------------------------------------------
// // Задача 9.
// const areaOrPerimeter = function(l , w) {
//     if (w == l) {
//       return w * l;
//     }
//       else {
//         return 2*l+2*w;
//       }
//   };


// //---------------------------------------------------
// // Задача 10.
// function seatsInTheater(nCols, nRows, col, row) {
//     return (nCols-col+1) * (nRows - row);  
//   }


// //---------------------------------------------------
// // Задача 11.
// function century(year) {
//     return Math.ceil(year/100);
//   }

// //---------------------------------------------------
// // Задача 12.

// class Kata {
//     static getVolumeOfCuboid(l, w, h) {
//       return l * w * h;
//     }
//   };

// //---------------------------------------------------
// // Задача 13.

// function nthEven(n) {
//     return 2 * (n - 1);
//   }


// //---------------------------------------------------
// // Задача 14.
// function pointsPer48(ppg, mpg) {
//     return +(ppg/mpg*48).toFixed(1)||0
//   }


// //---------------------------------------------------
// // Задача 15.

// function toBinary(n){
//     return +n.toString(2);
//   }






