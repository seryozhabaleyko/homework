class Programmer {
    constructor() {
        this._hash = [];
    }

    add(name, position, description) {
        this._hash.push({name, position, description});
    }

    task(name, task) {
        this._hash.forEach(item => {
            if (item.name === name) item.task = task;
        });
    }

    get() {
        return this._hash;
    }

    delete(name) {
        this._hash.find((item, index) => {
            if (item.name === name) delete this._hash[index];
        });
    }
}

class Frontend extends Programmer {
    constructor() {
        super();
    }

    add(name, description) {
        super.add(name, 'frontend', description);
    }
}

const frontend = new Frontend();

class Backend extends Programmer {
    constructor() {
        super();
    }

    add(name, description) {
        super.add(name, 'backend', description);
    }
}

const backend = new Backend();
