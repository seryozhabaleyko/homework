// подкласс расширяет суперкласс
function _inherits(subclass, superclass) {
    subclass.prototype = Object.create(superclass.prototype);
    subclass.prototype.constructor = subclass;
}

// programmer - суперкласс
function Programmer() {
    this._hash = [];
}

Programmer.prototype.add = function (name, position, description) {
    this._hash.push({name, position, description});
};

Programmer.prototype.task = function (name, task) {
    this._hash.forEach(item => {
        if (item.name === name) item.task = task;
    });
};

Programmer.prototype.get = function () {
    return this._hash;
};

Programmer.prototype.delete = function (name) {
    this._hash.find((item, index) => {
        if (item.name === name) delete this._hash[index];
    });
};

const programmer = new Programmer();

_inherits(Frontend, Programmer);

// frontend - подкласс
function Frontend() {
    Programmer.call(this); // вызываем конструктор суперкласса
}

Frontend.prototype.add = function (name, description) {
    Programmer.prototype.add.call(this, name, 'frontend', description);
};

const frontend = new Frontend();

_inherits(Backend, Programmer);

// backend - подкласс
function Backend() {
    Programmer.call(this); // вызываем конструктор суперкласса
}

Backend.prototype.add = function (name, description) {
    Programmer.prototype.add.call(this, name, 'backend', description);
};

const backend = new Backend();
