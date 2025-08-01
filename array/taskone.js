// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому создайте неглубокую (shallow) копию массива Жени и удалите возраст собак из этого скопированного массива (потому что это плохая практика изменять параметры функции).
// 2. Создайте массив с данными Жени (исправленными) и Юли.
// 3. Для каждой оставшейся кошки выведите в консоль,  если она взрослая: ("Кошка № 1 взрослая, ей 6 лет "), если котёнок (" Кошка № 2 ещё котёнок ")
// 4. Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// const verifyCats = function (catsJane, catsJulia) {
//   const shallow = catsJane.slice(1, -1);
//   const copyCatsJaneAndJulia = [...shallow, ...catsJulia];
//   copyCatsJaneAndJulia.forEach(function (cat, ind) {
//     const isAdula = cat > 2 ? `взрослая, ей ${cat} лет` : 'ещё котёнок';
//     console.log(`Кошка № ${ind + 1} ${isAdula}`);
//   });
//   console.log(shallow);
// };

// verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);
