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
    const {type, value} = this;

    const isValue = type === 'email' ? isEmail(value) : type === 'url' ? isUrl(value) : value;

    if (isValue) {
        addClassErrorAndValid.apply(this, ['valid', 'error']);
        removeMessageError.call(this);
    } else {
        addClassErrorAndValid.apply(this, ['error', 'valid']);
        
        switch (type) {
            case 'email':
                messageError.call(this, 'бро, неправильный email!');
                break;
            case 'url':
                messageError.call(this, 'бро, неправильный url!');
                break;
            default:
                messageError.call(this, 'бро, ты ничего не ввел!');
                break;
        }
    }
 
}

function addClassErrorAndValid(add, remove) {
    this.classList.add(add);
    if (this.classList.contains(remove)) this.classList.remove(remove);
}

function isEmail(value) {
    const regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return value.match(regexp);
}

function isUrl(value) {
    const regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return value.match(regexp);
}

function messageError(message) {    
    const $parent = this.parentElement;
    
    if (!$parent.querySelector('.wrong')) {
        const error = createError(`${message}`);
        $parent.appendChild(error);
    }
}

function removeMessageError() {
    const $wrong = this.parentElement.querySelector('.wrong');
    if ($wrong) $wrong.remove();
}

function createError(message) {
    const $error = document.createElement('span');
    $error.className = 'wrong';
    $error.style.color = '#F44336';
    $error.innerHTML = message;
    return $error;
}

const $fields = document.querySelectorAll('.field');

form1.addEventListener('submit', checkAllInputValues);

function checkAllInputValues(e) {
    const fields = [...$fields].filter(field => !field.value);
    fields.forEach(field => {
        const { type } = field;

        const parentField = field.parentElement;
        if (!parentField.querySelector('.wrong')) {
            const error = type === 'email' ? createError('бро, неправильный email!') : type === 'url' ? createError('бро, неправильный url!') : createError('бро, ты ничего не ввел!');
            parentField.appendChild(error);
        }
    });

    if (fields[0]) {
        e.preventDefault();
        fields[0].focus();
    }
}