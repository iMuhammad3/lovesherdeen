const colorPicker = document.getElementById("bgColorPicker");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

// Function to apply background
function applyBackground() {
    if (sessionStorage.getItem("color1") && sessionStorage.getItem("color2")) {
        // Apply gradient if stored
        document.body.style.background = `linear-gradient(40deg, ${sessionStorage.getItem("color1")}, ${sessionStorage.getItem("color2")})`;
    } 
    else if (sessionStorage.getItem("bgColor")) {
        // Apply single color if stored
        document.body.style.background = sessionStorage.getItem("bgColor");
    }
}

// On page load, apply session-stored background
applyBackground();

// Listen for single color picker
colorPicker.addEventListener("input", () => {
    // Remove gradient if any
    sessionStorage.removeItem("color1");
    sessionStorage.removeItem("color2");

    document.body.style.background = colorPicker.value;

    // Store in sessionStorage for this session
    sessionStorage.setItem("bgColor", colorPicker.value);
});

// Listen for gradient changes
function setGradient() {
    document.body.style.background = `linear-gradient(40deg, ${color1.value}, ${color2.value})`;

    // Remove single color if any
    sessionStorage.removeItem("bgColor");

    // Store gradient colors for this session
    sessionStorage.setItem("color1", color1.value);
    sessionStorage.setItem("color2", color2.value);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
