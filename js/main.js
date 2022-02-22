// Функция возвращает рандомное число.
function randomInteger (min, max) {

  if (min === max || min < 0 || max < 0) {
    throw('Неверно введены данные');
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


randomInteger();


function checkLength(str, maxLength) {
  return str.length > maxLength;

}

checkLength();


