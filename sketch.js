function setup() {
  createCanvas(400,400);
  fixedSprite = createSprite( 200 , 300 , 50 , 60);
  fixedSprite.shapeColor= "green"
  fixedSprite.debug = true
  movingSprite = createSprite( 100 , 350 , 70 , 100);
  movingSprite.shapeColor= "green"
  movingSprite.debug = true
}

function draw() {
  background("yellow");  
  drawSprites();
  movingSprite.x= mouseX;
  movingSprite.y= mouseY;

  console.log(movingSprite.x)

  if(movingSprite.x-fixedSprite.x < movingSprite.width/2 + fixedSprite.width/2  &&
    fixedSprite.x-movingSprite.x < movingSprite.width/2 + fixedSprite.width/2 && 
    movingSprite.y-fixedSprite.y < movingSprite.height/2 + fixedSprite.height/2  &&
    fixedSprite.y-movingSprite.y < movingSprite.height/2 + fixedSprite.height/2 ) {
    fixedSprite.shapeColor= "red"
    movingSprite.shapeColor= "red"
  }
  else {
    fixedSprite.shapeColor= "green"
    movingSprite.shapeColor= "green"
  }
}