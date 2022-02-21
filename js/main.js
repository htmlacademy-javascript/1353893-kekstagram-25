// Функция возвращает рандомное число.
function randomInteger (min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (min === max || min < 0 || max < 0) {
    return false;
  }
  return Math.floor(rand);
}

randomInteger();


function checkLength(str, maxValue) {
  if (str.length > maxValue) {
    return true;
  }
  return false;
}

checkLength();


