// Написать функцию для изображения елка в разных вариантах
// *
// **

// *
// **
// ***

//   *
//  **
// ***

//   *  
//  * *
// * * *


function tree(n) {
  console.log(Array.from(Array(n).keys()).reduce((acc, i) => {
    return acc + '*'.repeat(1+i) + '\n'
  }, ''));
}

function invertedTree(n) {
  console.log(Array.from(Array(n).keys()).reduce((acc, i) => {
    return (acc + ' '.repeat(n-i-1) + '*'.repeat(1+i) + '\n')
  }, ''))
}

function straightTree(n) {
  console.log(Array.from(Array(n).keys()).reduce((acc, i) => {
    return (acc + ' '.repeat((n-i-1)) + '* '.repeat(1+i) + ' '.repeat((n-i-1))+ '\n')
  }, ''))
}


// function tree(n) {
//   if (n === 0) {
//     return 1;
//   }
//   // console.log(n-n+1);
//   console.log('*'.repeat(8-n));
//   return tree(n-1);
// }


// function tree(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     result += '*'.repeat(i) + '\n';
//   }
//   console.log(result);;
// }

// function invertedTree(n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     result += ('*'.repeat(1+i) + ' '.repeat(n-i-1) + '\n').split('').reverse().join('');
//     result.split('').reverse().join('')
//   }
//  console.log(result);
// }

tree(2);
tree(3);
tree(8);

invertedTree(2);
invertedTree(3);
invertedTree(8);

straightTree(2)
straightTree(3)
straightTree(8)
