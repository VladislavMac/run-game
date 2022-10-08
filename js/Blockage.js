class Blockage{
    constructor({width, height, x, platformHeight}){
        this.blockage                  = document.createElement('div');
        this.blockage.className        = 'blockage';
        this.blockage.style.height     = height + 'vh';
        this.blockage.style.width      = width + 'vw';
        this.blockage.style.top        = (100 - platformHeight - height) + 'vh';
        this.blockage.style.left       = x + 'vw';

        return this.blockage;
    }
}