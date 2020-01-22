document.addEventListener('DOMContentLoaded', () => {

    // Ф.И.О
    // Вам 22 года и 8 месяцев
    // Вы совершеннолетний или нет
    // У вас 3/нет детей

    const date = '21';
    const month = '1';
    const year = '2020';
    const name = prompt('Введите имя:', 'Сергей'); // получает имя
    const surname = prompt('Введите фамилию:', 'Гагарин'); // получает фамилию
    const patronymic = prompt('Введите отчество:', 'Юрьевич'); // получает отчиство
    const myDate = null;
    const myYear = prompt('Введите год рождения:', '1997'); // получает год рождения
    const myMonth = prompt('Введите месяц рождения:', '2'); // получает месяц рождения
    const gender = confirm('Ваш пол - мужской?'); // получает пол
    const children = prompt('Укажите количество детей', 0); // получает количество детей

    let age = null; // возраст
    let lived = null; // количество прожитых месяцев

    const checkGender = gender ? 'мужской' : 'женский'; // проверяет пол (true/false)
    const checkChildren = children !== '0' && children !== null && children !== '' ? children : 'нет'; // проверяет – есть ли дети

    /*
     * Если текущий месяц >= месяца рождения, то (let age = текущий год - год рождения) лет и (let lived = текущий месяц - месяц рождения) месяцев
     * Иначе (let возраст = текущий год - 1 - год рождения) лет и (количество месяцев в году(12) - месяц рождения + текущий месяц ) 
    */
    if (month >= myMonth) { // было уже др
        age = year - myYear;
        lived = month - myMonth;
    } else { // не было еще др)))
        age = year - 1 - myYear;
        lived = 12 - myMonth + Number(month);
    }

    const adulthood = age >= 18 ? 'совершеннолетние' : 'несовершеннолетние'; // проверка на совершеннолетние

    console.log(`Ваш пол: ${checkGender}`);
    console.log(`Ваше ФИО: ${surname} ${name} ${patronymic}`);
    console.log(`Вам ${age} лет и ${lived} месяцев`);
    console.log(`Вы ${adulthood}`)
    console.log(`У вас ${checkChildren} детей`);

    alert(`
        Ваш пол: ${checkGender}
        Ваше ФИО: ${surname} ${name} ${patronymic}
        Вам ${age} лет и ${lived} месяцев
        Вы ${adulthood}
        У вас ${checkChildren} детей`
    );
});
