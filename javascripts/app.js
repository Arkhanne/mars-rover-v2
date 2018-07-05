var rover = {
  directionNames: ["North", "East", "South", "West"],
  direction: 0,
  x: 0,
  y: 0,
  movementCalculator: [[0, -1], [1, 0], [0, 1], [-1, 0]],
  travelLog: []
};

//Constants
var X = 0;
var Y = 1;
var WIDTH = 10;
var HEIGHT = 10;
var MINX = 0;
var MINY = 0;

function turnLeft(rover){
  var currentDirection = this.rover.direction;

  //console.log("turnLeft was called!");
  //console.log("previous direction: " + this.rover.directionNames[currentDirection]);
  
  currentDirection = (currentDirection === 0 ? 3 : currentDirection-=1);

  this.rover.direction = currentDirection;

  //console.log("current direction: " + this.rover.directionNames[currentDirection]);
}

function turnRight(rover){
  var currentDirection = this.rover.direction;

  //console.log("turnRight was called!");
  //console.log("previous direction: " + this.rover.directionNames[currentDirection]);
  
  currentDirection = (currentDirection === 3 ? 0 : currentDirection+=1);

  this.rover.direction = currentDirection;

  //console.log("current direction: " + this.rover.directionNames[currentDirection]);
}

function moveForward(rover){
  var currentX = this.rover.x;
  var currentY = this.rover.y;
  var unnableToMove = false;

  //console.log("moveForward was called")
  //console.log("previous rover position: [" + currentX + "," + currentY + "]");

  currentX += this.rover.movementCalculator[this.rover.direction][X];
  currentY += this.rover.movementCalculator[this.rover.direction][Y];

  if (currentX < MINX) {
    currentX = MINX;
    unnableToMove = true;
  }

  if (currentX > WIDTH - 1) {
    currentX = WIDTH - 1;
    unnableToMove = true;
  }

  if (currentY < MINY) {
    currentY = MINY;
    unnableToMove = true;
  }

  if (currentY > HEIGHT - 1) {
    currentY = HEIGHT - 1;
    unnableToMove = true;
  }

  if (unnableToMove) {
    //console.log("Unnable to move there");
  } else {
    this.rover.travelLog.push([this.rover.x, this.rover.y]);
  }
  
  this.rover.x = currentX;
  this.rover.y = currentY;

  //console.log("current rover position:[" + currentX + "," + currentY +"]");
}

function move(commands) {
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "l":
        turnLeft();
        break;
      
      case "r":
        turnRight();
        break;
      
      case "f":
        moveForward();
        break;

      case "b":
        moveBackward();
        break;
    }
  }

  printTravelLog(this.rover);
}

function printTravelLog(rover) {
  var travelLog = "";

  for (i = 0; i < this.rover.travelLog.length; i++) {
    travelLog += "[" + this.rover.travelLog[i] + "]";
  }

  if (rover.travelLog.length === 0) {
    travelLog = "null";
  }

  console.log("rover travel log: " + travelLog);
}

function moveBackward(rover){
  var currentX = this.rover.x;
  var currentY = this.rover.y;
  var unnableToMove = false;

  //console.log("moveBackward was called")
  //console.log("previous rover position: [" + currentX + "," + currentY + "]");

  currentX -= this.rover.movementCalculator[this.rover.direction][X];
  currentY -= this.rover.movementCalculator[this.rover.direction][Y];

  if (currentX < MINX) {
    currentX = MINX;
    unnableToMove = true;
  }

  if (currentX > WIDTH - 1) {
    currentX = WIDTH - 1;
    unnableToMove = true;
  }

  if (currentY < MINY) {
    currentY = MINY;
    unnableToMove = true;
  }

  if (currentY > HEIGHT - 1) {
    currentY = HEIGHT - 1;
    unnableToMove = true;
  }

  if (unnableToMove) {
    //console.log("Unnable to move there");
  } else {
    this.rover.travelLog.push([this.rover.x, this.rover.y]);
  }
  
  this.rover.x = currentX;
  this.rover.y = currentY;

  //console.log("current rover position:[" + currentX + "," + currentY +"]");
}