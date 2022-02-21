// Функция возвращает рандомное число.
function randomInteger (min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    if (min == max && max == min || min < 0 || max < 0) {
        console.log('Поменяйте значение');
    } else {
        return Math.floor(rand);
    }
};

console.log(randomInteger(-1, 100));


/*
function hello (str, maxValue) {
    if (str.length >= maxValue) {
        return console.log('Вы не можете написать комментарий');
    }
        return console.log('Вы можете написать комментарий');
}
*/

function getLength () {
    if (str.length >= maxValue) {
        return alert('Вы не можете написать комментарий');
    }  
        return alert('Вы можете написать комментарий');
};


function getInfoAlert() {
     str = prompt("Введите текст " , "");
     maxValue = prompt("Введите максимальную длину " , "");
    if (str == undefined || str == "") {
        alert("Строка не введена");
    } else {
         getLength();
    }
};
getInfoAlert(getLength);


