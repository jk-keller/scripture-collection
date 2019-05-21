//
// created by A Nonlethal Jerk, dilettante coder
//

//
// TO DO:
//

var selRef = activeDocument.selection;

var doc = app.documents[0];
doc.defaultStrokeWidth = .25;
doc.defaultStrokeCap = StrokeCap.ROUNDENDCAP;

/*
for (j=0; j<30; ++j) {
var layr = doc.layers.add();

for (i=0; i<selRef.length; ++i) {
	var pathRef = selRef[i];
	var radius = pathRef.width/2;
	var myarea = Math.round(Math.PI * (radius*radius))*.1;
	var areatxt = doc.textFrames.add();
	areatxt.left = pathRef.left + pathRef.width + 10;
	areatxt.top = pathRef.top - (pathRef.height/2) + 5;
	areatxt.contents = myarea + " mil";
	areatxt.textRange.characterAttributes.size = 10;
}
*/

/*
  based on:
  https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
*/
// new Date("dateString") is browser-dependent and discouraged, so we'll write
// a simple parse function for U.S. date format (which does no error checking)
function parseDate(ymd) {
    return new Date(ymd[0], ymd[1]-1, ymd[2]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}
/*
  end based on:
  https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
*/
var month_names = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var start_date = [2018,10,1];
var end_date =   [2020, 1,1];
var date_range = datediff(parseDate(start_date), parseDate(end_date));
var start_x = 30;
var end_x = 1194;
var start_y = -30;
var end_y = -762;
var current_y = 30;
var multiplier = (end_x - start_x) / date_range;
var radius = 2;

var layr = doc.layers.add();
for (i=0; i<date_range+1; i++) {
  var line = layr.pathItems.add();
  line.stroked = true;
  line.filled = false;

  var current_x = start_x + (i * multiplier);
  var tempDate = parseDate(start_date);
  tempDate.setDate(tempDate.getDate() + i);
  if (tempDate.getDate() == 1) {
    current_y += 30;
  	var areatxt = layr.textFrames.add();
  	areatxt.left = current_x;
  	areatxt.top = end_y;
  	areatxt.contents = month_names[tempDate.getMonth()];
  	areatxt.textRange.characterAttributes.size = 10;
    line.strokeWidth = .5;
    line.setEntirePath( Array( Array(current_x, start_y), Array(current_x, end_y) ) );
  }
  if (tempDate.getDate() == 11 || tempDate.getDate() == 21 || tempDate.getDate() == 31) {
    current_y -= 10;
    line.strokeWidth = .25;
    line.setEntirePath( Array( Array(current_x, start_y), Array(current_x, end_y) ) );
  }
// 	var days = layr.pathItems.ellipse(current_y, current_x, radius, radius, true, false);
}


var items = [
[2018,10,1,"A Calendar Item","#ffff33",2018,10,3],
[2018,10,2,"A Calendar Item","#f3f3ff"],
[2018,10,6,"A Calendar Item","#f3f3ff"],
[2018,10,10,"A Calendar Item","#33ff33",2018,10,11],
[2018,10,10,"A Calendar Item","#33ff33",2018,10,11],
[2018,10,11,"A Calendar Item","#33ff33",2018,10,12],
[2018,10,11,"A Calendar Item","#33ff33",2018,10,12],
[2018,10,11,"A Calendar Item","#f3f3ff"],
[2018,10,12,"A Calendar Item","#33ff33",2018,10,13],
[2018,10,15,"A Calendar Item","#ffff33",2018,10,17],
[2018,10,16,"A Calendar Item","#ffff33",2018,10,18],
[2018,10,16,"A Calendar Item","#33ff33",2018,10,17],
[2018,10,18,"A Calendar Item","#33ff33",2018,10,19],
[2018,10,18,"A Calendar Item","#33ff33",2018,10,19],
[2018,10,20,"A Calendar Item","#33ff33",2018,10,21],
[2018,10,25,"A Calendar Item","#f3f3ff"],
[2018,10,26,"A Calendar Item","#f3f3ff"],
[2018,10,29,"A Calendar Item","#f3f3ff"],

[2018,11,1,"A Calendar Item","#ffff33",2018,11,3],
[2018,11,1,"A Calendar Item","#33ff33",2018,11,2],
[2018,11,3,"A Calendar Item","#f3f3ff"],
[2018,11,6,"A Calendar Item","#f3f3ff"],
[2018,11,6,"A Calendar Item","#f3f3ff"],
[2018,11,6,"A Calendar Item","#f3f3ff"],
[2018,11,7,"A Calendar Item","#ffff33",2018,11,9],
[2018,11,7,"A Calendar Item","#f3f3ff"],
[2018,11,7,"A Calendar Item","#f3f3ff"],
[2018,11,7,"A Calendar Item","#f3f3ff"],
[2018,11,9,"A Calendar Item","#f3f3ff"],
[2018,11,13,"A Calendar Item","#f3f3ff"],
[2018,11,14,"A Calendar Item","#33ff33",2018,11,15],
[2018,11,14,"A Calendar Item","#f3f3ff"],
[2018,11,19,"A Calendar Item","#33ff33",2018,11,20],
[2018,11,22,"A Calendar Item","#f3f3ff"],
[2018,11,23,"A Calendar Item","#f3f3ff"],
[2018,11,23,"A Calendar Item","#f3f3ff"],
[2018,11,24,"A Calendar Item","#f3f3ff"],
[2018,11,27,"A Calendar Item","#33ff33",2018,11,28],
[2018,11,27,"A Calendar Item","#33ff33",2018,11,28],
[2018,11,28,"A Calendar Item","#33ff33",2018,11,29],
[2018,11,28,"A Calendar Item","#f3f3ff"],
[2018,11,29,"A Calendar Item","#f3f3ff"],
[2018,11,30,"A Calendar Item","#f3f3ff"],

[2018,12,3,"A Calendar Item","#f3f3ff"],
[2018,12,8,"A Calendar Item","#f3f3ff"],
[2018,12,10,"A Calendar Item","#f3f3ff"],
[2018,12,12,"A Calendar Item","#f3f3ff"],
[2018,12,12,"A Calendar Item","#f3f3ff"],
[2018,12,14,"A Calendar Item","#f3f3ff"],
[2018,12,20,"A Calendar Item","#f3f3ff"],
[2018,12,20,"A Calendar Item","#f3f3ff"],
[2018,12,21,"A Calendar Item","#f3f3ff"],
[2018,12,27,"A Calendar Item","#f3f3ff"],

[2019,1,25,"A Calendar Item","#f3f3ff"],
[2019,1,28,"A Calendar Item","#f3f3ff"],

[2019,2,1,"A Calendar Item","#f3f3ff"],
[2019,2,11,"A Calendar Item","#ffff33",2019,2,13],
[2019,2,27,"A Calendar Item","#f3f3ff"],

[2019,3,6,"A Calendar Item","#33ff33",2019,3,7],
[2019,3,7,"A Calendar Item","#33ff33",2019,3,8],
[2019,3,11,"A Calendar Item","#f3f3ff"],
[2019,3,12,"A Calendar Item","#f3f3ff"],
[2019,3,22,"A Calendar Item","#f3f3ff"],
[2019,3,30,"A Calendar Item","#33ff33",2019,3,31],

[2019,4,10,"A Calendar Item","#33ff33",2019,4,11],
[2019,4,29,"A Calendar Item","#f3f3ff"],
[2019,4,30,"A Calendar Item","#f3f3ff"],

[2019,5,2,"A Calendar Item","#33ff33",2019,5,3],
[2019,5,20,"A Calendar Item","#f3f3ff"],

[2019,6,7,"A Calendar Item","#f3f3ff"],
[2019,6,10,"A Calendar Item","#f3f3ff"],
[2019,6,17,"A Calendar Item","#ff3333",2019,6,20],
[2019,6,20,"A Calendar Item","#f3f3ff"],
[2019,6,22,"A Calendar Item","#f3f3ff"],
[2019,6,22,"A Calendar Item","#f3f3ff"],
[2019,6,24,"A Calendar Item","#f3f3ff"],
[2019,6,24,"A Calendar Item","#f3f3ff"],

[2019,7,19,"A Calendar Item","#33ff33",2019,7,20],

[2019,9,3,"A Calendar Item","#f3f3ff"],
[2019,9,10,"A Calendar Item","#f3f3ff"],
[2019,9,23,"A Calendar Item","#f3f3ff"],

[2019,10,10,"A Calendar Item","#33ff33",2019,10,11],
[2019,10,16,"A Calendar Item","#33ff33",2019,10,17],
[2019,10,25,"A Calendar Item","#f3f3ff"],
[2019,10,28,"A Calendar Item","#33ff33",2019,10,29],

[2019,11,4,"A Calendar Item","#ffff33",2019,11,6],
[2019,11,6,"A Calendar Item","#33ff33",2019,11,7],
[2019,11,20,"A Calendar Item","#f3f3ff"],

[2019,12,9,"A Calendar Item","#f3f3ff"],




[2019,1,1,"A Calendar Item","#ffff33",2019,12,31],
[2019,1,1,"A Calendar Item","#ffff33",2019,12,31],
[2019,2,11,"A Calendar Item","#ffff33",2019,2,13],
[2019,6,17,"A Calendar Item","#ffff33",2019,6,20],
[2019,9,1,"A Calendar Item","#ffff33",2019,9,15],
[2019,11,4,"A Calendar Item","#ffff33",2019,11,6],



[2019,3,5,"A Calendar Item","#f1234f"],
[2019,3,13,"A Calendar Item","#f1234f"],
[2019,3,23,"A Calendar Item","#f1234f"],
[2019,5,3,"A Calendar Item","#f1234f"],
[2019,5,17,"A Calendar Item","#f1234f"],
[2019,5,22,"A Calendar Item","#f1234f"],
[2019,5,24,"A Calendar Item","#f1234f"],
[2019,5,24,"A Calendar Item","#f1234f"],
[2019,6,11,"A Calendar Item","#f1234f"],
[2019,6,14,"A Calendar Item","#f1234f"],
[2019,7,11,"A Calendar Item","#f1234f"],
[2019,7,12,"A Calendar Item","#f1234f"],
[2019,8,2,"A Calendar Item","#f1234f"],
[2019,8,9,"A Calendar Item","#f1234f"],
[2019,8,13,"A Calendar Item","#f1234f"],
[2019,8,16,"A Calendar Item","#f1234f"],
[2019,9,4,"A Calendar Item","#f1234f"],
[2019,9,4 ,"A Calendar Item","#f1234f"],
[2019,9,11,"A Calendar Item","#f1234f"],
[2019,9,17,"A Calendar Item","#f1234f"],
[2019,9,20,"A Calendar Item","#f1234f"],
[2019,9,26,"A Calendar Item","#f1234f"],
[2019,9,27,"A Calendar Item","#f1234f"],
[2019,10,4,"A Calendar Item","#f1234f"],
[2019,10,4,"A Calendar Item","#f1234f"],
[2019,10,5,"A Calendar Item","#f1234f"],
[2019,10,11,"A Calendar Item","#f1234f"],
[2019,10,11,"A Calendar Item","#f1234f"],
[2019,10,17,"A Calendar Item","#f1234f"],
[2019,10,18,"A Calendar Item","#f1234f"],
[2019,10,24,"A Calendar Item","#f1234f"],
[2019,10,25,"A Calendar Item","#f1234f"],
[2019,10,25,"A Calendar Item","#f1234f"],
[2019,10,26,"A Calendar Item","#f1234f"],
[2019,10,30,"A Calendar Item","#f1234f"],
[2019,11,5,"A Calendar Item","#f1234f"],
[2019,11,12,"A Calendar Item","#f1234f"],
[2019,11,14,"A Calendar Item","#f1234f"],
[2019,11,19,"A Calendar Item","#f1234f"],
[2019,12,5,"A Calendar Item","#f1234f"],
[2019,12,7,"A Calendar Item","#f1234f"],
[2019,12,7,"A Calendar Item","#f1234f"],
[2019,12,13,"A Calendar Item","#f1234f"],
[2019,12,14,"A Calendar Item","#f1234f"],
[2019,12,14,"A Calendar Item","#f1234f"],

];

var strokeWidth = 5;

var layr = doc.layers.add();
current_y = start_y;
for (i=0; i<items.length; i++) {
  var line = layr.pathItems.add();
  line.stroked = true;
  line.filled = false;
  line.strokeCap = StrokeCap.ROUNDENDCAP;
  line.strokeWidth = 6;

  var line_start = datediff(parseDate(start_date), parseDate([items[i][0], items[i][1], items[i][2]]));
  var line_length = 0;
  if(typeof items[i][5] !== 'undefined') {
    line_length = datediff(parseDate([items[i][0], items[i][1], items[i][2]]), parseDate([items[i][5], items[i][6], items[i][7]]));
  }
  var start_item_x = start_x + (line_start * multiplier);
  var end_item_x = start_x + ((line_start + line_length)) * multiplier;
  line.setEntirePath( Array( Array(start_item_x, current_y), Array(end_item_x, current_y)));

	var areatxt = layr.textFrames.add();
	areatxt.left = end_item_x + 6;
	areatxt.top = current_y + 7;
	areatxt.contents = items[i][3];
	areatxt.textRange.characterAttributes.size = 9;

  current_y -= 11;
}
