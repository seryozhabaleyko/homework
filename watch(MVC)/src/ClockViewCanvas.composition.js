import { WATCH_WIDTH, WATCH_HEIGHT } from './Clock.js';

function View() {
    const app = document.getElementById('root');
    const canvas = createCanvas();
    app.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.className = 'watch';
        canvas.width = WATCH_WIDTH;
        canvas.height = WATCH_HEIGHT;
        return canvas;
    }

    return {
        createButton(name = 'button', onClick) {
            const btn = document.createElement('button');
            btn.innerHTML = name;
            btn.onclick = onClick;
            app.appendChild(btn);
        },

        clearRect(x, y, width, height) {
            ctx.clearRect(x, y, width, height);
        },

        drawCircle(x, y, radius, color) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
        },

        drawText(x, y, text, color) {
            ctx.font = '40px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        },

        drawLine(xfrom, yfrom, xto, yto, width, color) {
            ctx.beginPath();
            ctx.moveTo(xfrom, yfrom);
            ctx.lineTo(xto, yto);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

export default View;