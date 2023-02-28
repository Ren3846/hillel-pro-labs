// Цифры числа справа налево
// Дано натуральное число N. Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами
// Разрешена только рекурсия и арифметика.
// f(179) -> 9 7 1

function f(n) {
	if(n / 10 > 1) {
		return n % 10 + " " + f(Math.floor(n / 10));
	} else {
		return n + " ";
	}
}
console.log(f(179345));


