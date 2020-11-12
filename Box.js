class Block{
  constructor(x, y){
    var options = {
        friction:1.5,
        density:1.0
    }

    this.width = 30;
    this.height = 40;
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var Pos = this.body.position;
    if(this.body.speed < 4){
    push();
    translate(Pos.x, Pos.y);
    rotate(angle);
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect(0, 0, this.width, this,height);
      pop();
    }
  }
  score(){
    if(this.Visibility > 0 && this.Visibility < 105){
      score++
    }
  }
}

