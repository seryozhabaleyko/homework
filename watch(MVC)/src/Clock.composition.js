import { WATCH_WIDTH, WATCH_HEIGHT, WATCH_CX, WATCH_CY, WATCH_RADIUS } from './index.js';

function Model(view) {

    function xfrom(index) {
        return WATCH_CX + (WATCH_RADIUS - WATCH_WIDTH / 10) * Math.sin((index * 30) * Math.PI / 180);
    }

    function yfrom(index) {
        return WATCH_CY - (WATCH_RADIUS - WATCH_HEIGHT / 10) * Math.cos((index * 30) * Math.PI / 180);
    }

    function xto(n, i, x, radius) {
        return x + radius * Math.sin(2 * Math.PI * n / i);
    }

    function yto(n, i, y, radius) {
        return y - radius * Math.cos(2 * Math.PI * n / i);
    }

    function formaTime(time) {
        return time < 10 ? time = `0${time}` : time;
    }

    function getDate() {
        const date = new Date();

        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }

    return {
        init() {
            view.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);

            view.drawCircle(WATCH_CX, WATCH_CY, WATCH_RADIUS, 'gold');

            for (let i = 1; i < 13; i++) {
                view.drawCircle(
                    xfrom(i),
                    yfrom(i),
                    30,
                    '#4caf50'
                );

                view.drawText(
                    xfrom(i),
                    yfrom(i),
                    i,
                    'black'
                );
            }

            const { hour, minute, second } = getDate();

            view.drawText(
                WATCH_CX,
                WATCH_CY - WATCH_HEIGHT / 5,
                `${hour}:${formaTime(minute)}:${formaTime(second)}`,
                'black',
            );

            view.drawLine(
                WATCH_CX,
                WATCH_CY,
                xto(hour, 12, WATCH_CX, 150),
                yto(hour, 12, WATCH_CY, 150),
                10,
                '#333'
            );

            view.drawCircle(WATCH_CX, WATCH_CY, 10, '#333');

            view.drawLine(
                WATCH_CX,
                WATCH_CY,
                xto(minute, 60, WATCH_CX, 170),
                yto(minute, 60, WATCH_CY, 170),
                5,
                '#607d8b'
            );

            view.drawCircle(WATCH_CX, WATCH_CY, 8, '#607d8b');

            view.drawLine(
                WATCH_CX,
                WATCH_CY,
                xto(second, 60, WATCH_CX, 200),
                yto(second, 60, WATCH_CY, 200),
                3,
                'red'
            );

            view.drawCircle(WATCH_CX, WATCH_CY, 5, 'red');
        }
    }
}

export default Model;