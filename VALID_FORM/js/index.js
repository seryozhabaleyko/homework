'use strict';

import Form from './Form.js';
import { formDef3 } from './storage.array.js';
import valid from './valid.js';

const url = 'http://fe.it-academy.by/TestForm.php';

const form = new Form(formDef3, url, 'POST');
form.render();

const formValidationInfoHandler = (e) => {
    const form = document.forms.INFO;

    valid.text(form.dev);
    valid.text(form.sitename);
    valid.url(form.siteurl);
    valid.date(form.bday);
    valid.number(form.visitors);
    valid.email(form.email);
    valid.select(form.division);
    valid.radio(form.payment[0], form.payment[1], form.payment[2]);
    valid.checkbox(form.votes);
    valid.textarea(form.description, 3, 10);

    // https://github.com/airbnb/javascript -> 17.1
    if (valid.text(form.dev) && valid.text(form.sitename) && valid.url(form.siteurl)
        && valid.date(form.bday) && valid.number(form.visitors)
        && valid.email(form.email) && valid.select(form.division)
        && valid.radio(form.payment[0], form.payment[1], form.payment[2])
        && valid.checkbox(form.votes) && valid.textarea(form.description, 3, 10)
    ) {
        return;
    }

    e.preventDefault();
};

document.forms.INFO
    .addEventListener('submit', formValidationInfoHandler, false);