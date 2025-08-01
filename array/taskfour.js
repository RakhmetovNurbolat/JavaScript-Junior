// Женя с Юлей все еще изучают кошек, и на этот раз они изучают, едят ли кошки слишком много или слишком мало.
// Слишком много еды означает, что текущая порция пищи кошки больше рекомендуемой, а слишком мало еды - наоборот.
// Нормальное количество еды означает, что текущая порция корма для кошки находится в диапазоне от 10% выше и 10% ниже рекомендуемой порции.
// ( рекомендуемая * 0.9 < нормальная < рекомендуемая * 1.1 )

// 1. Переберите элементы массива cats, которые являются объектами, и для каждой кошки вычислите рекомендуемую порцию еды и добавьте ее к объекту, как новое свойство. Не создавайте новый массив, просто переберите массив!
// Формула вычисления рекомендуемой порции:
// рекомендуемая порция = вес кошки * 0.75 * 12 (результат в граммах, а вес кошки в килограммах).
// 2. Найдите кошку, имя хозяина которой Алекс и выведите в консоль, ест ли эта кошка слишком много или слишком мало. Подсказка: у некоторых кошек есть несколько владельцев, поэтому вам сначала нужно найти Алекса в массиве владельцев.
// 3. Создайте массив, содержащий всех владельцев кошек, которые слишком много едят (catsEatTooMuchOwners), и массив со всеми владельцами кошек, которые слишком мало едят (catsEatTooLittleOwners).
// 4. Выведите в консоль строку для каждого из массивов, созданных в пункте 3:
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс  - хозяева кошек, которые едят слишком мало!"
// 5. Выведите в консоль, ест ли хоть одна кошка в точном соответствии с рекомендуемым количеством еды (просто true или false).
// 6. Выведите в консоль, ест ли хоть одна кошка нормальное количество еды (просто true или false).
// 7. Создайте массив, содержащий кошек, которые едят нормальное количество еды (попробуйте повторно использовать условие, используемое в пункте 6).
// 8. Создайте мелкую (shallow) копию массива cats и отсортируйте по свойству рекомендуемая порция еды по возрастанию (имейте в виду, что порции находятся внутри объектов массива).

const cats = [
  { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 53, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

// My decision

const eatCat = (cat) => cat.recommendFood * 0.9 < cat.foodWeight && cat.recommendFood * 1.1 > cat.foodWeight;

//Ex. 1 +
cats.forEach((cat) => {
  cat.recommendFood = cat.catWeight * 0.75 * 12;
});
console.log(cats);

//Ex. 2 +
const catAlex = cats.find((cat) => cat.owners.includes('Алекс'));
console.log(catAlex, eatCat(catAlex));

//Ex. 3 and 4
const catsEatTooMuchOwners = cats.filter((cat) => cat.recommendFood < cat.foodWeight).flatMap((cat) => cat.owners);
const catsEatTooLittleOwners = cats.filter((cat) => cat.recommendFood > cat.foodWeight).flatMap((cat) => cat.owners);
console.log(`${catsEatTooMuchOwners.join(', ')} - хозяева кошек, которые едят слишком много!`);
console.log(`${catsEatTooLittleOwners}  - хозяева кошек, которые едят слишком мало!`);

//Ex. 5
console.log(cats.some((cat) => cat.recommendFood === cat.foodWeight));

//Ex. 6
console.log(cats.some((cat) => eatCat(cat)));

//Ex. 7

const catsEatRecommendFood = cats.filter((cat) => eatCat(cat));
console.log(catsEatRecommendFood);

//Ex. 8
const catsRecommendSorted = cats.slice().sort((x, y) => x.recommendFood - y.recommendFood);
console.log(catsRecommendSorted);
