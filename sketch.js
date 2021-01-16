var movingrect, fixedrect;

function setup(){
  createCanvas(1200,800);
  movingrect=createSprite(300,400,50,30);
  movingrect.shapeColor="red";
  fixedrect=createSprite(200,300,60,60);
  fixedrect.shapeColor="red";

}
function draw(){
  background("black");
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&& 
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  drawSprites();
}