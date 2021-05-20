const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sprites/sunset11.png" ;

function preload() {

    getBackgroundImg();
    //create getBackgroundImg( ) here
    //backgroundImg = loadImage("sunrise1.png");
    //backgroundImg = loadImage("sunrise2.png");
    //backgroundImg = loadImage("sunrise3.png");
    //backgroundImg = loadImage("sunrise4.png");
    //backgroundImg = loadImage("sunrise5.png");
    //backgroundImg = loadImage("sunrise6.png");
    //backgroundImg = loadImage("sunrise7.png");
    //backgroundImg = loadImage("sunrise8.png");
    //backgroundImg = loadImage("sunrise9.png");
    //backgroundImg = loadImage("sunrise10.png");
    //backgroundImg = loadImage("sunrise11.png");
    //backgroundImg = loadImage("sunrise12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add

    if (backgroundImg = "sunrise1.png"){ 
    noStroke();
    textSize(35);
    fill("white");
    text("Time : 6:30 am" , width-300, 50);
    }

    if (backgroundImg = "sunrise2.png"){ 
    noStroke();
    textSize(35);
    fill("white");
    text("Time : 8:00 am" , width-300, 50);
    }

    if (backgroundImg = "sunrise3.png"){ 
    noStroke();
    textSize(35);
    fill("white");
    text("Time : 9:30 am" , width-300, 50);
    }

    if (backgroundImg = "sunrise4.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 10:30 am" , width-300, 50);
    }

    if (backgroundImg = "sunrise5.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 11:30 am" , width-300, 50);
    }
   
    if (backgroundImg = "sunrise6.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 12:30 pm" , width-300, 50);
    }

    if (backgroundImg = "sunset7.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 14:30 pm", width-300, 50);
    }

    if (backgroundImg = "sunset8.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 16:30 pm" , width-300, 50);
    }

    if (backgroundImg = "sunrise9.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 17:30 pm" , width-300, 50);
    }

    if (backgroundImg = "sunrise10.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 18:30 pm" , width-300, 50);
    }

    if (backgroundImg = "sunrise11.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 20:00 pm" , width-300, 50);
    }

    if (backgroundImg = "sunrise12.png"){
    noStroke();
    textSize(35);
    fill("white"); 
    text("Time : 1:00 am" , width-300, 50);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=07){
    backgroundImg = "sprites/sunrise1.png";
    }

    if(hour>=07 && hour<=09){
    backgroundImg = "sprites/sunrise2.png";
    }
    
    if(hour>=09 && hour<=10){
    backgroundImg = "sprites/sunrise3.png";
    }

    if(hour>=10 && hour<=11){
    backgroundImg = "sprites/sunrise4.png";
    }

    if(hour>=11 && hour<=12){
    backgroundImg = "sprites/sunrise5.png";
    }

    if(hour>=12 && hour<=13){
    backgroundImg = "sprites/sunrise6.png";
    }

    if(hour>=13 && hour<=16){
    backgroundImg = "sprites/sunset7.png";
    }

    if(hour>=16 && hour<=17){
    backgroundImg = "sprites/sunset8.png";
    }

    if(hour>=17 && hour<=18){
    backgroundImg = "sprites/sunset9.png";
    }

    if(hour>=18 && hour<=19){
    backgroundImg = "sprites/sunset10.png";
    }

    if(hour>=19 && hour<=21){
    backgroundImg = "sprites/sunset11.png";
    }

    if(hour>=21 && hour<=06){
    backgroundImg = "sprites/sunset12.png";
    }
    
    console.log (backgroundImg);

    backgroundImg = loadImage(bg);

  bg.display();
}
