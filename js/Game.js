class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    SpaceShip1 = createSprite(100,200);
    SpaceShip1.addImage("SpaceShip", SpaceShip1_img);
    SpaceShip2 = createSprite(300,200);
    SpaceShip2.addImage("SpaceShip", SpaceShip2_img);
    SpaceShips = [SpaceShip1, SpaceShip2];


  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
   background(bg) ;
  

      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        SpaceShips[index-1].x = x;
        SpaceShips[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("white");
          ellipse(x,y,100,100);
          SpaceShips[index - 1].shapeColor = "white";
          camera.position.x = displayWidth/2;
          camera.position.y = SpaceShips[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      //player.reverse_speed() ;
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
     // player.speed = 5
      player.update();
    }

    if(player.distance > 4500){
      gameState = 2;

    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
