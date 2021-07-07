const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg=loadImage("sunrise1.png","sunrise2.png","sunrise3.png",
    "sunrise4.png","sunrise5.png","sunrise6.png","sunset7.png","sunset8.png",
    "sunset9.png","sunset10.png","sunset11.png","sunset12.png");
    //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    //getTime();
    getBackgroundImg();

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON= await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=01 && hour<=02 ){
        bg = "sunset11.png";
    }else if(hour>=03 && hour<=04){
        bg = "sunrise1.png";
    }else if(hour>=05 && hour<=06){
        bg = "sunrise2.png";
    }else if(hour>=07 && hour<=08) {
        bg = "sunrise3.png";
    }else if(hour>=09 && hour==10){
        bg = "sunrise4.png";
    }else if(hour>=11 && hour<=12){
        bg = "sunrise5.png";
    }else if(hour>=13 && hour<=14){
        bg = "sunrise6.png";
    }else if(hour>=15 && hour<=16){
        bg = "sunset7.png";
    }else if(hour>=17 && hour<=18){
        bg = "sunset8.png";
    }else if(hour>=19 && hour<=20){
        bg = "sunset9.png";
    }else if(hour>=21 && hour<=22){
        bg = "sunset10.png";
    }else{
        bg = "sunset11.png";
    }
    backgroundImg = loadImage(bg);

    //load the image in backgroundImg variable here
    console.log(hour);

}
