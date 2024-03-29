//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function jkBreakApartOutline() {
	// declare and initialize variables
	var selectedItems = selection;
	var offsetDeg = prompt("Offset Degree? (0-360):",135);

	// cycle through each of the selected paths (no compounds or groups!!)
	for (var i=0; i<selectedItems.length; i++) {

		// cycle through all the path points
		for (var j=0; j<selectedItems[i].pathPoints.length; j++) {

			// add new line to the document
			var pathRef = activeDocument.activeLayer.pathItems.add();
			pathRef.stroked = true;
			pathRef.filled = false;
			pathRef.closed = false;

			// Append first point to the line
			var newPoint = pathRef.pathPoints.add();
			newPoint.anchor = selectedItems[i].pathPoints[j].anchor;
			newPoint.leftDirection = selectedItems[i].pathPoints[j].anchor;
			newPoint.rightDirection = selectedItems[i].pathPoints[j].rightDirection;
			// Append second point to the line
			var newPoint = pathRef.pathPoints.add();
			// last point needs to connect to the first
			if (j == selectedItems[i].pathPoints.length-1) {
				newPoint.anchor = selectedItems[i].pathPoints[0].anchor;
				newPoint.leftDirection = selectedItems[i].pathPoints[0].leftDirection;
				newPoint.rightDirection = selectedItems[i].pathPoints[0].anchor;
				var x2 = selectedItems[i].pathPoints[0].anchor[0]
				var y2 = selectedItems[i].pathPoints[0].anchor[1]
			} else {
				newPoint.anchor = selectedItems[i].pathPoints[j+1].anchor;
				newPoint.leftDirection = selectedItems[i].pathPoints[j+1].leftDirection;
				newPoint.rightDirection = selectedItems[i].pathPoints[j+1].anchor;
				var x2 = selectedItems[i].pathPoints[j+1].anchor[0]
				var y2 = selectedItems[i].pathPoints[j+1].anchor[1]
			};
			var x1 = selectedItems[i].pathPoints[j].anchor[0]
			var y1 = selectedItems[i].pathPoints[j].anchor[1]
			var pathRads = Math.atan((x2-x1)/(y2-y1));
			var pathDeg = pathRads *  180 / Math.PI;
			if (y2 >= y1) {
				pathDeg += 180;
			} else {
				if (x2 > x1) {
					pathDeg += 360;
				};
			};
			pathDeg += (offsetDeg-180);
			if (pathDeg > 180) {
				pathDeg *= -1;
				pathDeg += 360;
			}

			var strokeCol = new RGBColor;
/* 			alert( pathDeg + " : " + pathRads ) */
			var grey = (255/180) * pathDeg;
			if (grey < 0) {
				grey *= -1;
			}
			strokeCol.red = grey;
			strokeCol.green = grey;
			strokeCol.blue = grey;
			pathRef.strokeColor = strokeCol;

/* 			redraw();		 */
		}; // end pathpoints

		selectedItems[i].translate(0,-10);
		redraw();
/* 		selectedItems[i].remove(); */
	}; // end selected paths

};

jkBreakApartOutline();

alert("I did it! Yay!");
