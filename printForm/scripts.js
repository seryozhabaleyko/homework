"use strict";

const fromArray = [
    { label: 'Разработчики:', type: 'text', name: 'dev' },
    { label: 'Название сайта:', type: 'text', name: 'sitename' },
    { label: 'URL сайта:', type: 'url', name: 'siteurl' },
    { label: 'Дата запуска сайта:', type: 'date', name: 'bday' },
    { label: 'Посетителей в сутки:', type: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', type: 'email', name: 'email' },
    {
        label: 'Рубрика каталога:', type: 'select', name: 'division',
        variants: [
            { text: 'выбрать', value: '' },
            { text: 'здоровье', value: 1 },
            { text: 'домашний уют', value: 2 },
            { text: 'бытовая техника', value: 3 }
        ]
    },
    {
        label: 'Размещение:', type: 'radio', name: 'payment',
        variants: [
            { text: 'бесплатное', value: 1 },
            { text: 'платное', value: 2 },
            { text: 'VIP', value: 3 }
        ]
    },
    { label: 'Разрешить отзывы:', type: 'checkbox', name: 'votes' },
    { label: 'Описание сайта:', type: 'textarea', name: 'description' },
    { label: 'Опубликовать', type: 'submit' },
];

const form1 = document.forms.publish;

printForm(form1, fromArray);

function createLabel(text) {
    const $label = document.createElement('label');
    const $labelText = document.createTextNode(text);
    $label.appendChild($labelText);
    return $label;
}

function createInput(type, name, value) {
    const $input = document.createElement('input');
    $input.type = type;
    $input.name = name;
    if (value) $input.value = value;
    return $input;
}

function createTag(tag, className) {
    const $el = document.createElement(tag);
    $el.className = className;
    return $el;
}

function printForm(form, array) {
    array.forEach(item => {
        let $group = createTag('div', 'form-group');
        let label = createLabel(item.label);
        let input = createInput(item.type, item.name);

        switch (item.type) {
            case 'radio':
                $group.classList.add('form-radio');
                $group.appendChild(label);
                item.variants.forEach(val => {
                    const $inputRadio = createTag('div', 'input-radio');
                    input = createInput(item.type, item.name, val.value);
                    label = createLabel(val.text);
                    $group.appendChild($inputRadio).append(input, label);
                });
                break;
            case 'select':
                const $select = createTag('select', 'form-control');
                $select.name = item.name;
                item.variants.forEach(val => {
                    const $option = document.createElement('option');
                    $option.value = val.value;
                    $select.appendChild($option).appendChild(document.createTextNode(val.text))
                });
                $group.append(label, $select);
                break;
            case 'textarea':
                const $textarea = document.createElement('textarea');
                $textarea.name = item.name;
                $group.classList.add('form-textarea');
                $group.append(label, $textarea);
                break;
            case 'submit':
                input.value = item.label;
                $group.appendChild(input);
                break;
            default:
                $group.append(label, input);
                break;
        }
        
        form.appendChild($group);
    });
}