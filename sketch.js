var sufer,sufer_running
var road
var Invisibleleft,Invisibleright

function preload(){
  //pre-load images
  sufer_running = loadAnimation("Runner-1.png", "Runner-2.png")
  roadImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
   road=createSprite(200,200)
   road.addImage("road", roadImage)
   road.velocity.y=4

   Invisibleleft= createSprite(0,400,20,800)
   Invisibleleft.visible=false
   Invisibleright= createSprite(400,400,20,800)
   Invisibleright.visible=false

   sufer = createSprite(200,160,20,50)
   sufer.addAnimation("sufer" , sufer_running)
   

}

function draw() {
  background("black");
  
if(road.y > 400){
  road.y = height/2;
}

  sufer.x=World.mouseX;

sufer.collide(Invisibleright)
sufer.collide(Invisibleleft)


drawSprites()

}
