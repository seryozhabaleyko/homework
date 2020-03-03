'use strict';

export const WATCH_WIDTH = 500;
export const WATCH_HEIGHT = 500;
export const WATCH_CX = WATCH_WIDTH / 2;
export const WATCH_CY = WATCH_HEIGHT / 2;
export const WATCH_RADIUS = (WATCH_WIDTH / 2) - 1;

class Model {

    constructor(timezone) {
        this.timezone = timezone;
        this.date = this.getDate();
        
        setInterval(() => {
            this.date = this.getDate();
            this.changeListenerCallback();
        }, 1000);
    }

    setChangeListener(changeListener) {
        this.changeListenerCallback = changeListener;
    }

    getDate() {
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 6e4);
        const date = new Date(utc + (36e5 * this.timezone));
        return date;
    }

    xfrom(index) {
        return WATCH_CX + (WATCH_RADIUS - WATCH_WIDTH / 10) * Math.sin((index * 30) * Math.PI / 180);
    }

    yfrom(index) {
        return WATCH_CY - (WATCH_RADIUS - WATCH_HEIGHT / 10) * Math.cos((index * 30) * Math.PI / 180);
    }

    xto(n, i, x, radius) {
        return x + radius * Math.sin(2 * Math.PI * n / i);
    }

    yto(n, i, y, radius) {
        return y - radius * Math.cos(2 * Math.PI * n / i);
    }

    formaTime(time) {
        return time < 10 ? time = `0${time}` : time;
    }
}

export default Model;
