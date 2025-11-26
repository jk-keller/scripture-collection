
# To be used in Automator workflow -> "Do Shell Script"

for f; do

# set variables to get 24 evenly-spaced frames from input video
duration=$(/opt/homebrew/bin/ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$f")
# change '24/d' to '##/d' to set number of frames you want
fps=$(awk -v d="$duration" 'BEGIN{printf "%.12f", 24/d}')

# extract exactly 24 evenly-spaced frames as temporary PNGs
# change 'scale=480' to 'scale=###' to set output size you want
/opt/homebrew/bin/ffmpeg -i "$f" -vf "fps=$fps,scale=480:-1:flags=lanczos" -y ffmpeg_temp-%03d.png

# generate palette from those 24 PNG frames
/opt/homebrew/bin/ffmpeg -f image2 -i ffmpeg_temp-%03d.png -vf palettegen -y ${f%.*}-palette.png

# assemble GIF at 2 fps (24 frames -> 12s total)
# change '-framerate 2' to '-framerate ##' to set output fps you want
/opt/homebrew/bin/ffmpeg -framerate 2 -i ffmpeg_temp-%03d.png -i palette.png -lavfi "paletteuse" -y "${f%.*}-preview.gif"

# optional: remove temporary frames
rm -f ffmpeg_temp-*.png

done