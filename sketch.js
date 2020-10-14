var dog, happyDog, database
var foodS, foodStock

function preload()
{
 //dog = loadImage("dogImg.png");
 //happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(200, 200, 20, 20);
  //dog.addImage(dog);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
 background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 // dog.addImage(happyDog);

}



  drawSprites();
  text("Note: Press UP_ARROW Key To Feed Drago Milk", 200, 50);

}

function readStock(data){
  food = data.val();
}

function writeStock(x){
  
  database.ref('/').update({
    Food:x
  })
}

