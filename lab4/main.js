// Написати цикли, які зможуть:
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
// Вивести квадрати чисел від 10 до 20.
// Вивести таблицю множення на 7.
// Знайти добуток усіх цілих чисел від 15 до 35.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.

// Кожне завдання зі списку повинен виконувати окремий цикл, значення виводити в консоль.
// Кожне завдання виводити в консоль застосовувючи console.group('Текст завдання')

console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20.');

let res = '';
for (num = 10; num < 21; num++) {
  if (num === 20) {
    res += num;
  } else {
    res += `${num}, `;
  }
}
console.log(`${res}`);

console.groupEnd();

console.group('Вивести квадрати чисел від 10 до 20.');
let res1 = '';
for (num1 = 10; num1 < 21; num1++) {
  if (num1 === 20) {
    res1 += num1 * num1;
  } else {
    res1 += `${num1 * num1}, `;
  }
}
console.log(`${res1}`);
console.groupEnd();

console.group('Вивести');
for (let num2 = 1; num2 < 11; num2++) {
  console.log(`${num2} * 4 = ${num2 * 4}`);
}
console.groupEnd();

console.group('Вивести');
let res3 = 1;
for (let num3 = 15; num3 < 36; num3++) {
  res3 = res3 * num3;
}
console.log(`${res3}`);
console.groupEnd();

console.group('Вивести');
let res4 = 0;
for (let i = 1; i <= 500; i++) {
  res4 += i;
}
console.log(`${res4 / 500}`);
console.groupEnd();

console.group('Вивести');
let sum = 0;
for (let j = 30; j < 80; j++) {
  if (!(j % 2 === 0)) {
    sum = sum + j;
  }
}
console.log(`${sum}`);
console.groupEnd();