const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var drops = [];
function preload(){
    
}

function setup(){
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
    
  umbrella = new Umbrella(200,500)
//creating drops 
if(frameCount% 150 === 0){
  for(var i = 0; i<100; i++){
    drops.push(new Drop(random(0,400),random(0,400)))
  }
}

}

function draw(){
  background(0)
  
  Engine.update(engine);

  umbrella.display();

  for(var i = 0; i<100; i++){
    drops[i].display()
    drops[i].updateY()
  }
  
drawSprites();
  
}

 


