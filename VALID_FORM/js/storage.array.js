export const formDef1 = [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
        label: 'Рубрика каталога:', kind: 'combo', name: 'division',
        variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
    },
    {
        label: 'Размещение:', kind: 'radio', name: 'payment',
        variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { label: 'Опубликовать:', kind: 'submit' },
];

export const formDef2 = [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { label: 'Зарегистрироваться:', kind: 'submit' },
];

export const formDef3 = [
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