let bg;
let melt;
let resized;
let locked;

function preload() {
  bg = loadImage("bg.png");
  sun = loadImage("sun.png");
  melt1 = loadImage("1.png");
  melt2 = loadImage("2.png");
  melt3 = loadImage("3.png");
  melt4 = loadImage("4.png");
  melt5 = loadImage("5.png");
  melt6 = loadImage("6.png");
  melt7 = loadImage("7.png");
  melt8 = loadImage("8.png");
  melt9 = loadImage("9.png");
  melt10 = loadImage("10.png")
}

function setup() {
let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
melt = 0;
resized = 100;
   imageMode(CENTER)
  
    input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

  
function greet() {
  const password = input.value(); 
   if (password == 3259) {
      greeting.html('Congratulations! Puzzle #Noun661  Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}

function mousePressed() {
   if (overSun) {   
   if (melt <10) {
    melt += 1;
    resized = 100 + 15*melt;
  } else {
  } 
}}

function draw() {
  image(bg, 300, 300, 600, 600);
  image(sun, 300, 0,resized,resized)
  
  if (
    mouseX > 280 &&
    mouseX < 320 &&
    mouseY > 0 &&
    mouseY < 40
  ) {
    overSun = true;
    if (!locked) {}
  } else {
    overSun = false;
  }
  
if (melt ==1) 
   { image(melt1, 300, 300, 600, 600)}
  
if (melt ==2) 
   { image(melt2, 300, 300, 600, 600)}
  
if (melt ==3) 
   { image(melt3, 300, 300, 600, 600)}
  
if (melt ==4) 
   { image(melt4, 300, 300, 600, 600)}
  
if (melt ==5) 
   { image(melt5, 300, 300, 600, 600)}
  
if (melt ==6) 
   { image(melt6, 300, 300, 600, 600)}
  
if (melt ==7) 
   { image(melt7, 300, 300, 600, 600)}
  
if (melt ==8) 
   { image(melt8, 300, 300, 600, 600)}
  
if (melt ==9) 
   { image(melt9, 300, 300, 600, 600)}
  
if (melt ==10) 
   { image(melt10, 300, 300, 600, 600)}
    
 image(sun, 300, 0,resized,resized)
}
