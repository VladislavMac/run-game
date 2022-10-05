const field = document.querySelector('.field');

const platformSettings = {
    platformHeight : 30
}

const playerSettings = {
    playerHeight : 10,
    playerWidth : 3.5,
    jumpHeight : 6
}

const blockageSettings = {
    blockageWidth : 3,
    blockageHeight : 5,
    blockageX : 100,
}

const move = new Move();
const platform = new Platform({height : platformSettings.platformHeight});
const player = new Player({
    width : playerSettings.playerWidth,
    height : playerSettings.playerHeight,
    platformHeight : platformSettings.platformHeight
});

field.appendChild(platform);
field.appendChild(player);



setInterval(() =>{
    const blockage = new Blockage({
        width : blockageSettings.blockageWidth,
        height : blockageSettings.blockageHeight,
        x : blockageSettings.blockageX,
    });

    field.appendChild(blockage);
    
    move.moveLeft({
        blockage : blockage
    })
}, 1500)


let jumpCount = 0;
let possiblyJump = true;

window.addEventListener('keydown', (event) =>{
    if(event.key == 'ArrowUp' && possiblyJump == true){
        possiblyJump = false;

        move.jump({
            player : player,
            jumpHeight : playerSettings.jumpHeight
        });
        setTimeout(()=>{
            move.fall({
                player : player,
                jumpHeight : playerSettings.jumpHeight
            })
            setTimeout(()=>{
                possiblyJump = true;
            }, 350)
        }, 370)
    }
})