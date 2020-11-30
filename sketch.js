const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var options = {
  isStatic : true
}


ground = Bodies.rectangle(200,390,400,20,options);
World.add(world,ground);
console.log(ground);

var ball_option = {
  restitution : 1.0
}

ball = Bodies.circle(200,100,20,ball_option);
World.add(world,ball);


}

function draw() {
  background(0);
  
  Engine.update(engine)
  rectMode(CENTER);
  fill("brown");

  rect(ground.position.x,ground.position.y,400,20);
  
  fill("blue");
  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
}