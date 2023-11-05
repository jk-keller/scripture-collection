# adapted from CnrL’s answer: https://stackoverflow.com/questions/17291455/how-to-get-an-average-picture-from-100-pictures-using-pil
# remember...
#     python3 filename.py
#     alphabetical needs name-0000#.jpg

import os, numpy, PIL
from PIL import Image

# Access all JPG files in directory
allfiles=os.listdir(os.getcwd())
imlist=[filename for filename in allfiles if  filename[-4:] in [".jpg",".JPG"]]
imlist.sort()

# Assuming all images are the same size, get dimensions of first image
w,h=Image.open(imlist[0]).size
N=len(imlist)
# N=8892
# images per averaging group
g=17
# step per group start
s=5

# 8892
# 60sec @ 30fps = 1800
# 8892 / 1800 = 4.94 (~5)
# (N-g)/s should get 1775 averaged frames and include all images

for i in range(int((N-g)/s)):
    if i%100 == 0:
        print("going... "+str(i))

    # Create a numpy array of floats to store the average (assume RGB images)
    arr=numpy.zeros((h,w,3),float)

    # Build up average pixel intensities, casting each image as an array of floats
    for j in range(g):
        imarr=numpy.array(Image.open(imlist[i*s+j]),dtype=float)
        arr=arr+imarr/g

    # Round values in array and cast as 8-bit integer
    arr=numpy.array(numpy.round(arr),dtype=numpy.uint8)

    # Generate, save and preview final image
    out=Image.fromarray(arr,mode="RGB")
    out.save("../averaged/average-" + str(i*s+1) + "-" + str(i*s+g+1) + ".png")
    # out.show()
