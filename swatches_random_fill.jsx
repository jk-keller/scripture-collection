//
// ILLUSTRATOR SCRIPT (File / Scripts / Other Script...)
//
// select a bunch of objects, then select a bunch of swatch colors
//

mySelection = app.activeDocument.selection;
myDoc = app.activeDocument;
if (mySelection instanceof Array) {
	selSwatches = myDoc.swatches.getSelected();
	
	if(selSwatches.length != 0)
		for (i=0; i<mySelection.length; i++)
		{
			if(mySelection[i].typename == "PathItem" || mySelection[i].typename == "CompoundPathItem")
			{
				selItem = mySelection[i];
				selItem.filled = true;

				swatchIndex = Math.round( Math.random() * (selSwatches.length - 1 ));
				
				if(selItem.typename == "PathItem")
					selItem.fillColor = selSwatches[swatchIndex].color;
				else
					selItem.pathItems[0].fillColor = selSwatches[swatchIndex].color;
			}
		}
}