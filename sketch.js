const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop=[]
var maxDrops = 100
var thunder1,thunder2;
var rand

function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
if (frameCount %150 === 0){
    for (var i=0; i<maxDrops; i++){
        drop.push(new Drop(random(0,400),random(0,700)));
    }
}
  
    
   
}
function Spawnthunder() {

  if(frameCount % 80===0) {
   //thunderCreatedFrame=frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   var rand = Math.round(random(1,2))
    switch(rand){
           
      case 1:thunder.addImage(thunder1);
      break;
      case 2:thunder.addImage(thunder2);
      break;
      default: break;
    }
    thunder.scale = 0.5
    thunder.lifetime = 50
    }
  }




function draw(){

    Engine.update(engine)
    
    background("black")
   

    for (var i=0; i<maxDrops; i++){
       drop[i].display()
       drop[i].updateY()
    }
    
   Spawnthunder();
    drawSprites()


}
