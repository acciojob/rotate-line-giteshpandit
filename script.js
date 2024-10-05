//your JS code here. If required.
let angle = 0; // Initial angle

function rotateLine() {
    // Select the line element
    const line = document.getElementById('line');
    
    // Increment the angle by 2 degrees
    angle += 2;

    // Apply the rotation transformation
    line.style.transform = `rotate(${angle}deg)`;

    // Keep the rotation smooth and continuous by updating every 20ms
}

// Set an interval to call rotateLine every 20 milliseconds
setInterval(rotateLine, 20);

