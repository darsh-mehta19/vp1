//Create variables here
var dog,happyDog,himg,dimg;
var database;
var foodS,foodStock;
function preload()
{
  dimg = loadImage("dogImg.png");
  himg = loadImage("dogimg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(150,250);
  dog.addImage(dimg);
  dog.scale=0.5;
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(himg);
  }
  if(keyWentUp(UP_ARROW)){
   // writeStock(foodS);
   dog.addImage(dimg);
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill(255,0,190);
  stroke(4);
  text(foodS,450,50);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


