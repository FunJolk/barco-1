var ship, ship_walk;
var ground, invisibleGround, groundImage;

function preload(){
  ship_walk = loadAnimation("ship-1.png", "ship-2.png")

  groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de ship
 ground = createSprite(400, 200, 200, 200);
 ground.addImage("ground", groundImage);
 ground.velocityX = -2;
 ground.scale = 0.25;

 ship = createSprite(50, 150, 20, 50);
 ship.scale = 0.1
 ship.addAnimation("running", ship_walk);

 invisibleGround = createSprite(200, 190, 400, 20);
 invisibleGround.visible = false;
}

function draw(){
  console.log(ship.y)
  background("white")
  
  drawSprites();

  ship.collide(invisibleGround)
  
  ship.velocityY = ship.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/8;
  }

}