// Alphabet Tracing Game using Canvas API
function startAlphabetGame() {
    const canvas = document.getElementById('alphabetCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw letter "A" to trace
    ctx.font = "bold 150px Arial";
    ctx.strokeText("A", 50, 150);
}

// Geolocation API to find the user's location
function getLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            locationElement.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        });
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}
