/**
 * BLACK HOLE
 * Tianshun Wu
 * 
 * This is a simple black hole simulation game where users can move the mouse to control the black hole to swallow up the planets that appear randomly every second.
 * 
 * Control: 
 * move your mouse 
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 * https://p5js.org/reference/p5/noCursor/
 * https://p5js.org/examples//calculating-values-random/
 */

"use strict";




// Store circles
let circles = [];
/**
 * Create a background !!
*/
function setup() {
    createCanvas(800, 800); 
    noCursor(); // Remove the cursor form ellipse
    frameRate(60); // Set frame rate to 60FPS

}

/**
 * First, draw the ellipse to replace my mouse
 * Create circle that pops up every 60 frames/ 1 second with random x,y and random color
 * Remove circles by adding the distance to shrink 
 * Shrinking and xy movement animation (circles)
 * Remove the circles 
*/
function draw() {
    //Background color: black + a little blue
    background(0, 0, 50);
    //Remove the black line form ellipse
    noStroke();

    //Cursor became the ellipse,210 =size
    fill(255, 255, 255) // color of the ellipse
    ellipse(mouseX, mouseY, 210);

    // Every 1 seconds (60frames) create a new circle
    if (frameCount % 60 === 0) { // 60 frames
        let Circle = {
            x: random(width),
            y: random(height),
            size: 120,
            //Random color for the circle
            color: color(random(100, 256), random(100, 256), random(100, 256)),
           
        };
        circles.push(Circle);
    }
    
    // Remove the circles
    for (let i = circles.length - 1; i >= 0; i--) {
        // Check if the circle is within the "black hole"
        if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < 190) { //190 distance form the center of the "black hole"
            circles[i].shrinking = true; // Mark the circle to shrink
        } else {
            circles[i].shrinking = false; // Mark the circle to not shrink if it was not close enough(otherwise we can not see the circles, I don't know why)
        }
            // If the circles shrink, they move to the center of the "black hole"
        if (circles[i].shrinking) {
            circles[i].x = circles[i].x + (mouseX - circles[i].x) * 0.11; // movement towards the mouse X
            circles[i].y = circles[i].y + (mouseY - circles[i].y) * 0.11; // movement towards the mouse Y
            circles[i].size -= 3; // Decrease size per frame
            // If size is 0 or less
            if (circles[i].size <= 0) {
                circles.splice(i, 1); // Remove the circle 
                continue;
            }
        } 
            //Draw the random circles
            fill(circles[i].color); // apply the color from the array
            ellipse(circles[i].x, circles[i].y, circles[i].size); // draw the circle
    }
} 

   




