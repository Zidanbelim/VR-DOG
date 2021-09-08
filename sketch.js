//Create variables here

var dog;
var happyDog;
var databse;
var foodS;
var foodStock

function preload()
{
	//load images here
  dogAnimation=loadImage("images/Dog1.png");
  happyAnimation=loadImage("images/happydog.png.");

}

function setup() {

   foodStock=database.ref('Food');
   foodStock.on("value",readStock)

	createCanvas(500, 500);

  dog=CreateSprite(250,250,20,20);
  dog.addImage(dogImage)

text("NOTE:PRESS UP_ARROW KEY TO FEED DRAGO MILK",150,150);
textSize(10);
fill("white");
stroke("white")

}


function draw() {  
background(46,139,87);
if(keyWentUP(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImage)

}

  drawSprites();
  //add styles here


}
   function readStock(){
    foodS=data.val();

   }

function writeStock(x){

  if (x<=0){
      x=0;

  }else{

    x=x-1;

  }

  database.ref('/').update({
  Food:x
  })
}



