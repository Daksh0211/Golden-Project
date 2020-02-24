var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance;

var form, player, game;

var SpaceShips, SpaceShip1, SpaceShip2;

var bg;

var obstacles, obstacle1, obstacle2 ;

//var SpaceShip1_img, SpaceShip2_img ;

function preload(){
bg = loadImage("images/background.jpg") ;
  SpaceShip1_img = loadImage("images/spaceship1.png");
  SpaceShip2_img = loadImage("images/spaceship2.png");

  obstacle1_img = loadImage("images/obstacle1.png");
  obstacle2_img = loadImage("images/obstacle2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 //background(bg) ;
 //rotateX(radians(rotationX));
  box(200, 200, 200);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function reverse_speed() {
  player.speed(3);
}

function spawnObstacles(){


}

/*let x = 0;
let y = 0;

// Speed - Velocity
let vx = 0;
let vy = 0;

// Acceleration
let ax = 0;
let ay = 0;

let vMultiplier = 0.007;
let bMultiplier = 0.6;*/

function setup() {
  createCanvas(displayWidth, displayHeight);
  fill(0);
}

function draw() {
  background(255);
  //ballMove();
  //ellipse(500, 500, 500, 500);
}



