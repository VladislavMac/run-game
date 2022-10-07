class Counter{
    constructor({width, height, x, y}){
        this.counter                  = document.createElement('div');
        this.counter.className        = 'counter';
        this.counter.style.height     = height + 'vh';
        this.counter.style.width      = width + 'vw';
        this.counter.style.top        = (100 - platformHeight - height) + 'vh';
        this.counter.style.left       = 10 + 'vw';

        return this.counter;
    }
}