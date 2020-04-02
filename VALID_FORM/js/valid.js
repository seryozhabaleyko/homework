'use strict';

const valid = (function () {
    const messages = {
        "text": 'Требуется ввести',
        "url": ['Требуется ввести URL сайта', 'Неправильно введённый URL сайта'],
        "date": 'Требуется ввести дату запуска',
        "number": 'Требуется ввести кол-во посетителей',
        "email": 'Требуется ввести email',
        "catalog": ['Необходимо выбрать один вариант', 'Выберите что угодно, кроме здоровья'],
        "radio": 'Требуется выбрать размещение',
        "reviews": 'Требуется разрешить отзывы',
        "description": 'Требуется что-нибудь ввести'
    };

    const error = (message) => {
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = message;

        return error;
    };

    const text = (elem) => {
        const regexp = /^[A-Za-z]+$/;
        if (elem.value.match(regexp)) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.text));

            return false;
        }
    };

    const url = (elem) => {
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regexp = new RegExp(expression);

        if (elem.value.match(regexp)) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.url[0]));

            return false;
        }
    };

    const date = (elem) => {
        if (elem.value) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.date));

            return false;
        }
    };

    const number = (elem) => {
        if (elem.value) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.number));

            return false;
        }
    };

    const email = (elem) => {
        const regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (elem.value.match(regexp)) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.email));

            return false;
        }
    };

    const select = (elem) => {
        // https://github.com/airbnb/javascript -> 15.3
        if (elem.value === '') {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.catalog[0]));

            return false;
        } else {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        }
    };

    const radio = (one, two, three) => {
        let checked = 0;
        const horizontal = one.closest('.horizontal');

        if (one.checked) {
            checked++;
        }
        if (two.checked) {
            checked++;
        }
        if (three.checked) {
            checked++;
        }

        // https://github.com/airbnb/javascript -> 15.3
        if (checked === 0) {
            one.focus();

            if (horizontal.nextSibling) {
                horizontal.nextSibling.remove();
            }

            horizontal.insertAdjacentElement('afterend', error(messages.radio));

            return false;
        } else {
            if (horizontal.nextSibling) {
                horizontal.nextSibling.remove();
            }

            return true;
        }
    };

    const checkbox = (elem) => {
        if (elem.checked) {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        } else {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.reviews));

            return false;
        }
    };

    const textarea = (elem, min, max) => {
        const length = elem.value.length;

        if (length === 0 || length > max || length < min) {
            elem.focus();

            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            elem.insertAdjacentElement('afterend', error(messages.description));

            return false;
        } else {
            if (elem.nextSibling) {
                elem.nextSibling.remove();
            }

            return true;
        }
    };

    return {
        date,
        url,
        radio,
        select,
        email,
        text,
        checkbox,
        textarea,
        number
    };
})();

export default valid;