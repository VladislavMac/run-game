class Blockage{
    constructor({width, height, x}){
        this.blockage                  = document.createElement('div');
        this.blockage.className        = 'blockage';
        this.blockage.style.background = 'red';
        this.blockage.style.height     = height + 'vh';
        this.blockage.style.width      = width + 'vw';
        this.blockage.style.top        = (100 - platformSettings.platformHeight - height) + 'vh';
        this.blockage.style.left       = x + 'vw';

        return this.blockage;
    }
}