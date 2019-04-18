
let x;
let y;
//point = [];
let point;
let speed;
let proximity;


function setup(){
createCanvas(1200, 800);


//for(let i = 0; i<200; i++){
//
//point.push(new Points(random(0,1200), random(0,800)));
//
//}





}

function draw(){

background(150);
//for(let i = 0; i<point.length; i++){
//
//point[i].display();
//
//}
point = new Points(random(0,1200), random(0,800), 0.02, 50);

point.display();
point.update();


}

class Points{

constructor(x, y, speed, proximity){
this.x = x;
this.y = y;
this.speed = speed;
this.proximity = proximity;
this.xoff = random(5000);
this.yoff = random(5000);

}

display(){

fill(150,30,100,50);
noStroke();
ellipse(this.x, this.y, 10,10);

}

update(){
this.x = noise(this.xoff) * (height);
this.x +=width/4;
this.xoff += this.speed;
this.y = noise(this.yoff) * (height);
this.yoff +=this.speed;

}

}