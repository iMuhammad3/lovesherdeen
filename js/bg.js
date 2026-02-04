const colorPicker = document.getElementById("bgColorPicker");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

// Function to apply background
function applyBackground() {
    // If gradient values exist, use gradient
    if (localStorage.getItem("color1") && localStorage.getItem("color2")) {
        document.body.style.background = `linear-gradient(40deg, ${localStorage.getItem("color1")}, ${localStorage.getItem("color2")})`;
    } 
    // Else if single background color exists
    else if (localStorage.getItem("bgColor")) {
        document.body.style.background = localStorage.getItem("bgColor");
    }
}

// On page load, apply stored background
applyBackground();

// Listen for single color picker
colorPicker.addEventListener("input", () => {
    // Clear gradient
    localStorage.removeItem("color1");
    localStorage.removeItem("color2");

    document.body.style.background = colorPicker.value;

    // Store in localStorage
    localStorage.setItem("bgColor", colorPicker.value);
});

// Listen for gradient changes
function setGradient() {
    document.body.style.background = `linear-gradient(40deg, ${color1.value}, ${color2.value})`;

    // Clear single color
    localStorage.removeItem("bgColor");

    // Store gradient colors
    localStorage.setItem("color1", color1.value);
    localStorage.setItem("color2", color2.value);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
