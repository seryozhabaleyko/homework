'use strict';

class Form {

    constructor(data, url, method) {
        this.data = data;

        this.form = document.createElement('form');
        this.form.action = url;
        this.form.method = method;
    }

    generateForm() {
        this.data.forEach(({ label, kind, name, variants }) => {
            this.form.appendChild(
                this.generateElement(label, kind, name, variants)
            );
        });
    }

    generateElement(label, kind, name, variants) {
        const field = document.createElement('div');
        field.classList.add('input-field');

        switch (kind) {
            case 'longtext':
                field.appendChild(this.createInput(kind, label, name));
                break;
            case 'shorttext':
                field.appendChild(this.createInput(kind, label, name));
                break;
            case 'number':
                field.appendChild(this.createInput(kind, label, name));
                break;
            case 'combo':
                field.appendChild(this.createSelect(label, name, variants));
                break;
            case 'radio':
                field.appendChild(this.createRadio(label, name, variants));
                break;
            case 'check':
                field.appendChild(this.createCheckBox(label, name));
                break;
            case 'memo':
                field.appendChild(this.createTextarea(label, name));
                break;
            case 'submit':
                field.appendChild(this.createSubmitButton(label));
                break;
            default:
                console.warn('Результат выглядит странновато. Честно.');
        }

        return field;
    }

    createInput(type, text, name) {
        const label = document.createElement('label');
        label.innerHTML = text;

        const input = document.createElement('input');

        if (type === 'number') {
            input.type = 'number';
        } else {
            input.type = 'text';
        }

        input.name = name;

        label.appendChild(input);

        return label;
    }

    createSelect(text, name, variants) {
        const label = document.createElement('label');
        label.textContent = text;

        const select = document.createElement('select');
        select.name = name;

        variants.forEach(element => {
            const option = document.createElement('option');
            option.value = element.value;
            option.textContent = element.text;

            select.appendChild(option);
        });

        label.appendChild(select);

        return label;
    }

    createRadio(text, name, variants) {
        const field = document.createElement('div');
        field.classList.add('horizontal');
        field.textContent = text;

        variants.forEach(element => {
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = name;
            radio.value = element.value;

            const label = document.createElement('label');
            label.innerHTML = element.text;
            label.appendChild(radio);

            field.appendChild(label);
        });

        return field;
    }

    createCheckBox(text, name) {
        const label = document.createElement('label');
        label.textContent = text;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = name;

        label.appendChild(checkbox);

        return label;
    }

    createTextarea(text, name) {
        const label = document.createElement('label');
        label.classList.add('textarea');
        label.textContent = text;

        const textarea = document.createElement('textarea');
        textarea.name = name;

        label.appendChild(textarea);

        return label;
    }

    createSubmitButton(text) {
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = text;

        return submitButton;
    }

    render() {
        this.generateForm();
        document.getElementById('root').appendChild(this.form);
    }
}

export default Form;