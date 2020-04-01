'use strict';

import HashStorage from './HashStorage.Class.js';

const drinkStorage = new HashStorage();

; (function () {
    function enterDrinkInformationHandler() {
        const key = prompt('Введите название напитка', '');

        const value = (() => {
            const alcohol = confirm('Напиток алкогольный?');
            const recept = prompt('Напишите рецепт', '');

            return {
                alcohol,
                recept
            };
        })();

        drinkStorage.addValue(key, value);
    }

    function gettingDrinkInformationHandler(infoWindow) {
        const key = prompt('Введите название напитка', '');
        const value = drinkStorage.getValue(key);

        const message = `
        Напиток: ${key};
        Алкогольный: ${value.alcohol ? 'Да' : 'Нет'};
        Рецепт приготовления: ${value.recept}.
    `;

        infoWindow.textContent = message;
    }

    function deleteDrinkInformationHandler(infoWindow) {
        const key = prompt('Введите название напитка', '');
        infoWindow.textContent = drinkStorage.deleteValue(key);
    }

    function listOfAllDrinksHandler(infoWindow) {
        infoWindow.textContent = drinkStorage.getKeys().join(', ');
    }

    const infoWindow = document.createElement('div');
    infoWindow.classList.add('infoWindow');

    const enterDrinkInformation = document.createElement('button');
    enterDrinkInformation.textContent = 'ввод информации о напитке';
    enterDrinkInformation.addEventListener('click', enterDrinkInformationHandler, false);

    const gettingDrinkInformation = document.createElement('button');
    gettingDrinkInformation.textContent = 'получение информации о напитке';
    gettingDrinkInformation
        .addEventListener('click', gettingDrinkInformationHandler.bind(gettingDrinkInformation, infoWindow), false);

    const deleteDrinkInformation = document.createElement('button');
    deleteDrinkInformation.textContent = 'удаление информации о напитке';
    deleteDrinkInformation
        .addEventListener('click', deleteDrinkInformationHandler.bind(deleteDrinkInformation, infoWindow), false);

    const listOfAllDrinks = document.createElement('button');
    listOfAllDrinks.textContent = 'перечень всех напитков';
    listOfAllDrinks.addEventListener('click', listOfAllDrinksHandler.bind(listOfAllDrinks, infoWindow), false);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('buttonWrapper');
    buttonWrapper
        .append(enterDrinkInformation, gettingDrinkInformation, deleteDrinkInformation, listOfAllDrinks);

    document
        .getElementById('root')
        .append(infoWindow, buttonWrapper);
})();
