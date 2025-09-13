type Year = number;
interface MyDate {
	day: number;
	month: number;
	year: number;
}

const defaultDate: MyDate = {
	day: 11,
	month: 9,
	year: 2025,
};
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде
//             рік через N місяців.
//
/**
 *
 * @param monthsToAdd // приймає кількість місяців на скільки потрібно перенестись далі
 * @param date MyDate // за замовчення приймає об'єкт date, але можливо передавати свій обєкт типу interface MyDate
 */
function getYearAfterMonths(
	monthsToAdd: number,
	date: MyDate = defaultDate,
): number {
	const totalMonths = date.month + monthsToAdd;
	const yearsToAdd = Math.floor((totalMonths - 1) / 12);
	return date.year + yearsToAdd;
}
console.log(getYearAfterMonths(27));
console.log(getYearAfterMonths(47));
console.log(getYearAfterMonths(17));
