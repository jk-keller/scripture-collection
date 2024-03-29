//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function scalingQuirks(aNumFactors, aText) {

	// cycle through all the fonts
	// I need a more robust means of changing this (by 2's, 3's, only so many, etc.)
	// figure out how to determine if a font is "bad"
	if (textFonts.length > 0) {
		for (var cf=50; cf<51; cf++) {
		// for (var cf=50; cf<textFonts.length; cf++) {

			// cycle through the number of scaling factors I want to see
			for (var i=4; i<aNumFactors+4; i++) {

			// declare and initialize variables
			var jkDoc = documents.add();
			var jkFonts = new Array();
			var nam = textFonts[cf].name;
			var stopVal = 0;

			// place the text in the document
			var jkText = jkDoc.textFrames.add();
			jkText.textRange.characterAttributes.size = 10;
			jkText.textRange.characterAttributes.textFont = textFonts[cf];
			jkText.contents = aText;

			// check for fonts that don't produce an outlineable letter
			try {
				// objRef automatically is a group
				var objRef = jkText.createOutline();
				objRef.left = 100
				objRef.top = jkDoc.height - 100;
				// error check: make sure there is actually a shape in objRef
				if (objRef.compoundPathItems.length <= 0) {
					stopVal = 1;

					objRef.remove();
				};
			} catch (e) {
				stopVal = 1;
				jkText.remove();
			}

			if (stopVal == 0) {
				var jkPath = objRef;
				// doing this number twice to get the scaling may be better?
				// what is the precision of this floating point here?
				var scalingFactor = .0000000000002*i;
				jkPath.resize(100*scalingFactor, 100*scalingFactor);
				jkPath.resize(100/scalingFactor, 100/scalingFactor);
				jkPath.resize(400, 400);

				var jkFile = new File("~/"+nam+"-"+i+".ai");
				jkDoc.saveAs(jkFile);
			};
			jkDoc.close(SaveOptions.DONOTSAVECHANGES);
			jkDoc = null;
			};
		};
	};
};

function cycleFonts() {
	// cycle through all the fonts
	// I need a more robust means of changing this (by 2's, 3's, only so many, etc.)
	// figure out how to determine if a font is "bad"
	if (textFonts.length > 0) {
		for (var cf=0; cf<textFonts.length; cf++) {

		}
	}
}

scalingQuirks(1, "`1234567890-=\rqwertyuiop[]\\\rasdfghjkl;'\rzxcvbnm,./\r~!@#$%^&*()_+\rQWERTYUIOP{}|\rASDFGHJKL:\"\rZXCVBNM<>?");

// alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts. Have a nice day!");
