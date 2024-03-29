﻿// rotate each object independently
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

var docRef = app.activeDocument;
var ol = docRef.layers[0];
var pNum = prompt("How Many Steps? (35 is full rotation)",35)*1.0;
var angle = 360/(pNum+1);
//alert(angle);

for ( i = 1; i <= pNum; i++ ) {
	var nl = docRef.layers.add();
	for (var a = ol.pageItems.length-1; a >= 0; a--) {
		ol.pageItems[a].duplicate(nl, ElementPlacement.PLACEATBEGINNING);
	}
	var itemsArr = nl.pageItems;
	if ( itemsArr.length < 1 ) {
		alert( "Select some stuff to rotate..." );
	} else {
		var pRotate = i*angle;
		for ( j = 0; j < itemsArr.length; ++j ) {
			itemsArr[j].rotate(pRotate);
		}
	}
}
