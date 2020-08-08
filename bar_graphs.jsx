//
// Makes bar graphs from arrays of numbers (was easier than using illustrator's graph maker for some reason)
//
// TODO:
// work with arrays of arrays of numbers (group3 & group 4)
//

var doc = app.activeDocument;
var bar_thickness = 10;
var bar_gutter = 1;
var line_weight = 1;

function makeGraph(arg_array, arg_start_x) {
  for (i=0; i<arg_array.length; i++) {
    if (arg_array[i][1] > 0) {
      var new_bar = doc.pathItems.rectangle( arg_start_x, arg_start_x + i*bar_thickness*2 + i*bar_gutter, bar_thickness, arg_array[i][1] *-1 );
      var temp_color = new RGBColor;
      temp_color.red = 255;
      new_bar.fillColor = temp_color;
      new_bar.stroked = false;
      var new_bar_2 = doc.pathItems.rectangle( arg_start_x, arg_start_x + i*bar_thickness*2 + bar_thickness + i*bar_gutter, bar_thickness, arg_array[i][2] *-1 );
      var temp_color_2 = new RGBColor;
      temp_color_2.red = 155;
      new_bar_2.fillColor = temp_color_2;
      new_bar_2.stroked = false;
    }
  }
}


var group1 = [ //    2016, 2017
  ['items1' ,  31 ,  29 ],
  ['items2' ,  57 ,  62 ],
  ['items3' ,  43 ,  41 ],
  ['items4' ,   0 ,   1 ],
  ['items5' ,   3 ,   4 ],
  ['items6' , 210 , 214 ],
  ['items7' , 123 , 164 ],
]
var group2 = [ //    2016, 2017
  ['items1' , 309 , 339 ],
  ['items2' , 157 , 174 ],
  ['items3' ,   1 ,   2 ],
]

// U.S.
//                      2016, 2017
var group3 = [ //   4       5       6       7       8       9       10      11      12      13      14      15      16      17
  ['items1' , [ 2, 0],[ 1, 1],[ 7, 8],[ 2, 2],[ 3, 2],[ 8, 7],[ 4, 4],[ 3, 3],[ 1, 2],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  ['items2' , [ 6, 5],[ 3, 3],[ 8, 8],[ 5, 7],[ 6, 4],[ 4, 7],[ 5, 7],[12,14],[ 6, 6],[ 1, 0],[ 0, 0],[ 1, 0],[ 0, 1],[ 0, 0]],
  ['items3' , [ 6, 8],[ 2, 2],[ 9, 6],[ 4, 2],[ 1, 3],[ 8, 7],[ 8, 7],[ 1, 1],[ 3, 4],[ 1, 1],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  ['items4' , [ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 1],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  ['items5' , [ 1, 1],[ 0, 0],[ 2, 1],[ 0, 1],[ 0, 0],[ 0, 0],[ 0, 1],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
  ['items6' , [12, 6],[ 5, 0],[29,29],[21,27],[ 9,16],[28,23],[30,32],[36,33],[26,28],[ 3, 7],[ 0, 2],[11, 9],[ 0, 2],[ 0, 0]],
  ['items7' , [12,20],[ 1, 2],[24,38],[11,13],[ 5, 6],[14,15],[16,25],[24,22],[10,13],[ 3, 2],[ 0, 1],[ 3, 6],[ 0, 0],[ 0, 1]],
]

//                      2016, 2017
var group4 = [ //   4       5       6       7       8       9       10      11      12      13      14      15      16      17
  ['items1' , [29,25],[ 9, 6],[56,69],[37,39],[16,22],[35,37],[33,44],[51,44],[26,36],[ 8, 8],[ 0, 0],[ 9, 7],[ 0, 2],[ 0, 0]],
  ['items2' , [10,15],[ 3, 2],[23,20],[ 6,13],[ 8, 9],[27,23],[29,31],[25,29],[20,17],[ 0, 2],[ 0, 3],[ 6, 8],[ 0, 1],[ 0, 1]],
  ['items3' , [ 0, 0],[ 0, 0],[ 0, 1],[ 0, 0],[ 0, 0],[ 0, 0],[ 1, 1],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0],[ 0, 0]],
]

makeGraph(group1, 0);
makeGraph(group2, 100);
// makeGraph(group3, 500);
// makeGraph(group4, 600);
