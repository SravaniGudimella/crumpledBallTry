const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin1, dustbin2, dustbin3;
var paper,ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);

	 
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(400, 500,5);
	ground = new Ground(400,580,600,20);
	box1 = new Box(680, 650, 100,20);
	box2= new Box(620, 635, 20,50);
	box3= new Box(720, 635,20,50);

}


function draw(){
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  console.log("bye")
 box1.display();
  box2.display();
  box3.display();
}
/*function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:-85});
	   
	 }
}
*/