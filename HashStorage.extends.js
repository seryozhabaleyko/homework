class HashStorage {
    constructor() {
        this._hash = {};
    }

    addValue(key, value) {
        this._hash[key] = value;
    }

    getValue(key) {
        return this._hash[key];
    }

    deleteValue(key) {
        return this._hash[key] ? delete this._hash[key] : false;
    }

    getKeys() {
        return Object.keys(this._hash);
    }
}

class Drinks extends HashStorage {
    constructor() {
        super();
    }

    update(key, value) {
        if (this._hash[key]) this._hash[key] = value;
    }

    has(key) {
        return this._hash[key] ? 'да' : 'нет';
    }
}

const drink = new Drinks();

class Fruit extends HashStorage {
    constructor() {
        super();
        this._box = [];
    }

    addValue(key, value) {
        super.addValue(key, value);
        this._box.push({[key]: value});
    }

    getNumber() {
        return Object.keys(this._hash).length;
    }

    getBox() {
        return this._box;
    }
}

const fruit = new Fruit();
