//
// created by A Nonlethal Jerk, dilettante coder
// https://anonlethal-jerk.github.io/
//
// *a little more control over scaling each path vs. built-in "Transform Each" function*
// - Select path(s) & run script.
// - Choose 'random' or 'linear' method.
// - Input minimum & maximum scaling limits.
//

#target illustrator

var docRef = app.activeDocument;
var selRef = docRef.selection;

if (selRef.length == 0) {
	alert("You gotta select something, mister.");
} else {
	// how to scale objects
	var pHow = prompt("random or linear?", "random");

	if (pHow == "linear" || pHow == "Linear") {
		var pStartScale = prompt("Start Scale Percent?", "10")*1;
		var pEndScale = prompt("End Scale Percent?", "100")*1;
		for ( i = 0; i < selRef.length; ++i ) {
			pScale = pStartScale + (((pEndScale-pStartScale) / selRef.length) * i)
			selRef[i].resize(pScale,pScale);
		}
	} else if (pHow == "random" || pHow == "Random") {
		var pMinScale = prompt("Minimum Scale Percent?", "10")*1;
		var pMaxScale = prompt("Maximum Scale Percent?", "100")*1;
		for ( i = 0; i < selRef.length; ++i ) {
			pScale = (Math.random()*pMaxScale)+pMinScale
			selRef[i].resize(pScale,pScale);
		}
	}
}
