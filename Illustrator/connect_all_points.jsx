// Connect all points in selected paths with lines
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

// TO ANIMATE THIS, I HAVE TO BE ABLE TO STORE THE COLORS
// MAYBE SHIFT THEM BY A SMALL AMOUNT EACH TIME SO IT IS A LITTLE MORE DYNAMIC
//

// get selected elements & cycle through them
var jkSelected = activeDocument.selection;
for (i=0; i<jkSelected.length; i++) {
	var pathRef = jkSelected[i];
	//alert(pathRef.typename);

	if (pathRef.typename == "GroupItem") {
		alert(pathRef.pathItems.length)
	} else if (pathRef.typename == "CompundPathItem") {
		alert(pathRef.pathItems.length)
	} else {
		//alert(pathRef.pathPoints.length)

		var startPoint = 5;
		// cycle through all points in the path (except last one)
		var newLayerRef = activeDocument.layers.add();
		for (j=startPoint; j<pathRef.pathPoints.length-3; j++) {
			var point1Ref = pathRef.pathPoints[j];
			var point2Ref = pathRef.pathPoints[j+1];
		// alert("j: "+j)

			for (k=j+2; k<pathRef.pathPoints.length-2; k++) {
				var point3Ref = pathRef.pathPoints[k];
				var point4Ref = pathRef.pathPoints[k+1];
		// alert("k: "+k)

				var newPathRef = newLayerRef.pathItems.add();
				newPathRef.setEntirePath( new Array(point1Ref.anchor, point2Ref.anchor, point3Ref.anchor, point4Ref.anchor, point1Ref.anchor) );
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
		for (j=0; j<startPoint; j++) {
			var point1Ref = pathRef.pathPoints[j];
			var point2Ref = pathRef.pathPoints[j+1];
		// alert("j: "+j)

			for (k=j+2; k<pathRef.pathPoints.length-2; k++) {
				var point3Ref = pathRef.pathPoints[k];
				var point4Ref = pathRef.pathPoints[k+1];
		// alert("k: "+k)

				var newPathRef = newLayerRef.pathItems.add();
				newPathRef.setEntirePath( new Array(point1Ref.anchor, point2Ref.anchor, point3Ref.anchor, point4Ref.anchor, point1Ref.anchor) );
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
}

