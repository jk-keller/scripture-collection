
function jkSetup3d(jkLetter) {
	// declare and initialize variables
	var jkFile = new File("~/"+jkLetter+"-"+textFonts.length+".ai");
	var jkDoc = documents.add();
	var jkFonts = new Array();
	var jkCounter = 0;
	var jkLayer = jkDoc.layers.add();

	// cycle through all the fonts
	if (textFonts.length > 0) {
		for (var i=1; i<textFonts.length; i+=3) {
			jkCounter++;
			if (jkCounter%6 == 1) {
				jkLayer = jkDoc.layers.add();
			}

			// place the letter in the document
			var jkText = jkLayer.textFrames.add();
			jkText.textRange.characterAttributes.size = 200;
			jkText.textRange.characterAttributes.textFont = textFonts[i];
			jkText.contents = jkLetter;

			// check for fonts that don't produce an outlineable letter
			try {
				// jkObj automatically is a group
				var jkObj = jkText.createOutline();
				jkObj.name = i;

				// error check: make sure there is actually a shape in jkObj
				if (jkObj.compoundPathItems.length <= 0) {
					jkObj.remove();
				} else {
					if (jkCounter%6 == 1 || jkCounter%6 == 3 || jkCounter%6 == 5) {
						jkObj.left = 153 - (jkObj.width/2.0);
					} else {
						jkObj.left = 459 - (jkObj.width/2.0);
					}

					if (jkCounter%6 == 0 || jkCounter%6 == 1) {
						jkObj.top = jkObj.height + 576;
					} else if (jkCounter%6 == 2 || jkCounter%6 == 3) {
						jkObj.top = jkObj.height + 324;
					} else {
						jkObj.top = jkObj.height + 72;
					}

					// add the shape to use the pathfinder with
					var jkFillColor = new RGBColor;
					jkFillColor.red = 200;
					jkFillColor.green = 200;
					jkFillColor.blue = 200;

					var jkObjCenter = jkObj.left + (jkObj.width/2.0);
					var jkObjBottom = jkObj.top - jkObj.height;
					var jkPath = jkObj.pathItems.add();
					jkPath.setEntirePath(Array(Array(jkObjCenter - 72,jkObjBottom - 54), Array(jkObjCenter + 72,jkObjBottom - 54), Array(jkObjCenter + 72,jkObjBottom - 18), Array(jkObjCenter - 72,jkObjBottom - 18), Array(jkObjCenter - 72,jkObjBottom - 54)));
					jkPath.stroked = false;
					jkPath.filled = true;
					jkPath.closed = true;
					jkPath.fillColor = jkFillColor;
					var jkPath2 = jkObj.pathItems.add();
					jkPath2.setEntirePath(Array(Array(jkObjCenter - 36,jkObjBottom - 36), Array(jkObjCenter - 41,jkObjBottom - 36), Array(jkObjCenter - 41,jkObjBottom + 4), Array(jkObjCenter - 36,jkObjBottom + 4), Array(jkObjCenter - 36,jkObjBottom - 36)));
					jkPath2.stroked = false;
					jkPath2.filled = true;
					jkPath2.closed = true;
					jkPath2.fillColor = jkFillColor;
					var jkPath3 = jkObj.pathItems.add();
					jkPath3.setEntirePath(Array(Array(jkObjCenter + 36,jkObjBottom - 36), Array(jkObjCenter + 41,jkObjBottom - 36), Array(jkObjCenter + 41,jkObjBottom + 4), Array(jkObjCenter + 36,jkObjBottom + 4), Array(jkObjCenter + 36,jkObjBottom - 36)));
					jkPath3.stroked = false;
					jkPath3.filled = true;
					jkPath3.closed = true;
					jkPath3.fillColor = jkFillColor;
				};
			} catch (e) {
				jkText.remove();
			}
		}

	};
	jkDoc.saveAs(jkFile);
};


// jkSetup3d("J");
 jkSetup3d("K");

// alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts. Have a nice day!");
