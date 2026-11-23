let ballX = 300;
let ballY = 200;
let ballSize = 50;
let speed = 4;
let directionX = 1;
let directionY = 1;

// CREATES CANVAS, DRAWSHEET
function setup() {

    createCanvas(600, 400);

}

//RESPONSIBLE FOR DRAWING, WHILE CHANGING THE FRAME
function draw() {
    drawGradient();


    ballX = ballX + (speed * directionX);
    ballY = ballY + (speed * directionY);


    if (ballX + ballSize / 2 >= width ||
        ballX - ballSize / 2 <= 0) {

        directionX = directionX * -1;

    }


  
    if (ballY + ballSize / 2 >= height ||
        ballY - ballSize / 2 <= 0) {

        directionY = directionY * -1;

    }


    fill(255, 100, 150);
    noStroke();

    circle(ballX, ballY, ballSize);

    fill(255, 220, 230);

    circle(
        ballX - 10,
        ballY - 10,
        12
    );


    fill(255);
    textSize(18);
    textAlign(CENTER);

    text("BOUNCING BALL ANIMATION", width / 2, 30);

    textSize(13);

    text(
        "UP ARROW = Increase Speed",
        width / 2,
        365
    );

    text(
        "DOWN ARROW = Decrease Speed",
        width / 2,
        385
    );

    textSize(14);

    text(
        "Speed: " + speed,
        width / 2,
        55
    );

}

// FOR BACKGROUND COLOR

function drawGradient() {

   
    let topColor = color(40, 40, 100);

    let bottomColor = color(120, 60, 150);

   
    for (let y = 0; y < height; y++) {

        let amount = map(y, 0, height, 0, 1);

       
        let currentColor = lerpColor(
            topColor,
            bottomColor,
            amount
        );

        stroke(currentColor);

        line(0, y, width, y);

    }

}

// KEYBOARD CONTROL

function keyPressed() {

    // Increase ball speed
    if (keyCode === UP_ARROW) {

        speed = speed + 1;

        // Maximum speed is 10
        speed = min(speed, 10);

    }


    // Decrease ball speed
    if (keyCode === DOWN_ARROW) {

        speed = speed - 1;

        // Minimum speed is 1
        speed = max(speed, 1);

    }

    
    return false;

}

// reference

//function drawGradient() {

    // Starting background color
    //let topColor = color(40, 40, 100);

    // Ending background color
   // let bottomColor = color(120, 60, 150);

    // Repeat for every horizontal position
    //for (let y = 0; y < height; y++) {

        // Calculate the gradient position
        //let amount = map(y, 0, height, 0, 1);

        // Blend the two colors
       // let currentColor = lerpColor(
           // topColor,
           // bottomColor,
            //amount
      //  );

        // Apply the color
      //  stroke(currentColor);

        // Draw a horizontal line
        //line(0, y, width, y);
    //}
//}