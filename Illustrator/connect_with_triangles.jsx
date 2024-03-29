﻿// Connect all points in selected paths with lines
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

// get selected elements & cycle through them
var jkSelected = activeDocument.selection;
for (i=0; i<jkSelected.length; i++) {
	var pathRef = jkSelected[i];
	// alert(pathRef.typename);

	if (pathRef.typename == "GroupItem") {
		alert(pathRef.pathItems.length)
	} else if (pathRef.typename == "CompundPathItem") {
		alert(pathRef.pathItems.length)
	} else {
		// alert(pathRef.pathPoints.length)

		// cycle through all points in the path (except last one)
		var newLayerRef = activeDocument.layers.add();
		for (j=0; j<pathRef.pathPoints.length-1; j++) {
			var point1Ref = pathRef.pathPoints[j];
			var point2Ref = pathRef.pathPoints[j+1];
		// alert("j: "+j)

				var point3Ref = pathRef.pathPoints[Math.ceil(Math.random() * pathRef.pathPoints.length-1)];
		// alert("k: "+k)

				var newPathRef = newLayerRef.pathItems.add();
				newPathRef.setEntirePath( new Array(point1Ref.anchor, point2Ref.anchor, point3Ref.anchor, point1Ref.anchor) );
				newPathRef.stroked = false;
				newPathRef.filled = true;
				var cmykColor = new CMYKColor();
				cmykColor.cyan = Math.random() * 100;
				cmykColor.yellow = Math.random() * 100;
				cmykColor.magenta = Math.random() * 100;
				cmykColor.black = 0;
				newPathRef.fillColor = cmykColor;
		}
	}
}

