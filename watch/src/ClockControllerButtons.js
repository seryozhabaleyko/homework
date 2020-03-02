class Controller {
    constructor(view, model) {
        this.model = model;
        this.view = view;

        this.clockStart();

        this.view.createButton('start', () => {
            this.clockStop();
            this.clockStart();
            this.model.init();
        });

        this.view.createButton('stop', () => {
            this.clockStop();
        });
    }

    clockStart() {
        this.timerId = setInterval(this.model.init.bind(this.model), 1000);
        this.model.init();
    }

    clockStop() {        
        clearInterval(this.timerId);
        this.timerId = null;
    }
}

export default Controller;
