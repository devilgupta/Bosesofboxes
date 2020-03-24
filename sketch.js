const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function preload() {
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options={
        isStatic:true,
    }
    ground=Bodies.rectangle(200,390,400,20,options);
    World.add(world,ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    text("press space to have boxes",100,100);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    if(keyCode===32){
        var box;
        box=Bodies.rectangle(random(100,300),200, random(10,50), random(10,50));
        World.add(world.box);
        rectMode(CENTER);
        rect(box.position.x,box.position.y,random(10,50), random(10,50));
    }
}