// create an array of all the points in a path
//
// created by A Nonlethal Jerk, dilettante coder
// https://anonlethal-jerk.github.io/
//

app.preferences.rulerUnits = RulerUnits.Pixels

var xStart = 0;
var yStart = 0;
var gScale = 1;

var jkSelected = activeDocument.selection;
for (i=0; i<jkSelected.length; i++) {
	var pathRef = jkSelected[i];
// 	alert(pathRef.typename);

	if (pathRef.typename == "GroupItem") {
		alert("groupItem"+pathRef.pathItems.length)
	} else if (pathRef.typename == "CompundPathItem") {
		alert("compoundItem"+pathRef.pathItems.length)
	} else {
		var jkText = activeDocument.textFrames.add();
		jkText.textRange.characterAttributes.size = 9;
		jkText.textRange.characterAttributes.textFont = textFonts.getByName("Courier");
		jkText.top = i*30;
		jkText.left = 100;
		jkText.contents = "";

		for (j=0; j<pathRef.pathPoints.length; j++) {
			jkText.contents += Math.round((pathRef.pathPoints[j].anchor[0]+xStart)*gScale)+","+Math.round((pathRef.pathPoints[j].anchor[1]+yStart)*-gScale)+",";
		}
	}
}
