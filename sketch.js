// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var rectangleObject;
var circleObject;
var squareObject;


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);

     //create rectangle 
     rectangleObject=new Rectangle(100,100,50,20,120,75,50);

     //create stationary circle
     circleObject=new Circle(200,200,20,100,150,75);

    //create stationary dog
     squareObject=new Square(400,400,50,50,145,175,115);

    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(200);
        shapeYs[i] = getRandomNumber(200);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(20, 20);
}

function draw() {
    background(120, 100, 100);
    stroke(0);


     //display rectangle
     rectangleObject.display();
    
    //display stationary circle
    circleObject.display();

    //display stationary triangle
    squareObject.display();
     
     fill(0);

    // call createBorders function
    createBorders(5);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

// check to see if the character has gone out of bounds
if(characterX > width && characterY<height-50)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("Out of Bounds!", width/2-50, height/2-50);
}

if(characterX < 0 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    if(characterY < 0 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }

    if(characterY > height )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Out of Bounds!", width/2-50, height/2-50);
    }



        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    square(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
