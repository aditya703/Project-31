const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var gameState = "onSling";
var score = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 390, width, 20);
  platform1 = new Ground(400, 300, 250, 10);
  platform2 = new Ground(650, 200, 180, 10);
  block1 = new Block(600, 190);
  block2 = new Block(630, 190);
  block3 = new Block(660, 190);
  block4 = new Block(690, 190);
  block5 = new Block(615, 130);
  block6 = new Block(645, 130);
  block7 = new Block(675, 130);
  block8 = new Block(630, 100);
  block9 = new Block(660, 100);
  block10 = new Block(645, 50);

  block11 = new Block(330, 280);
  block12 = new Block(360, 280);
  block13 = new Block(390, 280);
  block14 = new Block(420, 280);
  block15 = new Block(450, 280);
  block16 = new Block(480, 280);
  block17 = new Block(360, 230);
  block18 = new Block(390, 230);
  block19 = new Block(420, 230);
  block20 = new Block(450, 230);
  block21 = new Block(390, 180);
  block22 = new Block(420, 180);
  block23 = new Block(405, 130);

  polygon = new Polygon(100, 200, 30);

  string = new SlingShot(polygon.body, {x:100, y:200})

}

function draw() {
  background(235); 
  Engine.update(engine); 

  textSize(24);
  text("Score: " + score, 650, 20);

  ground.display();
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();

  polygon.display();
  string.display();

  drawSprites();
}

function mouseDragged(){
  if(gameState === "onSling")
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  string.fly();
  gameState = "Flying";
}

function keyPressed(){
  if(keyCode === 32){
    string.attach(polygon.body);
    Matter.Body.setPosition(polygon.body, {x:100, y:200});
    gameState = "onSling";
  }
}