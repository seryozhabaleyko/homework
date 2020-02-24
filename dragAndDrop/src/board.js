function dragAndDrop() {
    const $cards = document.querySelectorAll('.js-droppable');
    const $lists = document.querySelectorAll('.js-list-cards');

    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEnd = function() {
        this.classList.remove('hide');
    };

    const dragOver = function(evt) {
        evt.preventDefault();
    };

    const dragEnter = function(evt) {
        evt.preventDefault();
        this.classList.add('hovered');
    };

    const dragLeave = function() {
        this.classList.remove('hovered');
    };

    let dragDrop = null;

    $cards.forEach(card => { 
        dragDrop = function () {
            this.append(card);
            this.classList.remove('hovered');
        }

        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });    

    $lists.forEach(list => {
        list.addEventListener('dragover', dragOver);
        list.addEventListener('dragenter', dragEnter);
        list.addEventListener('dragleave', dragLeave);
        list.addEventListener('drop', dragDrop);
    });
}

export default dragAndDrop;