// Вход: (nums = [10, 15, 3, 7]), (k = 17);

// Выход: True;

// 1. Проходите по каждому элементу массива.
// 2. Для каждого элемента `num` вычислите разницу `diff = k - num`.
// 3. Проверьте, содержится ли `diff` в множестве уже просмотренных элементов.
// 4. Если содержится, возвращаем `true`.
// 5. Если не содержится, добавьте текущий элемент `num` в множество.
// 6. Если цикл завершился и пара не найдена, возвращаем `false`.

const haveEls = (nums, k) => {
  const diffs = new Set();

  for (let i = 0; i < nums.length; i++) {
    const diff = k - nums[i];
    if (diffs.has(diff)) {
      return true;
    }

    diffs.add(nums[i]);
  }

  return false;
};

console.log(haveEls([10, 15, 3, 7], 17));
