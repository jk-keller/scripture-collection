//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function doLetter(aLetter) {
	// declare and initialize variables
	var jkDoc = app.documents.add(DocumentColorSpace.RGB);
	var jkFonts = new Array();
	var vertCount = -1;

	// cycle through all the fonts
	if (textFonts.length > 0) {
		for (var k=0; k<textFonts.length; k++) {
			// place the letter in the document
			var jkText = jkDoc.textFrames.add();
			jkText.contents = aLetter;
			jkText.textRange.characterAttributes.size = 100;
			jkText.textRange.characterAttributes.textFont = textFonts[k];

			//var jkLabel = jkDoc.textFrames.add();
			//jkLabel.contents = textFonts[k].name;
			//jkLabel.textRange.characterAttributes.size = 6;
			//jkLabel.textRange.characterAttributes.textFont = textFonts[0];

			if (k % 40 == 0) {
				vertCount++;
			};
			// check for fonts that don't produce an outlineable letter
			jkText.left = (k - (vertCount * 40)) * 75;
			jkText.top = vertCount * -100;
			//jkLabel.left = (k - (vertCount * 24)) * 125;
			//jkLabel.top = (vertCount * -100) + 6;
		};
	};

	var jkFile = new File("~/"+aLetter+"-"+textFonts.length+".ai");
	jkDoc.saveAs(jkFile);
//	jkDoc.close();
	jkDoc = null;
};


doLetter("Y");

alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts. Have a nice day!");
