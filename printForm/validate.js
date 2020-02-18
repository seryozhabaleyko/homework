"use strict";

const inputText = document.querySelectorAll('input[type="text"]');
const inputNumber = document.querySelectorAll('input[type="number"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputUrl = document.querySelector('input[type="url"]');
const select = document.querySelector('select');
const textarea = document.querySelector('textarea');

[...inputText, ...inputNumber, select, textarea, inputEmail, inputUrl].forEach(item => {
    item.setAttribute('required', '');
});

[...inputText, ...inputNumber, inputUrl, inputEmail, textarea].forEach(item => {
    item.addEventListener('input', validate);
    item.addEventListener('blur', validate);
});

select.addEventListener('blur', validate);
select.addEventListener('change', validate);

function validate() {
    if (isValue(this)) {
        addClassErrorAndValid.apply(this, ['valid', 'error']);
        valid('valid');
    } else {
        addClassErrorAndValid.apply(this, ['error', 'valid']);
        error('error');
    }
}

function addClassErrorAndValid(add, remove) {
    this.classList.add(add);
    if (this.classList.contains(remove)) this.classList.remove(remove);
}

function isValue(val) {
    switch (val.type) {
        case 'email':
            return isEmail(val.value);
            break;
        case 'url':
            return isUrl(val.value);
            break;
        default:
            return val.value;
    }
}

function isEmail(val) {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.match(regexp);
}

function isUrl(val) {
    const regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return val.match(regexp);
}

function error(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-error';
    alert.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(alert);
}

function valid(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-valid';
    alert.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(alert);
}