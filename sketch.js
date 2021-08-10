var sea, seaImage;
var ship, shipAnimation;

function preload(){
  seaImage = loadImage('sea.png');
  shipAnimation = loadAnimation('ship-1.png', 'ship-2.png','ship-3.png','ship-4.png',)
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200);
  sea.scale = 0.5;
  sea.addImage('sea', seaImage);

  ship = createSprite(200, 200);
  ship.addAnimation('ship', shipAnimation);
  ship.scale = 0.5;
}
  

  
  

function draw() {
  background("blue");
  
  sea.velocityX = -2;

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}