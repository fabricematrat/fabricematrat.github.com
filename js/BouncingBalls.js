var context;
var x=40;
var y=50;

// Create balls of Specific Color, Size and speeds
function Ball(color, radius,dx,dy) {
this.canvas = canvas;
this.context = canvas.getContext('2d');
this.radius = radius;
this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.color = color;
}

Ball.prototype.Create = function () {
this.context.beginPath();
this.context.fillStyle = this.color;
this.context.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
this.context.fill();
}

Ball.prototype.Bounce = function () {
	if (this.x >= (canvas.width - this.radius) || this.x <= this.radius) this.dx *= -1;
	if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) this.dy *= -1;
}

function init() {
	canvas = document.getElementById("myCanvas")
	context = canvas.getContext('2d');
	// Create an arry to store the balls info
	balls = [];
	balls.push(new Ball('#ffFF10', 15,4,2));
	balls.push(new Ball('#ff0000', 30,1,3));
	balls.push(new Ball('#ff6600', 20,2,3));
	balls.push(new Ball('#AA9900', 10,3,4));
	balls.push(new Ball('#220011', 33,5,7));
	balls.push(new Ball('#F15501', 13,3,4));
	balls.push(new Ball('#779960', 20,4,4));
	balls.push(new Ball('#FFFFCC', 23,3,5));
	balls.push(new Ball('#330020', 19,1,4));
	balls.push(new Ball('#55FF09', 14,1,1));
	balls.push(new Ball('#FF8834', 13,7,6));
	balls.push(new Ball('#0000FF', 19,1,4));	
	balls.push(new Ball('#3723F1', 20,4,4));
	balls.push(new Ball('#A01806', 23,3,5));
	balls.push(new Ball('#A35020', 19,1,4));	
	balls.push(new Ball('#BB9960', 20,4,4));
	balls.push(new Ball('#CCCCCC', 13,3,5));
	balls.push(new Ball('#F15501', 19,1,4));	
	setInterval(draw,150);
}

function draw() {
	context.clearRect(0,0, 500,350);

	//for (i in balls) {
    for(var i=0; i< balls.length; i++) {
	balls[i].x += balls[i].dx;
	balls[i].y += balls[i].dy;
	// Boundary checking
	balls[i].Bounce();
	balls[i].Create();
	}
}