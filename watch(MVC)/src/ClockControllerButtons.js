class Controller {
    clockStart(callback) {
        this.timerId = setInterval(callback, 1000);
        callback;
    }

    clockStop() {        
        clearInterval(this.timerId);
        this.timerId = null;
    }
}

export default Controller;