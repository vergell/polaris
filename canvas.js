var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// var pi circle
var pCircle = Math.PI * 2;
// Random Integer Generator
function getRandomInt(min, max){
   min = Math.ceil(min);
   max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// object 
function object( x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.distance = getRandomInt(53, innerHeight);
    this.radians = (Math.random() * Math.PI *2);
    this.velocity = 0.003;
    //draw 
    this.draw = function(){
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, pCircle, false);
        c.fillStyle = 'white';
        c.fill();
    }
    this.update = function(){
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distance;
        this.y = y + Math.sin(this.radians) * this.distance;

        this.draw();
    }
}
//objectArray
var objectArray = [];
//Init
function init(){
    //Initialize objects
    for (let i = 0; i < 400; i++) {
        var radius = getRandomInt(1 , 3);
        objectArray.push(new object( innerWidth/2, innerHeight/2, radius));
    }
}
//animate
function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba( 0, 0, 0, 0.05)';
    c.fillRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].update();
    }
}
init();
animate();