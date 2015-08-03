
var angle = 0;
var canvas = null;
var bgImage = null;
var spriteImage = null;

function onDraw() {
	var x = 0;
	var y = 0;
	var w = canvas.width;
	var h = canvas.height;
	var ctx = canvas.getContext("2d");

	if(bgImage) {
		ctx.drawImage(bgImage, 0, 0);
	}
	else {
		ctx.fillStyle = "Gold";
		ctx.fillRect(0, 0, w, h);
	}

	angle += 0.01;
	x = w >> 1;
	y = h >> 1;

	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(angle);
	ctx.translate(-x, -y);
	
	if(spriteImage) {
		x = (w - spriteImage.width) >> 1;
		y = (h - spriteImage.height) >> 1;
		ctx.drawImage(spriteImage, x, y);	
	}
	else {
		x = (w - 200) >> 1;
		y = (h - 200) >> 1;
		ctx.strokeStyle = "Green";
		ctx.lineWidth = 1;
		ctx.rect(x, y, 200, 200);
		ctx.stroke();
	}
	ctx.restore();

	canvas.flush();

	CantkRT.requestAnimFrame(onDraw);
}

function onDeviceReady() {
	canvas = CantkRT.getMainCanvas();
	CantkRT.createImage("bg.jpg", function(img) {
		bgImage = img;
	});

	CantkRT.createImage("text.png", function(img) {
		spriteImage = img;
	});

	canvas.width = 480;
	canvas.height = 800;

	CantkRT.requestAnimFrame(onDraw);

	var audio = CantkRT.createSoundMusic("bg.mp3");
	audio.play();

	return;
}

CantkRT.init(onDeviceReady);

