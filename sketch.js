var starkTower;
var loki;
var septer,sp1,sp2,sp3;
var database;
var tony,bruce,nat,clint,captian,thor;
var imimg,himg,natimg,clintimg,capimg,timg;

var gamestate = 0;
var playerCount;
var allPlayers;
var form, player, game;


function preload(){
  starkTower = loadImage("images/StarkTower.png");
  loki = loadImage("images/loki.png");
   septer= loadImage("images/septer.png");

   imimg = loadImage("images/ironman.png");
   himg = loadImage("images/hulk.png");
   natimg = loadImage("images/nat.png");
  clintimg = loadImage("images/clint.png");
  capimg = loadImage("images/cap.png");
  timg = loadImage("images/thor.png");

}

function setup() {
createCanvas(600,600);
database = firebase.database();

  starktower=createSprite(300, 70, 5, 5);
  starktower.addImage("starktower",starkTower);
  starktower.scale=0.2;

  loki1=createSprite(300, 575, 5, 5);
  loki1.addImage("loki",loki);
 loki1.scale=0.3;

 loki2=createSprite(150, 575, 5, 5);
  loki2.addImage("loki",loki);
 loki2.scale=0.3;

 loki3=createSprite(450, 575, 5, 5);
  loki3.addImage("loki",loki);
 loki3.scale=0.3;

 game= new Game();
 game.getState();
 game.start();
  
}



function draw() {
 background("lightblue");  

 if(playerCount === 6){
  game.update(1);
}
if(gamestate === 1){
  clear();
  game.play();
}
if(gamestate === 2){
  game.end();
}

 septer1();
 septer2();
 septer3();

  drawSprites();
}

function septer1(){
  if (World.frameCount%70===0){
    sp1 = createSprite(300, 575,5, 50);
     sp1.velocityY=-4;
     sp1.addImage("sp",septer);
 sp1.scale=0.1;
  
   }
  }

  function septer2(){
    if (World.frameCount%60===0){
      sp2 = createSprite(150, 575,5, 50);
       sp2.velocityY=-5;
       sp2.addImage("sp",septer);
   sp2.scale=0.1;
    
     }
  }

  function septer3(){
    if (World.frameCount%50===0){
      sp3 = createSprite(450, 575,5, 50);
       sp3.velocityY=-6;
       sp3.addImage("sp",septer);
   sp3.scale=0.1;
    
     }
  }