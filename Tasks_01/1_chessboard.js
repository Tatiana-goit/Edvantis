// Шахматная доска
// Написать функцию, которая принимает 2 аргумента (количество символов в ряду и количество рядов) и возвращает шахматный паттерн
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_

// -------------------------------------- VERSION 1: Q = n = 8 -?

function chessBoard(numberOfChars,numberOfRows) {
  return Array.from(Array(numberOfRows).keys()).reduce((acc, i) => {
    let result = '';
    i % 2 === 0 ? result += '_#'.repeat(numberOfChars/2) : result += '#_'.repeat(numberOfChars/2);
    return acc + result + '\n';
  }, '')
}

console.log(chessBoard(8,8));

// -------------------------------------- VERSION 2: Q = n^2 = 8*8=64

// function chessBoard(numberOfChars,numberOfRows) {
//   for (let i = 0; i < numberOfChars; i++) {
//     let line= "";
//     for (let j = 0; j < numberOfRows; j++) {
//       if ((i + j) % 2 === 0) {
//         line += "_";
//       } else {
//         line += "#";
//       }
//     }
//     console.log(line);  
//   }
// }

// chessBoard(8,8);



// -------------------------------------- VERSION 3: Q = n^2 = 8*8=64

// function chessBoard(numberOfChars,numberOfRows) {
//   const BLACK = "#";
//   const WHITE = "_";
//   let result = "";
  
//   for (let i = 0; i < numberOfChars; i++) {
//     let line = "";
//     for (let j = 0; j < numberOfRows; j++) {
//       line += (i + j) % 2 === 0 ? WHITE : BLACK;
//     }
//     result += line + "\n"
//   }
//   console.log(result)
// }

// chessBoard(8,8);


