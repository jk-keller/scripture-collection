//
// created by A Nonlethal Jerk, dilettante coder
// https://anonlethal-jerk.github.io/
//
// *a little more control over rotating each path vs. built-in "Transform Each" function*
// - Select path(s) & run script.
// - Choose 'random' or 'linear' method.
// - Input minimum & maximum rotation limits.
//

#target illustrator

var docRef = app.activeDocument;
var selRef = docRef.selection;

if (selRef.length == 0) {
	alert("You gotta select something, mister.");
} else {
	// how to rotate objects
	var pHow = prompt("random or linear?", "linear");

	if (pHow == "linear" || pHow == "Linear") {
		var pStartRotate = prompt("Start Rotate Degree?", "10")*1;
		var pEndRotate = prompt("End Rotate Degree?", "100")*1;
		for ( i = 0; i < selRef.length; ++i ) {
			pRotate = pStartRotate + (((pEndRotate-pStartRotate) / selRef.length) * i)
			selRef[i].rotate(pRotate);
		}
	} else if (pHow == "random" || pHow == "Random") {
		var pMinRotate = prompt("Minimum Rotate Degree?", "10")*1;
		var pMaxRotate = prompt("Maximum Rotate Degree?", "100")*1;
		for ( i = 0; i < selRef.length; ++i ) {
			pRotate = (Math.random()*pMaxRotate)+pMinRotate
			selRef[i].rotate(pRotate);
		}
	}
}
