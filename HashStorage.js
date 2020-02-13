function HashStorage() {
    this._hash = {};

    this.addValue = function (key, value) {
        this._hash[key] = value;
    };

    this.getValue = function (key) {
        return this._hash[key];
    };

    this.deleteValue = function (key) {
        return this._hash[key] ? delete this._hash[key] : false;
    };

    this.getKey = function () {
        return Object.keys(this._hash);
    };
}

function Drinkables() {
    HashStorage.call(this);

    this.updateDrink = function (key, value) {
        if (this._hash[key]) {
            this._hash[key] = value;
        }
    };

    this.isDrink = function (key) {
        return this._hash[key] ? 'да' : 'нет';   
    };
}

function Fruit() {
    HashStorage.call(this);

    let box = [];

    const parentAddValue = this.addValue;
    
    this.addValue = function (key, value) {
        parentAddValue.call(this, key, value);
        box.push({[key]: value});
    };

    this.numberFruit = function () {
        return Object.keys(this._hash).length;
    };
    
    this.getFruitBox = function () {
        return box;
    };
}