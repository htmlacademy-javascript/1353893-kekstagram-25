// функция рандомное число.
export function randomInteger (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Функция счетчика
export function makeCount() {
  let sumCount = 0;
  return  () => {
    sumCount += 1;
    return sumCount;
  };
}


