class Move{
    jump({player, jumpHeight}){
        let jumpCount  = 0;
        let playerTop  = parseInt(player.style.top.split('vh')[0]);

        function moveUp(){
            jumpCount++;

            playerTop -= jumpCount
            player.style.top = playerTop + 'vh'

            if( jumpCount == jumpHeight ){
                jumpCount = 0;
            }else{
                setTimeout(() =>{
                    if(checkingPlayerDeath({player : player}) == true){
                        jumpCount = 0;
                        return;
                    }
                    moveUp()
                },50)
            } 
        }
        moveUp();
    }
    fall({player, jumpHeight}){
        let jumpCount = 0;
        let playerTop  = parseInt(player.style.top.split('vh')[0]);

        function moveDown(){
            jumpCount++;

            playerTop += jumpCount;
            player.style.top =  playerTop + 'vh';

            if( jumpCount == jumpHeight ){
                jumpCount = 0;
            }else{
                setTimeout(() =>{
                    if(checkingPlayerDeath({player : player}) == true){
                        jumpCount = 0;
                        return;
                    }
                    moveDown()
                },60)
            }
        }
        moveDown()
    }
    moveLeft({blockage}){
        let leftCount = 100;
        
        function move(){
            let blockageLeft = parseInt(blockage.style.left.split('vw')[0]);

            leftCount--;

            blockageLeft = leftCount;
            blockage.style.left = blockageLeft + 'vw';

            if( blockageLeft < -5 ){
                leftCount = 0;
                blockage.remove()
            }else{
                setTimeout(() =>{
                    if(checkingPlayerDeath({player : player}) == true){
                        leftCount = 0;
                        return;
                    }
                    move()
                },25)
            }
        }
        move()
    }
}