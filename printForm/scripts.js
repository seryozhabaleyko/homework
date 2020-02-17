const fromArray1 = [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
        label: 'Рубрика каталога:', kind: 'combo', name: 'division',
        variants: [
            { text: 'здоровье', value: 1 },
            { text: 'домашний уют', value: 2 },
            { text: 'бытовая техника', value: 3 }
        ]
    },
    {
        label: 'Размещение:', kind: 'radio', name: 'payment',
        variants: [
            { text: 'бесплатное', value: 1 },
            { text: 'платное', value: 2 },
            { text: 'VIP', value: 3 }
        ]
    },
    { label: 'Разрешить отзывы:', kind: 'checkbox', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { label: 'Опубликовать:', kind: 'submit' },
];

const fromArray2 = [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { label: 'Зарегистрироваться:', kind: 'submit' },
];

const form1 = document.forms.publish;
const form2 = document.forms.register;

printForm(form1, fromArray1);
printForm(form2, fromArray2);

function printForm(form, array) {
    array.forEach(item => {
        let label = document.createElement('label');
        let labelText = document.createTextNode(item.label);
        label.appendChild(labelText);

        let input = document.createElement('input');
        input.type = item.kind;
        input.name = item.name;

        const group = document.createElement('div');
        group.className = 'form-group';

        if (item.kind === 'radio') {
            group.classList.add('form-radio');
            group.appendChild(label);
            
            item.variants.forEach(val => {    
                input = document.createElement('input');
                input.type = item.kind;
                input.name = item.name;
                input.value = val.value;

                label = document.createElement('label');
                labelText = document.createTextNode(val.text);

                group.appendChild(label).append(input, labelText);
            });
        } else if (item.kind === 'combo') {
            const select = document.createElement('select');
            select.className = 'form-control';
            select.name = item.name;

            item.variants.forEach(item => {
                const option = document.createElement('option');
                option.value = item.value;
                select.appendChild(option).appendChild(document.createTextNode(item.text));
            });

            group.append(label, select);
        } else if (item.kind === 'memo') {
            const textarea = document.createElement('textarea');
            textarea.name = item.name;
            
            group.classList.add('form-textarea');
            group.append(label, textarea);
        } else if (item.kind === 'submit') {
            input.value = item.label;
            group.appendChild(input);
        } else {
            group.append(label, input);
        }

        form.appendChild(group);
    });
}