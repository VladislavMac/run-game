class Player{
    constructor({width, height, platformHeight}){
        this.player                  = document.createElement('div');
        this.player.className        = 'player';
        this.player.style.height     = height + 'vh';
        this.player.style.width      = width + 'vw';
        this.player.style.top        = (100 - platformHeight - height) + 'vh';
        this.player.style.left       = 10 + 'vw';

        return this.player;
    }
}