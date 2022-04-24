const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var seeker
function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);



  wall1=new Wall(10,70,100,20);
  wall2=new Wall(100,50,20,100);
  wall3=new Wall(80,130,100,20);
  wall4=new Wall(50,250,20,100);

  wall5=new Wall(130,210,100,20);
  wall6=new Wall(10,250,100,20);
  wall7=new Wall(160,120,20,100);
  wall8=new Wall(150,20,100,20);
  wall9=new Wall(250,70,20,100);
  wall10=new Wall(270,150,100,20);

  wall11=new Wall(330,50,100,20);
  wall12=new Wall(340,125,20,100);

  wall13=new Wall(220,250,20,100);
  wall14=new Wall(330,210,150,20);
  wall15=new Wall(100,300,20,100);
  wall16=new Wall(180,310,100,20);

  wall17=new Wall(30,352,20,100);
  wall18=new Wall(175,352,20,100);
  wall19=new Wall(280,290,20,100);
  wall20=new Wall(350,270,120,20);
  wall21=new Wall(250,390,100,20);
  wall22=new Wall(330,370,20,100);
  
  var options={
    isStatic:true
  }
  
  seeker=Bodies.rectangle(200,200,10,10,options);
  World.add(world,seeker);

}

function draw(){
background("lightBlue");

rect(200,200,10,10);

if(keyDown(RIGHT)){
  seeker.x=seeker.x+3
}
if(keyDown(LEFT)){
  seeker.x=seeker.x-3
}

Engine.update(engine);
wall1.show();
wall2.show();
wall3.show();
wall4.show();
wall5.show();
wall6.show();
wall7.show();
wall8.show();
wall9.show();
wall10.show();
wall11.show();
wall12.show();
wall13.show();
wall14.show();
wall15.show();
wall16.show();
wall17.show();
wall18.show();
wall19.show();
wall20.show();
wall21.show();
wall22.show();


}