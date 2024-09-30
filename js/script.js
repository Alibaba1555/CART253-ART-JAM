/**
 * Cycle
 * Tianshun Wu
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Array to store circles
let circles = [];
/**
 * Create a background !!
*/
function setup() {
    createCanvas(800, 800);
    frameRate(60); // set frame rate to 60FPS
}
    
    

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background color: black
    background(0, 0, 0);
    //remove the black line form ellipse
    noStroke();


    // every 1.5 seconds create a new circle
    if (frameCount % 90 === 0) { // 1.5 seconds = 90 frames
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
    //cursor became the ellipse,230 =size
    fill(255, 255, 255)
    ellipse(mouseX, mouseY, 230);

    for (let i = circles.length - 1; i >= 0; i--) {
        // Check if the circle is within the "black hole"
        if (dist(mouseX, mouseY, circles[i].x, circles[i].y) < 115) { // 125 = (250/2 + 120/2)
            circles[i].shrinking = true; // Mark the circle to shrink
        } else {
            circles[i].shrinking = false; // Mark the circle to shrink
        }
            
        if (circles[i].shrinking) {
            circles[i].x += (mouseX - circles[i].x) * 0.1; // Smooth movement towards the mouse X
            circles[i].y += (mouseY - circles[i].y) * 0.1; // Smooth movement towards the mouse Y
            circles[i].size -= 8; // Decrease size
            if (circles[i].size <= 0) {
                circles.splice(i, 1); // Remove the circle if it is swallowed
            }
        } 

            fill(circles[i].color); // Apply the color from the array
            ellipse(circles[i].x, circles[i].y, circles[i].size); // Draw the circle
    }
} 

   




