// script.js

// Function to generate a random color
function getRandomColor() {
    // Generating random values for red, green, and blue channels
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Constructing a CSS color string using RGB values
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    
    return color;
}

// Wait for DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements
    var colorBox = document.getElementById("color-box");
    var changeColorBtn = document.getElementById("change-color-btn");

    // Adding event listener to the button
    changeColorBtn.addEventListener("click", function() {
        // Changing background color of color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
