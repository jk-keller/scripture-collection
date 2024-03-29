//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

function JKAllFonts(aLetter) {
	// declare and initialize variables
	var JKDoc = documents.add();
	var JKFonts = new Array();

	// cycle through all the fonts
	if (textFonts.length > 0) {
		for (var i=0; i<textFonts.length; i++) {
//			var fam = textFonts[i].family;
//			var nam = textFonts[i].name;
//			var par = textFonts[i].parent;
//			var sty = textFonts[i].style;
//			var typ = textFonts[i].typename;

			// place the letter in the document
			var JKText = JKDoc.textFrames.add();
			JKText.textRange.characterAttributes.size = 150;
			JKText.textRange.characterAttributes.textFont = textFonts[i];
			JKText.contents = aLetter;

			// check for fonts that don't produce an outlineable letter
			try {
				// objRef automatically is a group
				var objRef = JKText.createOutline();
				objRef.name = i;
				objRef.left = 100 - (objRef.width/2.0);
				// error check: make sure there is actually a shape in objRef
				if (objRef.compoundPathItems.length <= 0) {
					objRef.remove();
				} else {
					JKFonts.push(Array(objRef, objRef.width));
				};
			} catch (e) {
				JKText.remove();
			}
		}
}
}

JKAllFonts("J");

alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts. Have a nice day!");
