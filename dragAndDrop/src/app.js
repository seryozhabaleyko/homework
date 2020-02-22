import dragAndDrop from './board.js';

(function () {
    const $balls = document.querySelectorAll('.ball');

    function onMouseDown(e) {   
        const shiftX = e.clientX - this.getBoundingClientRect().left;
        const shiftY = e.clientY - this.getBoundingClientRect().top;

        this.style.position = 'absolute';
        this.style.zIndex = 1000;

        document.body.append(this);

        const moveAt = (pageX, pageY) => {
            this.style.left = pageX - shiftX + 'px';
            this.style.top = pageY - shiftY + 'px';
        };

        moveAt(e.pageX, e.pageY);

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        this.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            this.onmouseup = null;
        };
    }

    $balls.forEach(ball => {
        ball.addEventListener('mousedown', onMouseDown);
        ball.ondragstart = () => false;
    });
})();

//dragAndDrop();