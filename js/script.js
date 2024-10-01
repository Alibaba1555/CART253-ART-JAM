/**
 * Cycle
 * Tianshun Wu
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let font;


// Array to store circles
let circles = [];
/**
 * Create a background !!
*/
function setup() {
    createCanvas(800, 800);
    noCursor();
    frameRate(60); // set frame rate to 60FPS

}
{
    // Hide the cursor.
    noCursor();
  }
    

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background color: black
    background(0, 0, 0);
    //remove the black line form ellipse
    noStroke();

    //cursor became the ellipse,230 =size
    fill(255, 255, 255)
    ellipse(mouseX, mouseY, 230);

    // every 1.5 seconds create a new circle
    if (frameCount % 60 === 0) { // 60 frames
        let newCircle = {
            x: random(width),
            y: random(height),
            size: 120,
            //random color for the circle
            color: color(random(255), random(255), random(255)),
            // shrinking: false
        };
        circles.push(newCircle);
    }
    

    for (let i = circles.length - 1; i >= 0; i--) {
        // Check if the circle is within the "black hole"
        if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < 180) { 
            circles[i].shrinking = true; // Mark the circle to shrink
        } else {
            circles[i].shrinking = false; // Mark the circle to shrink
        }
            
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

   




