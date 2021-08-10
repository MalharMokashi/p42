var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  bullet = createSprite(gun.position.x,gun.position.y-100,50,50);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;

  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  
    bullet.y = mouseY;

    shootBullet();
    drawBlueBubble();
    drawRedBubble();
    drawSprites();
  }
     
}
function drawRedBubble()
{
  if(frameCount%100 === 0)
  {
    redBubble = createSprite(800,random(20,780),40,40);
    redBubble.addImage(redBubbleImg);
    redBubble.scale = 0.1;
    redBubble.velocityX = -5;
    redBubble.lifetime = 400;
    redBubbleGroup.add(redBubble); 
  }
  
  
}
function drawBlueBubble()
{
  if(frameCount%200 === 0)
  {
    blueBubble = createSprite(1000,random(20,700),40,40);
    blueBubble.addImage(blueBubbleImg);
    blueBubble.scale = 0.1;
    blueBubble.velocityX = -8;
    blueBubble.lifetime = 400;
    blueBubbleGroup.add(blueBubble); 
  }
  
  
}
function shootBullet()
{
  if(keyDown("SPACE"))
  {
    bullet.velocityX = 8;
  }
}