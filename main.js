img=""

function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,430)
    canvas.center();
    
}
function draw(){
    image(img,0,0, 640,430);
    fill('#000000');
    text('Dog',200,50 );
    noFill();
    stroke('#ff0000');
    rect(50,60,550,500)
}