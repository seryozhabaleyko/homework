import { WATCH_WIDTH, WATCH_HEIGHT } from './Clock.js';
 
class View {
    constructor(selector) {
        this.selector = selector;
        this.wrapper = document.createElement('div');
        const canvas = document.createElement('canvas');
        canvas.width = WATCH_WIDTH;
        canvas.height = WATCH_HEIGHT;
        this.selector.appendChild(this.wrapper).appendChild(canvas);
        this.ctx = canvas.getContext('2d');
    }

    createButton(name = 'button', onClick) {
        const btn = document.createElement('button');
        btn.innerHTML = name;
        btn.onclick = onClick;
        this.wrapper.appendChild(btn);
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
}

export default View;
