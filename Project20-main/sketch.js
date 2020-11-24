var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(windowWidth,windowHeight);
  speed = random(20,140);
  weight = random(400,1500);
  wall = createSprite(windowWidth - 100, windowHeight/2, 50, height/2);
  car = createSprite(0, windowHeight/2, 30, 30);
  car.shapeColor = "white";
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500;


}

function draw() {
  background(0); 
  
  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    if(deformation<80){
      car.shapeColor = color(0,255,0);
    }
    else if(deformation < 180 && deformation > 80){
      car.shapeColor = color(230,230,0);
    }
    else{
      car.shapeColor = color(255,0,0);
    }

  }

  drawSprites();
}