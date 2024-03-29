//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function jkDoubleSpeakShapes() {
	// declare and initialize variables
	var jkSelectedItems = selection;
	var jkDrawPath = new Array();

	// make sure there are enough paths to connect
	// make sure they have the same number of points???
	if ( jkSelectedItems.length < 2 ) {
		alert("You need to select more than one path for this to work.");
	}

/*	// only need to use the number of path points of first one if they are all the same
	for (var i=0; i<jkSelectedItems[0].pathPoints.length; i++) {
		var jkDrawPath = new Array();

		// what about compound paths?
		for (var j=0; j<jkSelectedItems.length; j++) {
			jkDrawPath.push(jkSelectedItems[j].pathPoints[i].anchor);
		}
		for (var j=jkSelectedItems.length; j>0; j--) {
			if (i == jkSelectedItems[0].pathPoints.length-1) {
				jkDrawPath.push(jkSelectedItems[j-1].pathPoints[0].anchor);
			} else {
				jkDrawPath.push(jkSelectedItems[j-1].pathPoints[i+1].anchor);
			}
		}

		// add the shape to use the pathfinder with
		var pathRef = activeDocument.pathItems.add();
		pathRef.setEntirePath(jkDrawPath);
		pathRef.stroked = false;
		pathRef.filled = true;
		pathRef.closed = true;
		var fillCol = new RGBColor;
		fillCol.red = (255/jkSelectedItems[0].pathPoints.length)*i;
		fillCol.green = 125;
		fillCol.blue = 125;
		pathRef.fillColor = fillCol;

		redraw();
	}

*/

	// only need to use the number of path points of first one if they are all the same
	for (var i=0; i<jkSelectedItems.length; i++) {

		// what about compound paths?
		for (var j=0; j<jkSelectedItems[i].pathPoints.length; j++) {
//		alert(jkSelectedItems[i].pathPoints.length);
			var jkDrawPath = new Array();
			jkDrawPath.push(jkSelectedItems[i].pathPoints[j].anchor);
			if (j == jkSelectedItems[i].pathPoints.length-1) {
				jkDrawPath.push(jkSelectedItems[i].pathPoints[0].anchor);
			} else {
				jkDrawPath.push(jkSelectedItems[i].pathPoints[j+1].anchor);
			}

			if (i == jkSelectedItems.length-1) {
				if (j == jkSelectedItems[0].pathPoints.length-1) {
					jkDrawPath.push(jkSelectedItems[0].pathPoints[0].anchor);
				} else {
					jkDrawPath.push(jkSelectedItems[0].pathPoints[j+1].anchor);
				}
				jkDrawPath.push(jkSelectedItems[0].pathPoints[j].anchor);
			} else {
				if (j == jkSelectedItems[i+1].pathPoints.length-1) {
					jkDrawPath.push(jkSelectedItems[i+1].pathPoints[0].anchor);
				} else {
					jkDrawPath.push(jkSelectedItems[i+1].pathPoints[j+1].anchor);
				}
				jkDrawPath.push(jkSelectedItems[i+1].pathPoints[j].anchor);
			}

		// add the shape to use the pathfinder with
		var pathRef = activeDocument.pathItems.add();
		pathRef.setEntirePath(jkDrawPath);
		pathRef.stroked = false;
		pathRef.filled = true;
		pathRef.closed = true;
		var fillCol = new RGBColor;
//		fillCol.red = (255/jkSelectedItems.length)*i;
		fillCol.red = (255/(jkSelectedItems[i].pathPoints.length*2))*j+100;
		fillCol.green = (255/(jkSelectedItems[i].pathPoints.length*2))*j+100;
		fillCol.blue = (255/(jkSelectedItems[i].pathPoints.length*2))*j+100;
//		fillCol.red = Math.random()*255;
//		fillCol.green = Math.random()*255;
//		fillCol.blue = Math.random()*255;
		pathRef.fillColor = fillCol;

		redraw();
		}
	}
//	jkDoc.saveAs(jkFile);
//	jkDoc.close();
};

jkDoubleSpeakShapes();

alert("Thank You!!");
