const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, lowerLevel, upperLevel, b1,b2,b3,b4,b5,b6,b7;
var b8,b9,b10,b11,b12,b13;
var b14,b15,b16,b17,b18;
var b19,b20,b21,b22;
var b23,b24,b25;
var b26,b27;
var b28;
var b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
var polygon, hexIMG, sling;


function preload(){
 hexIMG = loadImage("Hexagon.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,400,800,20);
  
  lowerLevel = new Ground(350,300,250,20);
  upperLevel = new Ground(650,200,200,20);
  
  b1 = new Box (250,275,30,30);
  b2 = new Box (280,275,30,30);
  b3 = new Box (310,275,30,30);
  b4 = new Box (340,275,30,30);
  b5 = new Box (370,275,30,30);
  b6 = new Box (400,275,30,30);
  b7 = new Box (430,275,30,30);
  //
  b8 = new Box (265,245,30,30);
  b9 = new Box (295,245,30,30);
  b10 = new Box (325,245,30,30);
  b11 = new Box (355,245,30,30);
  b12 = new Box (385,245,30,30);
  b13 = new Box (415,245,30,30);
  //
  b14 = new Box (280,215,30,30);
  b15 = new Box (310,215,30,30);
  b16 = new Box (340,215,30,30);
  b17 = new Box (370,215,30,30);
  b18 = new Box (400,215,30,30);
  //
  b19 = new Box (295,185,30,30);
  b20 = new Box (325,185,30,30);
  b21 = new Box (355,185,30,30);
  b22 = new Box (385,185,30,30);
  //
  b23 = new Box (310,155,30,30);
  b24 = new Box (340,155,30,30);
  b25 = new Box (370,155,30,30);
  //
  b26 = new Box (325,125,30,30);
  b27 = new Box (355,125,30,30);
  //
  b28 = new Box (340,95,30,30);
  
  ////

  b29 = new Box (580,175,30,30);
  b30 = new Box (610,175,30,30);
  b31 = new Box (640,175,30,30);
  b32 = new Box (670,175,30,30);
  b33 = new Box (700,175,30,30);
  //
  b34 = new Box (595,145,30,30);
  b35 = new Box (625,145,30,30);
  b36 = new Box (655,145,30,30);
  b37 = new Box (685,145,30,30);
  //
  b38 = new Box (610,115,30,30);
  b39 = new Box (640,115,30,30);
  b40 = new Box (670,115,30,30);
  //
  b41 = new Box (625,85,30,30);
  b42 = new Box (655,85,30,30);
  // 
  b43 = new Box (640,55,30,30);
  
  var options = {
    isStatic: false,
    restitution: 0.8,
    friction: 0.1,
    density: 1
  }
  
  polygon = Bodies.circle(50,200,20,options);
  
  
  World.add(world,polygon);
  
  sling = new Slingshot(this.polygon,{x:50, y:200});

}



function draw() {
  background(100);  
  Engine.update(engine);
  
  imageMode(CENTER);
  image(hexIMG,polygon.position.x,polygon.position.y,40,40)
  
  //text(mouseX + "," + mouseY, mouseX, mouseY);
  
  ground.display();
  lowerLevel.display();
  upperLevel.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  ////
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
  b41.display();
  b42.display();
  b43.display();
  //b44.display();
  //b45.display();
  //b46.display();
  //b47.display();
  //b48.display();
  //b49.display();
  //b50.display();
  sling.display();
  
  
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.polygon);
  }
}