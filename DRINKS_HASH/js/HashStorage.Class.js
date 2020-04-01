'use strict';

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

export default HashStorage;