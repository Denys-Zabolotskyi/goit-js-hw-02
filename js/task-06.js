let input;
const numbers = [];
let total = 0;
console.log(numbers);
while (true) {
  input = prompt('Введите число');
  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз!.');
    continue;
  } else {
    numbers.push(Number(input));
  }
}

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   const notANamber = Number.isNaN(input);

//   if (notANamber) {
//     alert('Было введено не число, попробуйте еще раз!');
//     continue;
//   }
//   total += input;
// }
// console.log(`Общая сумма чисел равна ${total}`);
// alert(`Общая сумма чисел равна ${total}`);
