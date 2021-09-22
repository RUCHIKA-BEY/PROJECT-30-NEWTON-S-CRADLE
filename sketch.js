
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1, sling1, sling2, sling3, sling4, sling5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(300,350,50);
    bob2=new Bob(350,350,50);
    bob3=new Bob(400,350,50);
    bob4=new Bob(450,350,50);
    bob5=new Bob(500,350,50);
    
	roof1 = new Roof(400,100,300,40);
	sling1= new Rope(bob1.body,roof1.body,-50*2,0);
	sling2= new Rope(bob2.body,roof1.body,-25*2,0);
	sling3= new Rope(bob3.body,roof1.body,-0*2,0);
	sling4= new Rope(bob4.body,roof1.body,25*2,0);
	sling5= new Rope(bob5.body,roof1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  keyPressed();
  drawSprites ();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


