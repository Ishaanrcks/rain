const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
function preload(){
 
 
  im=loadImage("drops.png");

}
function setup() {
  createCanvas(1200,400);


}

function draw() {
    background(255);
    
  drop=createSprite(random(0,1200),-10,20,20);
  drop.addImage(im);
  drop.scale=0.25
  drop.setVelocity(0,random(1,4));
  drop.depth=drop.depth+90;
    drawSprites();
    

}