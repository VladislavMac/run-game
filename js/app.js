"use strict"

const field = document.querySelector('.field');

const settings = {
    platform : {
        platformHeight : 30
    },
    player : {
        playerHeight : 15,
        playerWidth : 8,
        jumpHeight : 6
    },
    blockage : {
        blockageHeight : 10,
        blockageWidth : 6,
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

const spawnBlockages = setInterval(() =>{
    if(checkingPlayerDeath({player : player}) == true){
        clearInterval(spawnBlockages)
        return false;
    }

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
}, 2000)


let jumpCount = 0;
let possiblyJump = true;

function checkingPlayerDeath({player}){
    const playerInfo = player.getBoundingClientRect();
    const allBlockages = document.querySelectorAll('.blockage');

    for( let i = 0; i < allBlockages.length; i++ ){
        const blockageInfo = allBlockages[i].getBoundingClientRect();
        if( blockageInfo.y == playerInfo.y || blockageInfo.y < playerInfo.bottom){
            if( blockageInfo.x > playerInfo.x && blockageInfo.x < ( playerInfo.x + playerInfo.width) ){ 
                return true
            }else if( blockageInfo.x < playerInfo.x && playerInfo.x < ( blockageInfo.x + blockageInfo.width ) ){
                return true
            }
        }
    }
    return false;
}

window.addEventListener('click', (event) =>{
    if( possiblyJump == true && checkingPlayerDeath({player: player}) == false ){
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
            }, 300)
        }, 650)
    }
})
window.addEventListener('keydown', (event) =>{
    if(event.key == 'ArrowUp' && possiblyJump == true && checkingPlayerDeath({player: player}) == false ){
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
            }, 300)
        }, 370)
    }
})
