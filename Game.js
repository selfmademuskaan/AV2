class Game {
  constructor(){

  }

  getState(){
    var gamestateRef  = database.ref('gamestate');
    gamestateRef.on("value",function(data){
       gamestate = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gamestate === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    tony = createSprite(70,100);
    tony.addImage("tony",imimg);
    tony.scale=0.1;

    bruce = createSprite(150,200);
    bruce.addImage("bruce",himg);
    bruce.scale=0.1;

    nat = createSprite(250,200);
    nat.addImage("nat",natimg);
    nat.scale=0.1;
  
    clint = createSprite(350,200);
    clint.addImage("clint",clintimg);
    clint.scale=0.1;

    captian = createSprite(450,200);
    captian.addImage("captian",capimg);
    captian.scale=0.2;

    thor = createSprite(500,100);
    thor.addImage("thor",timg);
    thor.scale=0.1;
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getcarsatend();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3750){
      gameState = 2;
      player.rank=player.rank+1;
      Player.updatecarsatend(player.rank)
  
    }
   
    drawSprites();
  }

  end(){
    console.log(player.rank);
    console.log("Game Ended");
  }
}
