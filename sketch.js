var numbers = [15, 22, 48, 37];
var habits = ["Hunger Games", "Katniss", "District 12", "Peeta", "Effie", "District 13", "President Snow", "Prim", "Hamitch"];
var w = ["BOLD", "ITALIC", "NORMAL"];
var j = 0;
var bon = 40;
var hi = 0;
var we = 10;
var bye = 150;

function setup(){
    createCanvas(600,400);
    p1 = new Pacman(200, 180);
}

function draw(){
    
   
    p1.display();
    p1.move();
    p1.boundary();
    noCursor();
    fill
    fill(0, 12);
  rect(0, 0, width, height);
      fill(255, 0 ,0);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
  fill(255)
  for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,200,numbers[i],numbers[i]);
    }
    
if(keyIsDown(UP_ARROW)){
    bon = bon + 1;
    if(bon >= 55){
        bon = 55;
    }
}
if(keyIsDown(DOWN_ARROW)){
    bon -= 1;
    if(bon <= 5){
        bon = 5;
    }
}

   
   fill(255);
   textSize(bon);
   textAlign(CENTER);
   textStyle(BOLD);
   strokeWeight(1);
   text(habits[j], 220, 150);
}

function mousePressed(){
    j += 1;
    if(j == habits.length){
        j = 0;
    }
}

function Pacman(x, y){
    this.x = x;
    this.y = y;
    this.radB = 30;
    this.radT = 305;
    this.rotation = 0;
    this.display = function(){
        fill(255, 255, 0);
        //ellipse(this.x, this.y, 40, 40); 
        arc(this.x, this.y,40 , 40, radians(this.radB + this.rotation), radians(this.radT + this.rotation), PIE);
    }
    this.move = function(){
        if(keyIsDown(UP_ARROW)){
            this.y -= 2;
            this.rotation = 280;
            hi = hi + 10;
            we = we - 10;
             
          
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += 2;
            this.rotation = 100;
            we = we + 10;
            hi = hi - 10;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 2;
            this.rotation = 0;
            bye = bye + 5;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.x -= 2;
            this.rotation = 190;
            bye = bye - 5;
        }
    };
    this.boundary = function(){
        if(this.x > width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = width;
        }
        if(this.y > height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
    }
}