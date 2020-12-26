//Create variables here
var dog,happyDog,foods,foodStock,database,dogImage,happyDogImage

function preload()
{
  //load images here
  dogImage=loadImage("dog.png")
  happyDogImage=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImage)
  dog.scale=0.1
  database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  stroke ("black")
  text("food remaining:"+foods,250,50)
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDogImage);
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImage)
  }

  drawSprites();
  //add styles here
  

}
function readStock(data)
{
  foods=data.val();

}
function writeStock(x)
{
  if(x<=0){
    x=0;

  }else{
    x=x-1;
  }

  database.ref('/').update({
food:x
  })
}







