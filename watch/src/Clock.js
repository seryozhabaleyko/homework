export const WATCH_WIDTH = 500;
export const WATCH_HEIGHT = 500;
const WATCH_CX = WATCH_WIDTH / 2;
const WATCH_CY = WATCH_HEIGHT / 2;
const WATCH_RADIUS = (WATCH_WIDTH / 2) - 1;

class Model {
    constructor(view) {
        this.view = view;
    }

    init() {
        this.view.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);

        this.view.drawCircle(WATCH_CX, WATCH_CY, WATCH_RADIUS, 'gold');

        for (let i = 1; i < 13; i++) {
            this.view.drawCircle(
                this.xfrom(i),
                this.yfrom(i),
                30,
                '#4caf50'
            );

            this.view.drawText(
                this.xfrom(i),
                this.yfrom(i),
                i,
                'black'
            );
        }

        const { hour, minute, second } = this.getDate();

        this.view.drawText(
            WATCH_CX,
            WATCH_CY - WATCH_HEIGHT / 5,
            `${hour}:${this.formaTime(minute)}:${this.formaTime(second)}`,
            'black',
        );

        this.view.drawLine(
            WATCH_CX,
            WATCH_CY,
            this.xto(hour, 12, WATCH_CX, 150),
            this.yto(hour, 12, WATCH_CY, 150),
            10,
            '#333'
        );

        this.view.drawCircle(WATCH_CX, WATCH_CY, 10, '#333');

        this.view.drawLine(
            WATCH_CX,
            WATCH_CY,
            this.xto(minute, 60, WATCH_CX, 170),
            this.yto(minute, 60, WATCH_CY, 170),
            5,
            '#607d8b'
        );

        this.view.drawCircle(WATCH_CX, WATCH_CY, 8, '#607d8b');

        this.view.drawLine(
            WATCH_CX,
            WATCH_CY,
            this.xto(second, 60, WATCH_CX, 200),
            this.yto(second, 60, WATCH_CY, 200),
            3,
            'red'
        );

        this.view.drawCircle(WATCH_CX, WATCH_CY, 5, 'red');
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

    getDate() {
        const date = new Date();        

        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }

    formaTime(time) {
        return time < 10 ? time = `0${time}` : time;
    }
}

export default Model;
