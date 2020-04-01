'use strict';

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

export default HashStorage;