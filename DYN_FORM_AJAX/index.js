'use strict';

import Form from './Form.js';

const url = 'https://fe.it-academy.by/AjaxStringStorage2.php';

const getServerInformation = (name) => {
    const options = {
        url,
        type: 'POST',
        cache: false,
        dataType: 'json',
        async: false,
        data: {
            f: 'READ',
            n: `KUZNIATSOU_DYN_FORM_AJAX_${name}`
        },
        success: getReady
    };

    $.ajax(options);
};

const getReady = (data) => {
    let result = null;

    try {
        result = JSON.parse(data.result);
    } catch (error) {
        console.error(error);
    }

    if (result) {
        const form = new Form(result, 'http://fe.it-academy.by/TestForm.php', 'POST');
        form.render();
    }
};

getServerInformation('formDef1');
getServerInformation('formDef2');