var Dustbin1, dustbin2, dustbin3;
var packageBody,ground
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);

	box1=createSprite(600, 650, 100,20);
	box2=createSprite(700, 610, 20,50);
	box3=createSprite(800, 610,20,50);
    box1.shapeColor = color ("red");
    box2.shapeColor = color ("red");
    box3.shapeColor = color ("red");
   
	paperBall=createSprite(width/2, 80, 10,10);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,800,20)
	
	paperBall = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = Bodies.rectangle(450, 650, 200, 20 , {isStatic:true} );
	 World.add(world, box1);

	 box2 = Bodies.rectangle(350, 610, 20, 100 , {isStatic:true} );
	 World.add(world, box2);

	 box3 = Bodies.rectangle(350, 610, 20, 100 , {isStatic:true} );
	 World.add(world, box3);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.Body,paperBall.Body.position,{x:85,y:-85});
	   
	 }
}
