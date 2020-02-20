"use strict";

const $inputText = document.querySelectorAll('input[type="text"]');
const $inputNumber = document.querySelectorAll('input[type="number"]');
const $inputEmail = document.querySelector('input[type="email"]');
const $inputUrl = document.querySelector('input[type="url"]');
const $select = document.querySelector('select');
const $textarea = document.querySelector('textarea');
const $date = document.querySelector('input[type="date"]');

[...$inputText, ...$inputNumber, $select, $textarea, $inputEmail, $inputUrl].forEach(item => {
    item.classList.add('field');
});

[...$inputText, ...$inputNumber, $inputUrl, $inputEmail, $textarea].forEach(item => {
    item.addEventListener('input', validate);
    item.addEventListener('blur', validate);
});

$select.addEventListener('blur', validate);
$select.addEventListener('change', validate);

function validate() {
    if (isValue(this)) {
        addClassErrorAndValid.apply(this, ['valid', 'error']);
        removeCurrentError.call(this);
    } else {
        addClassErrorAndValid.apply(this, ['error', 'valid']);
        checkCurrentValue.call(this);
    }
}

function checkCurrentValue() {  
    const $parent = this.parentElement;
    const $isWrong = $parent.querySelector('.wrong');
    if (!$isWrong) {
        const error = generateError('error');
        $parent.appendChild(error);
    }
}

function removeCurrentError() {
    const $wrong = this.parentElement.querySelector('.wrong')
    if ($wrong) $wrong.remove();
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

const $fields = document.querySelectorAll('.field');

form1.addEventListener('submit', checkAllInputValues);

function checkAllInputValues(e) {
    removeError();
    const fields = [...$fields].filter(field => !field.value);
    fields.forEach(field => {
        const error = generateError('error');
        field.parentElement.appendChild(error);
    });
    if (fields[0]) {
        e.preventDefault();
        fields[0].focus();
    }
}

function removeError() {
    const $allWrong = form1.querySelectorAll('.wrong');
    $allWrong.forEach(item => {
        item.remove();
    });
}

function generateError(message) {
    const $error = document.createElement('span');
    $error.className = 'wrong';
    $error.style.color = '#F44336';
    $error.innerHTML = message;
    return $error;
}