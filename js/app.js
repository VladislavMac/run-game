"use strict"

const field = document.querySelector('.field');

const settings = {
    platform : {
        platformHeight : 30
    },
    player : {
        playerHeight : 10,
        playerWidth : 3.5,
        jumpHeight : 6
    },
    blockage : {
        blockageWidth : 3,
        blockageHeight : 5,
        blockageX : 100,
    }
}

// create platform
const platform = new Platform({
    height : settings.platform.platformHeight
});

// create player
const player = new Player({
    width          : settings.player.playerWidth,
    height         : settings.player.playerHeight,
    platformHeight : settings.platform.platformHeight
});

field.appendChild(player); // add player
field.appendChild(platform); // add platform

const move = new Move();

setInterval(() =>{
    // create new blockage
    const blockage = new Blockage({ 
        width          : settings.blockage.blockageWidth,
        height         : settings.blockage.blockageHeight,
        x              : settings.blockage.blockageX,
        platformHeight : settings.platform.platformHeight
    });

    // add on field blockage
    field.appendChild(blockage);
    
    // start moving blockage
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
            player     : player,
            jumpHeight : settings.player.jumpHeight
        });

        // after jump we fall
        setTimeout(()=>{ 
            move.fall({
                player     : player,
                jumpHeight : settings.player.jumpHeight
            })

            // set possibly jump 
            setTimeout(()=>{ 
                possiblyJump = true;
            }, 350)
        }, 370)
    }
})