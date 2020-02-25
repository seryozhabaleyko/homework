'use strict';

const CLOCK_WIDTH = 500;
const CLOCK_HEIGHT = 500;
const CLOCK_CX = CLOCK_WIDTH / 2;
const CLOCK_CY = CLOCK_HEIGHT / 2;
const CLOCK_RADIUS = CLOCK_HEIGHT / 2;

function createNodeWrapper() {
    const $wrapper = document.createElement('div');
    $wrapper.style.width = `${CLOCK_WIDTH}px`;
    $wrapper.style.height = `${CLOCK_HEIGHT}px`;
    $wrapper.style.margin = '0 auto';
    return $wrapper;
}

function createNodeSVG() {
    const $svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    $svg.setAttribute('width', CLOCK_WIDTH);
    $svg.setAttribute('height', CLOCK_HEIGHT);
    $svg.id = 'watch';
    return $svg;
}

function createNodeCircle() {
    const $circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    $circle.setAttribute('fill', 'gold');
    $circle.setAttribute('cx', CLOCK_CX);
    $circle.setAttribute('cy', CLOCK_CY);
    $circle.setAttribute('r', CLOCK_RADIUS);
    return $circle;
}

function createNodeGroup() {
    const $group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    return $group;
}

function createNodeForNumber(index) {
    const angle = index * 30 / 180 * Math.PI;
    const $number = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    $number.setAttribute('stroke', 'gray');
    $number.setAttribute('fill', 'lightseagreen');
    $number.setAttribute('cx', CLOCK_CX + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle));
    $number.setAttribute('cy', CLOCK_CY - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle));
    $number.setAttribute('r', CLOCK_RADIUS / 10);
    return $number;
}

function createNodeForText(index) {
    const angle = index * 30 / 180 * Math.PI;
    const $text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $text.setAttribute('x', CLOCK_CX + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle));
    $text.setAttribute('y', CLOCK_CY - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle) + (CLOCK_RADIUS / 10) / 2.5);
    $text.setAttribute('text-anchor', 'middle');
    $text.setAttribute('font-size', '30');
    $text.textContent = index;
    return $text;
}

function createHourHand() {
    const $hourHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    $hourHand.setAttribute('stroke', 'black');
    $hourHand.setAttribute('stroke-width', '10');
    $hourHand.setAttribute('stroke-linecap', 'round');
    $hourHand.setAttribute('x1', CLOCK_CX);
    $hourHand.setAttribute('y1', CLOCK_CY * 1.05);
    $hourHand.setAttribute('x2', CLOCK_CX);
    $hourHand.setAttribute('y2', CLOCK_CY * 0.5);
    $hourHand.id = 'hour';
    return $hourHand;
}

function createMinuteHand() {
    const $minuteHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    $minuteHand.setAttribute('stroke', 'black');
    $minuteHand.setAttribute('stroke-width', '5');
    $minuteHand.setAttribute('stroke-linecap', 'round');
    $minuteHand.setAttribute('x1', CLOCK_CX);
    $minuteHand.setAttribute('y1', CLOCK_CY * 1.05);
    $minuteHand.setAttribute('x2', CLOCK_CX);
    $minuteHand.setAttribute('y2', CLOCK_CY * 0.25);
    $minuteHand.id = 'minute';
    return $minuteHand;
}

function createSecondHand() {
    const $secondHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    $secondHand.setAttribute('stroke', 'green');
    $secondHand.setAttribute('stroke-width', CLOCK_RADIUS / 80);
    $secondHand.setAttribute('x1', CLOCK_CX);
    $secondHand.setAttribute('y1', CLOCK_CY * 1.05);
    $secondHand.setAttribute('x2', CLOCK_CX);
    $secondHand.setAttribute('y2', CLOCK_CY * 0.15);
    $secondHand.id = 'second';
    return $secondHand;
}

function createDate() {
    const $date = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $date.setAttribute('x', CLOCK_CX);
    $date.setAttribute('y', CLOCK_CY - CLOCK_RADIUS / 2.75);
    $date.setAttribute('text-anchor', 'middle');
    $date.setAttribute('font-size', CLOCK_RADIUS / 5);
    $date.id = 'date';
    return $date;
}

function startWatch() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const angleHour = (hour % 12) / 12 * 360 + minute / 60 * 30;
    const angleMinute = minute / 60 * 360;
    const angleSecond = second / 60 * 360;
    
    const $date = document.getElementById('date');
    const $hour = document.getElementById('hour');
    const $minute = document.getElementById('minute');
    const $second = document.getElementById('second');
    $date.textContent = date.toLocaleTimeString();
    $hour.setAttribute('transform', `rotate(${angleHour} ${CLOCK_CX} ${CLOCK_CY})`);
    $minute.setAttribute('transform', `rotate(${angleMinute} ${CLOCK_CX} ${CLOCK_CY})`)
    $second.setAttribute('transform', `rotate(${angleSecond} ${CLOCK_CX} ${CLOCK_CY})`)
}

function watch() {
    const wrapper = createNodeWrapper();
    const svg = createNodeSVG();
    const circle = createNodeCircle();
    const hourHand = createHourHand();
    const minuteHand = createMinuteHand();
    const secondHand = createSecondHand();
    const date = createDate();

    svg.appendChild(circle);

    for (let i = 1; i < 13; i++) {
        const group = createNodeGroup();
        const number = createNodeForNumber(i);
        const text = createNodeForText(i);

        svg.appendChild(group).append(number, text);
    }

    document.body.appendChild(wrapper).appendChild(svg).append(hourHand, minuteHand, secondHand, date);

    startWatch();

    setInterval(() => {
        startWatch();
    }, 1000);
}

watch();