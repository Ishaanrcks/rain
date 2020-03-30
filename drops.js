class drops{
  constructor(){
      var ch=random(0,400)
      var options={
        density:'0.1'


      }
      this.body=Bodies.circle(ch,-50,20,options)
      this.x=ch
      this.image = loadImage("drops.png");
      this.y=-50;
      World.add(world, this.body);
     }
     display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

     }

}