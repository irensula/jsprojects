const canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const context = canvas.getContext("2d");
        
        context.font = "150px serif";
        let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "blue");
        gradient.addColorStop("0.5", "magenta");
        gradient.addColorStop("1.0", "red");

        const FPS = 30; 
        let x = 100;
        let y = 50;
        let xSpeed = 4; 
        let ySpeed = 6; 

        function clear() {
            context.clearRect(0,0,canvas.width, canvas.height); 
        }

        function draw() {
            context.beginPath();
                        
            context.fillStyle = gradient;
            context.fillText("404", x, y);
            
            context.closePath();
            context.fill();
        }

        function update() {
            x = x + xSpeed;
            y = y + ySpeed;
            const isCollidingWithRightSide = (x + 200 >= canvas.width);
            if (isCollidingWithRightSide){
                x = canvas.width - 200;
                xSpeed = -xSpeed;
            }
            const isCollidingWithLeftSide = (x <= 0 );
            if (isCollidingWithLeftSide){
                x = 0;
                xSpeed = -xSpeed;
            }

            const isCollidingWithBottomSide = (y >= canvas.height );
            if (isCollidingWithBottomSide){
                y = canvas.height;
                ySpeed = -ySpeed;
            }

            const isCollidingWithTopSide = (y - 100 <= 0 );
            if (isCollidingWithTopSide){
                y = 0 + 100;
                ySpeed = -ySpeed;
            }
        }

        function animate() {
            clear();
            draw();
            update(); 
        }

        window.setInterval(animate, 1000 / FPS);