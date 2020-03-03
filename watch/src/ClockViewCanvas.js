'use strict';

import {
    WATCH_WIDTH, WATCH_HEIGHT,
    WATCH_CX, WATCH_CY,
    WATCH_RADIUS
} from './Clock.js';
 
class View {

    constructor(selector, city) {
        this.selector = selector;
        this.city = city;

        const $wrapper = document.createElement('div');

        const $canvas = document.createElement('canvas');
        $canvas.width = WATCH_WIDTH;
        $canvas.height = WATCH_HEIGHT;
        
        const $start = document.createElement('button');
        $start.textContent = 'старт';
        $start.addEventListener('click', () => this.startedChangeHandler(true));

        const $stop = document.createElement('button');
        $stop.textContent = 'стоп';
        $stop.addEventListener('click', () => this.startedChangeHandler(false));

        const $city = document.createElement('span');
        $city.textContent = this.city;

        this.selector.appendChild($wrapper).append($start, $stop, $city, $canvas);

        this.ctx = $canvas.getContext('2d');
    }

    clearRect(x, y, width, height) {
        this.ctx.clearRect(x, y, width, height);
    }

    drawCircle(x, y, radius, color) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    drawText(x, y, text, color) {
        this.ctx.font = '40px serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }

    drawLine(xfrom, yfrom, xto, yto, width, color) {
        this.ctx.beginPath();
        this.ctx.moveTo(xfrom, yfrom);
        this.ctx.lineTo(xto, yto);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    render(model) {
        this.clearRect(0, 0, WATCH_WIDTH, WATCH_HEIGHT);

        this.drawCircle(WATCH_CX, WATCH_CY, WATCH_RADIUS, 'gold');

        for (let i = 1; i < 13; i++) {
            this.drawCircle(
                model.xfrom(i),
                model.yfrom(i),
                30,
                '#4caf50'
            );

            this.drawText(
                model.xfrom(i),
                model.yfrom(i),
                i,
                'black'
            );
        }

        this.drawText(
            WATCH_CX,
            WATCH_CY - WATCH_HEIGHT / 5,
            `${model.formaTime(model.date.getHours())}:${model.formaTime(model.date.getMinutes())}:${model.formaTime(model.date.getSeconds())}`,
            'black',
        );

        this.drawLine(
            WATCH_CX,
            WATCH_CY,
            model.xto(model.date.getHours(), 12, WATCH_CX, 150),
            model.yto(model.date.getHours(), 12, WATCH_CY, 150),
            10,
            '#333'
        );

        this.drawCircle(WATCH_CX, WATCH_CY, 10, '#333');

        this.drawLine(
            WATCH_CX,
            WATCH_CY,
            model.xto(model.date.getMinutes(), 60, WATCH_CX, 170),
            model.yto(model.date.getMinutes(), 60, WATCH_CY, 170),
            5,
            '#607d8b'
        );

        this.drawCircle(WATCH_CX, WATCH_CY, 8, '#607d8b');

        this.drawLine(
            WATCH_CX,
            WATCH_CY,
            model.xto(model.date.getSeconds(), 60, WATCH_CX, 200),
            model.yto(model.date.getSeconds(), 60, WATCH_CY, 200),
            3,
            'red'
        );

        this.drawCircle(WATCH_CX, WATCH_CY, 5, 'red');
    }

    setChangeHandler(handler) {
        this.startedChangeHandler = handler;
    }
}

export default View;
