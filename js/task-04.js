// const string = 'Curabitur ligula sapien.';
// console.log(string);

// const splittedString = string.split('');
// console.log(splittedString);

// const joinedString = splittedString.join('');
// console.log(joinedString);

// let clicedString = splittedString.slice(0, 40).join('') + '...';
// console.log(clicedString);

// const finishedString = clicedString.join('') + '...';
// console.log(finishedString);
// if (splittedString.length > 40) {
//   console.log(clicedString);
// } else console.log(string);

// splittedString.length > 40 ? console.log(clicedString) : console.log(string);
/*
 * Почему тут возвращается undefined после строки???
 */
// const formatString = function (string) {
//   string.length > 40
//     ? console.log(string.slice(0, 40) + '...')
//     : console.log(string);
// };

const formatString = function (string) {
  if (string.length > 40) {
    return string.slice(0, 40) + '...';
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
