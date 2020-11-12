class Polygon{
    constructor(x, y, radius){
      var options = {
          friction:1.5,
          density:5.0
      }
  
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var Pos = this.body.position;
      push();
      translate(Pos.x, Pos.y);
      rotate(angle);
      fill("green");
      imageMode(CENTER);
      circle(0, 0, this.radius);
      pop();
    }
  }