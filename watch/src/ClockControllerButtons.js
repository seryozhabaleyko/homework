'use strict';

class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.setChangeHandler(
            checked => {
                if (checked) {
                    this.registerModelHandler();
                } else {
                    this.model.setChangeListener(() => null);
                }
            }
        );

        this.registerModelHandler();
    }

    registerModelHandler() {
        this.model.setChangeListener(() => this.view.render(this.model));
        this.view.render(this.model);
    }
}

export default Controller;