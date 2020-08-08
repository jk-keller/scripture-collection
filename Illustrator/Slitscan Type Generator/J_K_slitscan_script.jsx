
function jkSetup3d(jkLetter) {
	// declare and initialize variables
	var jkFile = new File("~/Slitscan-"+jkLetter+"-"+textFonts.length+".ai");
	var jkDoc = documents.add();
	var jkFonts = new Array();

	// cycle through all the fonts
	if (textFonts.length > 0) {
		for (var i=0; i<textFonts.length; i++) {
//			var fam = textFonts[i].family;
//			var nam = textFonts[i].name;
//			var par = textFonts[i].parent;
//			var sty = textFonts[i].style;
//			var typ = textFonts[i].typename;

			// place the letter in the document
			var jkText = jkDoc.textFrames.add();
			jkText.textRange.characterAttributes.size = 150;
			jkText.textRange.characterAttributes.textFont = textFonts[i];
			jkText.contents = jkLetter;

			// check for fonts that don't produce an outlineable letter
			try {
				// objRef automatically is a group
				var objRef = jkText.createOutline();
				objRef.name = i;
				objRef.left = 100 - (objRef.width/2.0);
				// THIS IS THE ONLY THING ALIGNING ALL THE LETTERS
				//				objRef.top = (jkDoc.height - 500) + objRef.height;
				// error check: make sure there is actually a shape in objRef
				if (objRef.compoundPathItems.length <= 0) {
					objRef.remove();
				} else {
					jkFonts.push(Array(objRef, objRef.width));
				};
			} catch (e) {
				jkText.remove();
			}
		}
		// sort the list according to the widths of the letterforms
		jkFonts.sort(sortWidths);

		// declare and initialize variables used for overlay shapes
		var whichBase = 0;
		var runningLeft = 100 - (jkFonts[whichBase][1]/2.0);
		var runningRight= 100 + (jkFonts[whichBase][1]/2.0);
		var baseSlice = jkFonts[whichBase][1] / 2.0 / (jkFonts.length - 1 - whichBase);


		for (var j=0; j<jkFonts.length - 1; j++) {
			// go through all the letters except the last one - why'd I do this again?
			if (j+1 < jkFonts.length - 1) {
				// check if the difference between letters is bigger than slice
				if (runningLeft + baseSlice < jkFonts[j+1][0].left) {
					baseSlice = jkFonts[j+1][0].left - runningLeft;
					whichBase = j+1;
				}
			}

			// add the shape to use the pathfinder with
			var pathRef = jkFonts[j][0].pathItems.add();
			pathRef.setEntirePath(Array(Array(runningLeft, jkDoc.height), Array(runningLeft + baseSlice, jkDoc.height), Array(runningLeft + baseSlice, 100), Array(runningRight - baseSlice, 100), Array(runningRight - baseSlice, jkDoc.height), Array(runningRight, jkDoc.height), Array(runningRight, 0), Array(runningLeft, 0)));
			pathRef.stroked = false;
			pathRef.filled = true;
			pathRef.closed = true;
			var fillCol = new RGBColor;
			fillCol.red = j*(250/textFonts.length);
			fillCol.green = 200;
			fillCol.blue = 200;
			pathRef.fillColor = fillCol;

			runningLeft += baseSlice;
			runningRight -= baseSlice;
			baseSlice = jkFonts[whichBase][1] / 2.0 / (jkFonts.length - 1 - whichBase);
		};
	};
	redraw();
	jkDoc.saveAs(jkFile);
//	jkDoc.close();
};

function sortWidths(a,b) {
	// Note that each thing we are passed is an array, so we don't compare the things
	// we're passed; instead, we compare their second column
	if (a[1]>b[1]) {
		return -1;
	}
	if (a[1]<b[1]) {
		return 1;
	}
	return 0;
}

/*
var rectRef = docRef.pathItems.rectangle(-700, -50, -100, -100);
var areaTextRef = docRef.textFrames.areaText(rectRef);
areaTextRef.textRange.characterAttributes.size = 12;
areaTextRef.contents = fontList.join(" \n ");
*/

jkSetup3d("J");
jkSetup3d("K");

alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts. Have a nice day!");
