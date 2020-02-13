function _inherits(subclass, superclass) {
    subclass.prototype = Object.create(superclass.prototype);
    subclass.prototype.constructor = subclass;
}

function HashStorage() {
    this._hash = {};
}

HashStorage.prototype.addValue = function (key, value) {
    this._hash[key] = value;
};

HashStorage.prototype.getValue = function (key) {
    return this._hash[key];
};

HashStorage.prototype.deleteValue = function (key) {
    return this._hash[key] ? delete this._hash[key] : false;
};

HashStorage.prototype.getKey = function () {
    return Object.keys(this._hash);
};

_inherits(Drinks, HashStorage);

function Drinks() {
    HashStorage.call(this);
}

Drinks.prototype.update = function (key, value) {
    if (this._hash[key]) this._hash[key] = value;
};

Drinks.prototype.has = function (key) {
    return this._hash[key] ? 'да' : 'нет';
};

_inherits(Fruit, HashStorage);

function Fruit() {
    HashStorage.call(this);
    this.box = [];
}

Fruit.prototype.addValue = function (key, value) {
    HashStorage.prototype.addValue.apply(this, arguments);
    this.box.push({[key]: value});
};

Fruit.prototype.number = function () {
    return Object.keys(this._hash).length;
};

Fruit.prototype.getFruitBox = function () {
    return this.box;
};