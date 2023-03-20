function preload(){
  images1=loadImage("images/Picture11.png")
}


function setup() {
  createCanvas(400, 400);
sprite1=createSprite(100,90,10,10)
sprite1.addImage(images1)
}

function draw() {
  background("black");

drawSprites()
}