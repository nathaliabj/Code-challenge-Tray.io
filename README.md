# Code-challenge-Tray.io

The program is a web page, i have tried it on chrome and safari and works well. 
To run the hoover you just simply have to click the "Clean up!" button and it will start its route through the room, removing any dirty patches it finds.
when it gets to the end of the route it then returns to its initial position at "0, 0".

I have included a script ( comp.js ) with a different exploration of this challenge. i used there a html5 canvas and drew rectangle with Javascript.
I got to a point where i could not make the hoover move without it leaving a trace, and if i cleared the trace it would clear the whole canvas out.
So i started a new project ( app.js ) using mostly Jquery and some JavaScript to make it work. 

The app.js creates a grid, hoover and dirt block using html elements (div). The hoover is animated via jquery and cleans the patches of dirt when it goes on top of them.
I did add a very few css styling to make it look like a hoover (doesn't hurt) :D

