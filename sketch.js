var dog, dogImg, happyDog, foodS, foodStock, database;

function preload(){
 dogImg=loadImage('images/dogImg.png');
 happyDog=loadImage('images/dogImg1.png');
}

function setup() {
 createCanvas(500,500);
 database=firebase.database()
 dog=createSprite(220,220,20,30);
 dog.addImage(dogImg);
 dog.scale=0.2;
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
}


function draw(){  
 background(46,139,87);
 if (keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog);
 }
 text("Food remaining="+foodS,160,120);
 textSize(17);
 fill("purple");
 stroke("blue");
 drawSprites();
}

function readStock(data){
 foodS=data.val();
}

function writeStock(x){
 database.ref('/').update({
   Food:x
 })
}


