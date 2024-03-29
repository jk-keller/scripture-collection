// draws a series of objects that look like lines from one rect to another
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

// variables
var segments = Math.round(5 + Math.random() * 15);

// find rect locations
var selectedRects = activeDocument.selection;
if (selectedRects.length < 2 ) {
	alert ("Select more than one object!");
	// add a break
};
for ( i=0; i<selectedRects[0].pathPoints.length; i++ ) {
//	alert (selectedRects[0].pathPoints[i].anchor);
}

// which edges are closest to each other?
// how many slices?
// locations of corners
// draw objects

var left1 = selectedRects[0].left
var left2 = selectedRects[1].left
var right1 = selectedRects[0].left + selectedRects[0].width
var right2 = selectedRects[1].left + selectedRects[1].width

var top1 = selectedRects[0].top
var top2 = selectedRects[1].top
var bottom1 = selectedRects[0].top - selectedRects[0].height
var bottom2 = selectedRects[1].top - selectedRects[1].height

var relativeLoc = "";

if (left1 > left2 && right1 > right2) {
	relativeLoc += "right";
} else if (left1 > left2 && right1 < right2) {
	relativeLoc += "smaller";
} else if (left1 < left2 && right1 > right2) {
	relativeLoc += "bigger";
} else if (left1 < left2 && right1 < right2) {
	relativeLoc += "left";
} else {
	alert("something's wrong left/right");
}

if (top1 > top2 && bottom1 > bottom2) {
	relativeLoc += "above";
} else if (top1 > top2 && bottom1 < bottom2) {
	relativeLoc += "bigger";
} else if (top1 < top2 && bottom1 > bottom2) {
	relativeLoc += "smaller";
} else if (top1 < top2 && bottom1 < bottom2) {
	relativeLoc += "below";
} else {
	alert("something's wrong left/right");
}

alert (relativeLoc);

var width1 = selectedRects[0].pathPoints[0].anchor[0] - selectedRects[0].pathPoints[1].anchor[0]
var height1 = selectedRects[0].pathPoints[0].anchor[1] - selectedRects[0].pathPoints[3].anchor[1]
var width2 = selectedRects[1].pathPoints[3].anchor[0] - selectedRects[1].pathPoints[2].anchor[0]
var height2 = selectedRects[1].pathPoints[1].anchor[1] - selectedRects[1].pathPoints[2].anchor[1]

for ( i=0; i<segments; i++ ) {

	var pathRef = activeDocument.activeLayer.pathItems.add();

	pathRef.setEntirePath( new Array(
		new Array(selectedRects[0].left + (width1/segments)*(i+1), selectedRects[0].top - selectedRects[0].height),
		new Array(selectedRects[0].left + (width1/segments)*i, selectedRects[0].top - selectedRects[0].height),
		new Array(selectedRects[1].left, selectedRects[1].top - selectedRects[1].height - ((height2/segments)*i)),
		new Array(selectedRects[1].left, selectedRects[1].top - selectedRects[1].height - ((height2/segments)*(i+1))),
		new Array(selectedRects[0].left + (width1/segments)*(i+1), selectedRects[0].top - selectedRects[0].height) ) ) ;

	pathRef.stroked = false;

	// create a random CMYK color and assign as the fill color
	var cmykColor = new CMYKColor();
	cmykColor.cyan = Math.random() * 100;
	cmykColor.yellow = Math.random() * 100;
	cmykColor.magenta = Math.random() * 100;
	cmykColor.black = 0;
	pathRef.filled = true;
	pathRef.fillColor = cmykColor;

	// apply a random opacity
	pathRef.opacity = 50 + Math.random() * 50;

}

for ( i=0; i<segments; i++ ) {

	var pathRef = activeDocument.activeLayer.pathItems.add();

	pathRef.setEntirePath( new Array(
		new Array(selectedRects[0].left + selectedRects[0].width, selectedRects[0].top - selectedRects[0].height - ((height1/segments)*(i+1))),
		new Array(selectedRects[0].left + selectedRects[0].width, selectedRects[0].top - selectedRects[0].height - ((height1/segments)*i)),
		new Array(selectedRects[1].left + ((width2/segments)*i), selectedRects[1].top),
		new Array(selectedRects[1].left + ((width2/segments)*(i+1)), selectedRects[1].top),
		new Array(selectedRects[0].left + selectedRects[0].width, selectedRects[0].top - selectedRects[0].height - ((height1/segments)*(i+1))) ) ) ;

	pathRef.stroked = false;

	// create a random CMYK color and assign as the fill color
	var cmykColor = new CMYKColor();
	cmykColor.cyan = Math.random() * 100;
	cmykColor.yellow = Math.random() * 100;
	cmykColor.magenta = Math.random() * 100;
	cmykColor.black = 20;
	pathRef.filled = true;
	pathRef.fillColor = cmykColor;

	// apply a random opacity
	pathRef.opacity = 50 + Math.random() * 50;
}

/*

for (i=0; i<piRef.length; i++) {
	var pathRef = piRef[i]
	// No stroke
	pathRef.stroked = false;

	// create a random CMYK color and assign as the fill color
	var cmykColor = new CMYKColor();
	cmykColor.cyan = Math.random() * 100;
	cmykColor.yellow = Math.random() * 100;
	cmykColor.magenta = Math.random() * 100;
	pathRef.filled = true;
	pathRef.fillColor = cmykColor;

	// apply a random opacity
	pathRef.opacity = 50 + Math.random() * 50;

}

*/
