# remember...
#     python3 filename.py
#     alphabetical needs name-0000#.jpg

import os, math, numpy, PIL
from PIL import Image

# Access all JPG files in directory
allfiles=os.listdir(os.getcwd())
imlist=[filename for filename in allfiles if  filename[-4:] in [".jpg",".JPG"]]
imlist.sort()

# Assuming all images are the same size, get dimensions of first image
w,h=Image.open(imlist[0]).size
N=len(imlist)
# N=8892
# N=4848
# left x of section to pull from source
sourcel=507
# width of section to pull from source
sourcew=930

# Create a numpy array of RGB floats to store the full slitscan
destarr=numpy.zeros((h,N,3),float)

for i in range(N):
    if i%100 == 0:
        print("going... "+str(i))

    #set source and destination x positions
    sourcex=math.floor(sourcel+(i*(sourcew/N)))
    destx=i
    # destx=sourcel+math.floor(i*(sourcew/N))

    # open image and get single pixel slice
    sourcearr=numpy.array(Image.open(imlist[i]),dtype=float)
    # to go backwards...
    # sourcearr=numpy.array(Image.open(imlist[8892-1-i]),dtype=float)

    for j in range(h):
        destarr[j][destx]=sourcearr[j][sourcex]


# Round values in array and cast as 8-bit integer
destarr=numpy.array(numpy.round(destarr),dtype=numpy.uint8)

# Generate, save and preview final image
out=Image.fromarray(destarr,mode="RGB")
out.save("../slitscan-" + str(sourcel) + "-" + str(sourcew) + ".png")
# out.show()
