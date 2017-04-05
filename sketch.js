var numbers = [15, 22, 48, 37];
var habits = ["People keep stoppin' me", "People, they're noticin' somethin' is different", "Everything's different 'bout me", "I was just mindin' my" ,"business", "When I saw the light, somethin' is different", "Everything's different this time", "Don't stop", " takin' all of my time,", "make it all yours", "Keep on,", "cause my heart likes the rush", "So please give me more, more, more, more", "Boy, this is crazy", "'cause ya' came out of thin air", "You must be magic", "Whatcha doin',", "it ain't there", "Oh, oh, oh, oh (yep!)", "Oh, oh, oh, oh (yep!)", "You got that perfect time", "and baby", "And I swear our chemistry is glowin'", "Made the whole world stare", "Oh, oh, oh, oh (yep!)(1)", "Oh, oh, oh, oh (yep!)(2)", "Boy, you came out of thin air," , "thin air, thin air" , "Like you always been there,", "been there, been there", "Before you, I didn't care," , "I didn't care, I didn't care", "You came out of thin air,", "you came out of thin air", "I want", "gold with your love", "I won't" , "ever give you up", "Pull me in closer", "Not scared to admit", "I want your touch", "Your voice", "is a symphony", "Singin'", "sweet melodies", "Pull me in closer", "'Cause when my world's over, ya' got me", "Don't stop", "takin' all of my time, make it all yours", "Keep on, ", "'cause my heart likes the rush", "So please give me more,", "more, more, more", "Boy, this is crazy", "'cause ya' came out of thin air", "You must be magic", "Whatcha doin', it ain't there", "Oh, oh, oh, oh (yep!)(1)", "Oh, oh, oh, oh (yep!)(2)", "You got that perfect time", "and baby; And I swear", "our chemistry is glowin'", "Made the whole world stare", "Oh, oh, oh, oh (yep!)(1)", "Oh, oh, oh, oh (yep!)(2)", "Boy, you came out of thin air", "thin air, thin air", "Like you always been there", "been there, been there", "Before you, I didn't care,", "I didn't care, I didn't care", "You came out of, thin air,", "you came out of thin air", "Oh!", "Like you checkin' on me", "Yeah, I've been watchin', too", "It's like you're just a diva", "You never knew", "I felt this, too", "But now we're here", "with nowhere left to hide", "The way you're lookin' at me,", "it's how I look at you", "Don't need space in between", "Just cut the tension right through", "Real soon,", "we can fly to thin air to check the view", "Ye-yeah!", "Boy, this is crazy " , "'cause ya' came out of thin air", "You must be magic", "Whatcha doin'", "it ain't there", "Oh, oh, oh, oh (yep!)(1)" , "Oh, oh, oh, oh (yep!)(2)", "You got that perfect time", "and baby; And I swear", "our chemistry is glowin'", "Made the whole world stare", "Oh, oh, oh, oh (yep!)(1)", "Oh, oh, oh, oh (yep!)(2)", "Boy, you came out of thin air", "thin air, thin air", "Like you always been there,", "been there, been there", "Before you, I didn't care,", "I didn't care, I didn't care", "Came out of thin air", "you came out of thin air", "THE END"];
var w = ["BOLD", "ITALIC", "NORMAL"];
var j = 0;
var bon = 40;
var hi = 0;
var we = 10;
var bye = 150;
var mySound;


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
    


   
   fill(255);
   textSize(27);
   textStyle(BOLD);
   strokeWeight(1);
   text(habits[j], 10, 100);
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