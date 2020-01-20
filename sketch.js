var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var SpaceShips, SpaceShip1, SpaceShip2;

var bg;

//var SpaceShip1_img, SpaceShip2_img ;

function preload(){
bg = loadImage("images/background.jpg") ;
  SpaceShip1_img = loadImage("images/spaceship1.png");
  SpaceShip2_img = loadImage("images/spaceship2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
background(bg) ;
bg.velocityY = -3 ;
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
