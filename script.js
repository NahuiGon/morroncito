const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const pastelImage = new Image();
pastelImage.src = 'verdura.png';
const spriteWidth = 600;
const spriteHeight = 600;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;

let staggerFrames = 7;
const dropdown = document.getElementById('vel');
dropdown.addEventListener('change', function(e){
    staggerFrames = e.target.value;
});


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );
    // ctx.fillRect(50, 50, 100, 100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy ,dw ,dh)
    ctx.drawImage(pastelImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    if (gameFrame % staggerFrames == 0){
        if (frameX < 6) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);
};

animate();