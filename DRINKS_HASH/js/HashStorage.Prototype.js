'use strict';

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

export default HashStorage;