//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

#target illustrator

var docRef = app.activeDocument;
var selRef = docRef.selection;

var strGcode = "G20\nG90\nG1 Z0.15000 F9.0\n";

if (selRef.length == 0) {
	alert("You gotta select something, buster.");
} else {
	for (i=0; i<selRef.length; i++) {
		var strPoints = "";
		var strPaths = "";

		var pathsCounter = 0;

		var pathRef = selRef[i];

		if (pathRef.typename == "GroupItem") {
			alert("Grouped items don't work just yet.");

		} else if (pathRef.typename == "CompoundPathItem") {
			alert("No compounds ATM.");
/*
			for (j=0; j<pathRef.pathItems.length; j++) {
				if (j != 0) {
					strPoints += ",";
					strPaths += "],[";
				}
				for (k=0; k<pathRef.pathItems[j].pathPoints.length; k++) {
					var tempX = Math.round(pathRef.pathItems[j].pathPoints[k].anchor[0]/.02834645)/100;
					var tempY = Math.round(pathRef.pathItems[j].pathPoints[k].anchor[1]/.02834645)/100;
					if (k != 0) {
						strPoints += ",";
						strPaths += ",";
					}
					strPoints += "["+tempX+","+tempY+"]";
					strPaths += pathsCounter;
					pathsCounter++;
				}
			}
			strPaths += "]]);\n";
			strGcode += strPoints + strPaths;
*/

		} else {

			for (j=0; j<pathRef.pathPoints.length; j++) {
				var tempX = Math.round(pathRef.pathPoints[j].anchor[0])*.0138889;
				var tempY = Math.round(pathRef.pathPoints[j].anchor[1])*.0138889;
				if (j == 0) {
  				strPoints += "G0 X"+tempX+" Y"+tempY+"\n";
  				strPoints += "G1 Z-0.00000 F9.0\n";
				} else {
  				tempZ = Math.random()*-.02-.01;
  				strPoints += "G1 X"+tempX+" Y"+tempY+" Z"+tempZ+" F24.0\n";
				}
				if (j == pathRef.pathPoints.length-1) {
  				strPoints += "G1 Z0.15000 F9.0\n";
				}
			}
			strGcode += strPoints;
		}
	}
  strGcode += "G20\nG90\nG1 Z0.15000 F9.0\nG0 X0.00000 Y0.00000\nG4 P0.1";

	var tName = prompt("Document Name \r .scad extension added automatically. Will overwrite files without warning!", "output");
	if (tName != null) {
		var textFile = File('~/Desktop/'+tName+'.text');
		textFile.lineFeed = "Unix";
		textFile.open('w');
		// Automatically add some extrusion, as that's likely what you'll do here
// 		textFile.writeln("linear_extrude(height = 10, center = false) {\n");
		textFile.writeln(strGcode);
// 		textFile.writeln("}");
		textFile.close();

		alert("Yay! Check your desktop.");
	}
}
