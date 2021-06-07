

function preload() {
 
  
  bgImg= loadImage(" bg.jpg")
  cbImg = loadImage("cb-removebg-preview.png")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width/2, height/2)
  bg.addImage(bgImg)
  bg.scale = 1.3
  
  cowboy = createSprite(150, height-150)
  cowboy.addImage(cbImg)
}

function draw() {
  background("yellow");
  

  drawSprites()
}