'use strict';

import {
    WATCH_WIDTH, WATCH_HEIGHT,
    WATCH_CX, WATCH_CY,
    WATCH_RADIUS
} from './Clock.js';

class ViewSVG {

    constructor(selector, city) {
        this.selector = selector;
        this.city = city;

        const $wrapper = document.createElement('div');

        this.$svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.$svg.setAttribute('width', WATCH_WIDTH);
        this.$svg.setAttribute('height', WATCH_HEIGHT);

        const $start = document.createElement('button');
        $start.textContent = 'старт';
        $start.addEventListener('click', () => this.startedChangeHandler(true));

        const $stop = document.createElement('button');
        $stop.textContent = 'стоп';
        $stop.addEventListener('click', () => this.startedChangeHandler(false));

        const $city = document.createElement('span');
        $city.textContent = this.city;

        this.selector.appendChild($wrapper).append($start, $stop, $city, this.$svg);
    }

    drawCircle(x, y, radius, color) {
        const $circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        $circle.setAttribute('stroke', 'black');
        $circle.setAttribute('fill', color);
        $circle.setAttribute('cx', x);
        $circle.setAttribute('cy', y);
        $circle.setAttribute('r', radius);
        this.$svg.appendChild($circle);
    }

    drawText(x, y, text, color) {
        const $text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        $text.setAttribute('x', x);
        $text.setAttribute('y', y + 8);
        $text.setAttribute('text-anchor', 'middle');
        $text.setAttribute('font-size', '30');
        $text.setAttribute('font', 'bold 40px sans-serif');
        $text.setAttribute('fill', color);
        $text.textContent = text;
        this.$svg.appendChild($text);
    }

    drawLine(xfrom, yfrom, xto, yto, width, color) {
        const $line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        $line.setAttribute('stroke', color);
        $line.setAttribute('stroke-width', width);
        $line.setAttribute('stroke-linecap', 'round');
        $line.setAttribute('x1', xfrom);
        $line.setAttribute('y1', yfrom);
        $line.setAttribute('x2', xto);
        $line.setAttribute('y2', yto);
        this.$svg.appendChild($line);
    }

    render(model) {
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

export default ViewSVG;