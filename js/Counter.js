class Counter{
    constructor({x, y}){
        this.counter                  = document.createElement('div');
        this.counter.className        = 'counter';
        this.counter.style.top        = y + 'vh';
        this.counter.style.left       = x + 'vw';

        return this.counter;
    }
}