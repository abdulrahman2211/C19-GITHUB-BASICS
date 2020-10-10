var  PLAY = 1;
var  END = 0;
var gameState = 1;
var monkey, monkeyanimation1, stone, stoneimage, banana, bananaimage, bananaGroup, stoneGroup, ground, groundimage,back, backimage, score = 0

function preload() {
  backimage = loadImage("jungle.jpg");
  monkeyanimation1 = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  stoneimage = loadImage("stone.png");
  bananaimage = loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);
  var survivalTime = 0;
  monkey = createSprite(50, 320, 30, 30);
  monkey.addAnimation("tas", monkeyanimation1);
  monkey.scale = 0.2;
 ground = createSprite(0, 370, 800, 10);
}

function draw() {
  background(220);

 // if(stoneGroup.isTouching(monkey)){
    // monkey.scale = 0.2;
  // }
  if(gameState === PLAY){
  if(keyDown("space") && monkey.y >= 160 ){
    monkey.velocityY = -5;
  }
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
    survivalTime=Math.ceil(frameCount/frameRate()) 
    text("Survival Time: "+ survivalTime, 100,50);
  text("SCORE :" + score, 330, 50);
    if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
    }
  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    default:
      break;
  }
  
  //stoneGroup.add(stone);
  spawnbananaGroup();
  spawnstoneGroup();
  drawSprites();
}
}
function spawnbananaGroup() {
  if (frameCount % 300 === 0) {
    banana = createSprite(160, 300, 30, 30);
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -1;
    
    bananaGroup.add(banana);
  }
}

function spawnstoneGroup() {
  if (frameCount % 300 === 0) {
    stone = createSprite(290, 340, 30, 30);
    stone.addImage(stoneimage);
    stone.scale = 0.2;
    stone.velocityX = -1;
  }
}