class Platform{
    constructor({height}){
        this.platform                  = document.createElement('div');
        this.platform.className        = 'platform';
        this.platform.style.height     = height + 'vh';
        this.platform.style.width      = 100 + '%';
        this.platform.style.top        = (100 - height) + 'vh';

        return this.platform;
    }
}


