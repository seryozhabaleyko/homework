const promptString = (message, value) => {
    let result;
    do {
        result = prompt(message, value);
        if (!result) {
            alert('Вы ничего не ввели!');
        }
    } while (!result)

    return result;
}

const name = promptString('Введите имя:', 'Сергей'); // получает имя
const surname = promptString('Введите фамилию:', 'Гагарин'); // получает фамилию
const patronymic = promptString('Введите отчество:', 'Юрьевич'); // получает отчиство

// Инкапсулируйте условия
const isNumber = (val) => {
    return String(parseInt(val, 10)) === val; // Number.isNaN(Number(val)) || !val;
}

const promptNumber = (message, value) => {
    let result;
    do {
        result = prompt(message, value);
        if (!isNumber(result)) {
            alert(`Вы ввели "${result}", а нужно число.`);
        }
    } while (!isNumber(result));

    return Number(result);
}

const year = promptNumber('Введите год рождения:', '1997'); // получает год рождения
const month = promptNumber('Введите месяц рождения:', '2'); // получает месяц рождения
const gender = confirm('Ваш пол - мужской?'); // получает пол
const children = promptNumber('Укажите количество детей', 0); // получает количество детей
const currentMonth = 1; // текущий месяц
const currentYear = 2020; // текуший год
let age = null; // возраст
let lived = null; // количество прожитых месяцев

/*
    * Если текущий месяц >= месяца рождения, то (let age = текущий год - год рождения) лет и (let lived = текущий месяц - месяц рождения) месяцев
    * Иначе (let возраст = текущий год - 1 - год рождения) лет и (количество месяцев в году(12) - месяц рождения + текущий месяц ) 
*/
if (currentMonth >= month) { // было уже др
    age = currentYear - year;
    lived = currentMonth - month;
} else { // не было еще др)))
    age = currentYear - 1 - year;
    lived = 12 - month + currentMonth;
}

const checkGender = gender ? 'мужской' : 'женский'; // проверяет пол (true/false)
const checkChildren = children !== '0' ? children : 'нет'; // проверяет – есть ли дети
const adulthood = age >= 18 ? 'совершеннолетние' : 'несовершеннолетние'; // проверка на совершеннолетние

alert(`
    Ваш пол: ${checkGender}
    Ваше ФИО: ${surname} ${name} ${patronymic}
    Вам ${age} лет и ${lived} месяцев
    Вы ${adulthood}
    У вас ${checkChildren} детей
`);
