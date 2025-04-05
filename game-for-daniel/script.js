const car = document.getElementById('car');
let position = 0;
let speed = 3;
let jumping = false;

function move() {
    let windowWidth = window.innerWidth;
    
    if (position < windowWidth) {
        position += speed;
    } else {
        position = -100;
    }
    car.style.left = position + "px";
    requestAnimationFrame(move);
}

function jump() {
    if (jumping) return;
    jumping = true;
    let startY = 175;
    let jumpHeight = 175;
    let up = true;

    function animateJump() {
        let bottomValue = parseInt(car.style.bottom) || startY;
        if(up) {
            bottomValue += 5;
            if (bottomValue >= startY + jumpHeight) up = false;
        } else {
            bottomValue -= 5;
            if (bottomValue <= startY) {
                bottomValue = startY;
                jumping = false;
                return;
            }
        }
        car.style.bottom = bottomValue + "px";
        requestAnimationFrame(animateJump);
    }
    animateJump();
}
car.addEventListener("click", jump);
move();