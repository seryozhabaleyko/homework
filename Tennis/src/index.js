'use strict';

(function() {
    const WIDTH = 500;
    const HEIGHT = 300;
    const CX = WIDTH  / 2;
    const CY = HEIGHT / 2;
    const R_BALL = 10;

    const ball = {
        x: CX + R_BALL,
        y: CY,
        radius: R_BALL,
        dx: 0,
        dy: 0,
        run() {
            ball.x = CX + R_BALL;
            ball.y = CY;
            ball.dx = 2;
            ball.dy = 2;
        }
    }

    const player1 = {
        x: 0,
        y: 20,
        width: 10,
        height: 100,
        score: 0,
        updateScore() {
            const p1 = document.getElementById('p1');
            p1.textContent = this.score;
        }
    }

    const player2 = {
        x: WIDTH - 10,
        y: 20,
        width: 10,
        height: 100,
        score: 0,
        updateScore() {
            const p2 = document.getElementById('p2');
            p2.textContent = this.score;
        }
    }

    let upPressed = false;
    let downPressed  = false;
    let shiftPressed  = false;
    let ctrlPressed  = false;

    document.addEventListener('keydown', keyDownHandler, false);
    
    function keyDownHandler(e) {
        if (e.keyCode === 38) {
            upPressed = true;
        }

        if (e.keyCode === 40) {
            downPressed = true;
        }

        if (e.keyCode === 16) {
            shiftPressed = true;
        }

        if (e.keyCode === 17) {
            ctrlPressed = true;
        }
    }

    document.addEventListener('keyup', keyUpHandler, false);

    function keyUpHandler(e) {
        if (e.keyCode === 38) {
            upPressed = false;
        }
        
        if (e.keyCode === 40) {
            downPressed = false;
        }

        if (e.keyCode === 16) {
            shiftPressed = false;
        }

        if (e.keyCode === 17) {
            ctrlPressed = false;
        }
    }

    const template = `
        <div id="panel">
            <button id="start">старт</button>
            <div id="score">
                <span id="p1">0</span>
                :
                <span id="p2">0</span>
            </div>
        </div>
        <canvas id="canvas" width="${WIDTH}" height="${HEIGHT}"></canvas>
    `;

    document
        .getElementById('root')
        .innerHTML = template;

    document
        .getElementById('start')
        .addEventListener('click', ball.run);

    const $canvas = document.getElementById('canvas');
    const ctx = $canvas.getContext('2d');

    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function drawRect(x, y, width, height, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        drawCircle(ball.x, ball.y, ball.radius, 'red');

        drawRect(player1.x, player1.y, player1.width, player1.height, 'green');
        drawRect(player2.x, player2.y, player2.width, player2.height, 'darkslateblue');

        ball.x += ball.dx;
        ball.y -= ball.dy;

        if (shiftPressed) {
            player1.y -= 3;
            if (player1.y <= 0) {
                player1.y = 0;
            }
        }
        
        if (ctrlPressed) {
            player1.y += 3;
            if (player1.y + player1.height > HEIGHT) {
                player1.y = HEIGHT - player1.height;
            }
        }

        if (upPressed) {
            player2.y -= 3;
            if (player2.y <= 0) {
                player2.y = 0;
            }
        }

        if (downPressed) {
            player2.y += 3;
            if (player2.y + player2.height > HEIGHT) {
                player2.y = HEIGHT - player2.height;
            }
        }

        if (ball.y - ball.radius <= 0) {
            ball.dy = -ball.dy;
        }

        if (ball.y + ball.radius >= HEIGHT) {
            ball.dy = -ball.dy;
        }

        if (ball.x - ball.radius <= player1.x + player1.width) {
            if (ball.y + ball.radius >= player1.y && ball.y + ball.radius <= player1.y + player1.height) {
                ball.dx = -ball.dx;
            }
        }

        if (ball.x + ball.radius >= player2.x) {
            if (ball.y >= player2.y && ball.y <= player2.y + player2.height) {
                ball.dx = -ball.dx;
            }
        }

        if (!(ball.x - ball.radius)) {
            ball.dx = 0;
            ball.dy = 0;
            ball.x += 1;
            player1.score++
            player1.updateScore();
        }

        if (ball.x + ball.radius === WIDTH) {
            ball.dx = 0;
            ball.dy = 0;
            ball.x -= 1;
            player2.score++
            player2.updateScore();
        }
        
        requestAnimationFrame(draw);
    }

    draw();
})();