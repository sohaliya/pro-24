
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paperObj;
var ground; 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,670,1200,20)
	box1 = new Box(1000,650,200,20);
    box2 = new Box(910,610,20,100);
	box3 = new Box(1090,610,20,100);
	paperObj = new Paper(50,650,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paperObj.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}

