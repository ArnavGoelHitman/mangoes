
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;
var stone;


function preload()
{
	boyImage  = loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400,500,50,50);
	stone = new Stone(235,420,20,20);
	
	ground = new Ground(width/2,600,width,10);
	World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  stone.display();
  ground.display();
 
  
  drawSprites();
 
}



