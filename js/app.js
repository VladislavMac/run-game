"use strict"

const field = document.querySelector('.field');

const settings = {
    platform : {
        height : 30
    },
    player : {
        height : 15,
        width : 8,
        jumpHeight : 6
    },
    blockage : {
        height : 10,
        width : 6,
        x : 100,
    },
    counter : {
        x : 5,
        y : 10
    }
}

// create platform
const platform = new Platform({
    height : settings.platform.height
});

// create player
const player = new Player({
    width          : settings.player.width,
    height         : settings.player.height,
    platformHeight : settings.platform.height
});

const counter = new Counter({
    x : settings.counter.x,
    y : settings.counter.y,
})

field.appendChild(player); // add player
field.appendChild(platform); // add platform
field.appendChild(counter) // add counter

function setScore(){
    const counter = document.querySelector('.counter');
    let count = 0;

    const updateScore = setInterval(() => {
        if(checkingPlayerDeath({player : player}) == true){
            console.log(`score : ${count}`)
            clearInterval(updateScore)
            return false;
        }
        
        count++;
        counter.innerHTML = `score : <span>${count}</span>`
    },1000)
}
setScore();

const move = new Move();

const spawnBlockages = setInterval(() =>{
    if(checkingPlayerDeath({player : player}) == true){
        clearInterval(spawnBlockages)
        return false;
    }

    // create new blockage
    const blockage = new Blockage({ 
        width          : settings.blockage.width,
        height         : settings.blockage.height,
        x              : settings.blockage.x,
        platformHeight : settings.platform.height
    });

    // add on field blockage
    field.appendChild(blockage);
    
    // start moving blockage
    move.moveLeft({
        blockage : blockage
    })
}, 2000)

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

let possiblyJump = true;

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
            }, 600)
        }, 450)
    }
})
