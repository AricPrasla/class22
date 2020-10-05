const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;
var sphere;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

ball = Bodies.rectangle(400,200,50,50);
World.add(world, ball);
var options = {
  isStatic: true
}
ground = Bodies.rectangle(300,550,600,50,options);
World.add(world, ground);
  var options = {
  restitution: 1.0
}
sphere = Bodies.circle(100,200, 20, options);
World.add(world, sphere);
console.log(ball.position.x);
console.log(ball.position.y);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y, 50,50);
  rect(ground.position.x,ground.position.y, 600,50);
  ellipseMode(CENTER);
  ellipse(sphere.position.x,sphere.position.y, 20);
  drawSprites();
}