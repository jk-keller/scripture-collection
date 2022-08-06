﻿// move & rotate each layer a little
//
// created by JK Keller, dilettante coder
// https://jk-keller.com/
//

jkComp = app.project.activeItem;

var i = 1;

// lines down
for (i=168; i>0; i--) {
	var myProp =   jkComp.layer(i).position;
	myProp.setValue([myProp.value[0] + Math.random()*20 - 10,myProp.value[1] + Math.random()*10 - 5,]);
	var myProp =   jkComp.layer(i).rotation;
	myProp.setValue(Math.random()*10 - 5);
};


