//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function jkBreakApartOutline() {
	// declare and initialize variables
	var selectedItems = selection;

	// cycle through each of the selected paths (no compounds or groups!!)
	for (var i=0; i<selectedItems.length; i++) {

		// cycle through all the path points
		for (var j=0; j<selectedItems[i].pathPoints.length; j++) {

			// add new line to the document
			var pathRef = activeDocument.activeLayer.pathItems.add();
			pathRef.stroked = true;
			pathRef.filled = false;
			pathRef.closed = false;
			var strokeCol = new RGBColor;
			strokeCol.red = Math.random()*255;
			strokeCol.green = Math.random()*255;
			strokeCol.blue = Math.random()*255;
			pathRef.strokeColor = strokeCol;

			// Append first point to the line
			var newPoint = pathRef.pathPoints.add();
			newPoint.anchor = selectedItems[i].pathPoints[j].anchor;
			newPoint.leftDirection = selectedItems[i].pathPoints[j].anchor;
			newPoint.rightDirection = selectedItems[i].pathPoints[j].rightDirection;
			if (j == selectedItems[i].pathPoints.length-1) {
				// Append second point to the line
				var newPoint = pathRef.pathPoints.add();
				newPoint.anchor = selectedItems[i].pathPoints[0].anchor;
				newPoint.leftDirection = selectedItems[i].pathPoints[0].leftDirection;
				newPoint.rightDirection = selectedItems[i].pathPoints[0].anchor;
			} else {
				// Append second point to the line
				var newPoint = pathRef.pathPoints.add();
				newPoint.anchor = selectedItems[i].pathPoints[j+1].anchor;
				newPoint.leftDirection = selectedItems[i].pathPoints[j+1].leftDirection;
				newPoint.rightDirection = selectedItems[i].pathPoints[j+1].anchor;
			};

/* 			redraw();		 */
		}; // end pathpoints

		selectedItems[i].translate(0,-10);
		redraw();
/* 		selectedItems[i].remove(); */
	}; // end selected paths

};

jkBreakApartOutline();

alert("I did it! Yay!");
