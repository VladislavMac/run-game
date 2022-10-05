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
                    moveUp()
                },25)
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
                    moveDown()
                },25)
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

            if( blockageLeft < 0 ){
                leftCount = 0;
            }else{
                setTimeout(() =>{
                    move()
                },25)
            }
        }
        move()
    }
}