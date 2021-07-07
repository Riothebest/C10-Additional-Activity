var ghost, ghostImg;

function preload() {
ghostImg = loadAnimation("ghost1.png", "ghost2.png", "ghost2.png");
}

function setup(){
  createCanvas(400,300)

  // Creating the ghost
  ghost = createSprite(250, 130, 20, 40);
  ghost.addAnimation("g", ghostImg);
}

function draw(){
  background(220);
  drawSprites();
}