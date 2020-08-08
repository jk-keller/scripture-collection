//
// created by A Nonlethal Jerk, dilettante coder
//

//
// TO DO:
//

var colCyan = new CMYKColor;
	colCyan.cyan = 100;
	colCyan.magenta = 0;
	colCyan.yellow = 0;
	colCyan.black = 0;
var colMagenta = new CMYKColor;
	colMagenta.cyan = 0;
	colMagenta.magenta = 100;
	colMagenta.yellow = 0;
	colMagenta.black = 0;
var colyellow = new CMYKColor;
	colyellow.cyan = 0;
	colyellow.magenta = 0;
	colyellow.yellow = 100;
	colyellow.black = 0;
var colBlack = new CMYKColor;
	colBlack.cyan = 0;
	colBlack.magenta = 0;
	colBlack.yellow = 0;
	colBlack.black = 100;
var colGreen = new CMYKColor;
	colGreen.cyan = 100;
	colGreen.magenta = 0;
	colGreen.yellow = 100;
	colGreen.black = 0;
var colPurple = new CMYKColor;
	colPurple.cyan = 100;
	colPurple.magenta = 100;
	colPurple.yellow = 0;
	colPurple.black = 0;
var colOrange = new CMYKColor;
	colOrange.cyan = 0;
	colOrange.magenta = 100;
	colOrange.yellow = 100;
	colOrange.black = 0;

var selRef = activeDocument.selection;

var doc = app.documents[0];
doc.defaultStrokeWidth = .25;
doc.defaultStrokeCap = StrokeCap.ROUNDENDCAP;
var layr = doc.layers.add();

var grid = [];
var gridXs = 30;
var gridYs = 40;
var gridWH = 20;

for (i=0; i<gridYs; i++) {
	var tempXs = [ 1 ];
	for (j=0; j<gridXs-2; j++) {
		if (i === 0 || i === gridYs-1) {
			tempXs.push(1);
		} else {
			tempXs.push(0);
		}
	}
	tempXs.push(1);
	grid.push(tempXs)
}

for (i=0; i<20; i++) {
	var signX = 1;
	var start_x = Math.floor(Math.random()*(gridXs-4))+2;
	if (Math.random() < .5) { signX = -1; };
	var end_x   = start_x + signX;
	var signY = 1;
	var start_y = Math.floor(Math.random()*(gridYs-4))+2;
	if (Math.random() < .5) { signY = -1; };
	var end_y   = start_y + signY;


	if (grid[start_y][start_x] == 1 || grid[end_y][start_x] == 1 || grid[end_y][end_x] == 1) {

	} else {
		var line = layr.pathItems.add();
		line.stroked = true;
		line.filled = false;
		line.strokeWidth = .25;

		grid[start_y][start_x] = 1;
		grid[end_y][start_x] = 1;
		grid[end_y][end_x] = 1;

		// line.setEntirePath( Array( Array(start_x*gridWH, start_y*gridWH), Array(start_x*gridWH, end_y*gridWH), Array(end_x*gridWH, end_y*gridWH) ) );
		line.setEntirePath( Array( Array(start_x, start_y), Array(start_x, end_y), Array(end_x, end_y) ) );
	}

	app.redraw();
}
// alert (grid);

function signed(a1, a2) {
	if (a2 - a1 < 0) {
		return -1;
	} else {
		return 1;
	}
}

var layr2 = doc.layers.add();

for (j=0; j<40; j++) {
for (i=0; i<layr.pathItems.length; i++) {
	var tY = layr.pathItems[i].pathPoints[0].anchor;
	var tMid = layr.pathItems[i].pathPoints[1].anchor;
	var tX = layr.pathItems[i].pathPoints[2].anchor;
	// var yMove = Math.sign(tMid[1] - tY[1]);
	// var xMove = Math.sign(tMid[0] - tX[0]);
	var yMove = signed(tMid[1] , tY[1]);
	var xMove = signed(tMid[0] , tX[0]);
	tY[1] += yMove;
	tX[0] += xMove;

	if (grid[tY[1]][tY[0]] == 1 ) {
		tY[1] -= yMove;
		// var circle = layr2.pathItems.ellipse(tY[1], tY[0], .5, .5, true, false);
		// circle.stroked = false;
		// circle.filled = true;
		// circle.fillColor = colCyan;
		// alert (tY[1]+" y:x "+tY[0]);
		// layr.pathItems[i].strokeColor = colPurple;
	} else {
		grid[tY[1]][tY[0]] = 1;
	}

	if (grid[tX[1]][tX[0]] == 1 ) {
		tX[0] -= xMove;
		// var circle = layr2.pathItems.ellipse(tX[1], tX[0], .25, .25, true, false);
		// circle.stroked = false;
		// circle.filled = true;
		// circle.fillColor = colMagenta;
		// alert (tY[1]+" y:x "+tY[0]);
		// layr.pathItems[i].strokeColor = colGreen;
	} else {
		grid[tX[1]][tX[0]] = 1;
	}

	layr.pathItems[i].pathPoints[0].anchor = tY;
	layr.pathItems[i].pathPoints[2].anchor = tX;
	redraw();
}
}
alert ("yay");
// alert (grid);
