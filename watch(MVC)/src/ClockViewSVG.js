import { WATCH_WIDTH, WATCH_HEIGHT } from './Clock.js';

class ViewSVG {
    constructor() {
        this.app = document.getElementById('root');
        this.wrapper = document.createElement('div');
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');        
        this.svg.setAttribute('width', WATCH_WIDTH)
        this.svg.setAttribute('height', WATCH_HEIGHT)
        this.app.appendChild(this.wrapper).appendChild(this.svg);
    }

    createButton(name = 'button', onClick) {
        const btn = document.createElement('button');
        btn.innerHTML = name;
        btn.onclick = onClick;
        this.wrapper.appendChild(btn);
    }

    clearRect(x, y, width, height) {
        
    }

    drawCircle(x, y, radius, color) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('fill', color);
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', radius);
        this.svg.appendChild(circle);
    }

    drawText(x, y, text, color) {
        let $text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        $text.setAttribute('x', x);
        $text.setAttribute('y', y + 8);
        $text.setAttribute('text-anchor', 'middle');
        $text.setAttribute('font-size', '30');
        $text.setAttribute('font', 'bold 40px sans-serif');
        $text.setAttribute('fill', color);
        $text.textContent = text;
        this.svg.appendChild($text);
    }

    drawLine(xfrom, yfrom, xto, yto, width, color) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', width);
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('x1', xfrom);
        line.setAttribute('y1', yfrom);
        line.setAttribute('x2', xto);
        line.setAttribute('y2', yto);
        this.svg.appendChild(line);
    }
}

export default ViewSVG;