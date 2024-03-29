// Move each path in sine wave on different layer
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

var docRef = app.activeDocument;
var ol = docRef.layers[0];
var pNum = prompt("How Many Steps?",35)*1.0;
var pAmt = prompt("How Much to Move?",100)*1.0;
var angle = 360/(pNum+1);
//alert(angle);

for ( i = 1; i <= pNum; i++ ) {
	var nl = docRef.layers.add();
	for (var a = ol.pageItems.length-1; a >= 0; a--) {
		ol.pageItems[a].duplicate(nl, ElementPlacement.PLACEATBEGINNING);
	}
	var itemsArr = nl.pageItems;
	if ( itemsArr.length < 1 ) {
		alert( "Select some stuff to move..." );
	} else {
		for ( j = 0; j < itemsArr.length; ++j ) {
			var pRotate = i*angle;
			var currentRadiansX = (i-1)*((Math.PI*2)/pNum);
			var currentRadiansY = (i-1)*((Math.PI*4)/pNum);
			var amtShift = (pAmt/2)/itemsArr.length
			var pTranslateX = Math.sin(currentRadiansX)*((pAmt-(j*amtShift))/10);
			var pTranslateY = Math.sin(currentRadiansY)*(pAmt-(j*amtShift));
			// within a certain value range
			itemsArr[j].translate(pTranslateX,pTranslateY);
/* 			itemsArr[j].rotate(pRotate); */
		}
	}
}
