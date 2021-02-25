var fixedRect, movingRect;
var box1,box2,box3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(100,100,50,100)
  box1.shapeColor="blue"
  box1.debug=true;
  box2=createSprite(200,100,50,100)
  box2.shapeColor="violet"
  box2.debug=true
  box3=createSprite(300.100,50,100)
  box3.shapeColor="orange"
  box3.debug=true;
}

function draw(){
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){ 
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(isTouching(movingRect,box1)){ 
    movingRect.shapeColor = "yellow";
    box1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    box1.shapeColor = "blue";
  }
  if(isTouching(movingRect,box2)){ 
    movingRect.shapeColor = "yellow";
    box2.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    box2.shapeColor = "violet";
  }
  if(isTouching(movingRect,box3)){ 
    movingRect.shapeColor = "yellow";
    box3.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    box3.shapeColor = "orange";
  }
   drawSprites();
}