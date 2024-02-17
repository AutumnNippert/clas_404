// over time, update currTime to the current time every second
// display currTime in the console

// wait for dom

// curr time
timeElement = null;
function updatePageOnTimeChange() {
    let currTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    timeElement.innerHTML = currTime;
}

document.addEventListener("DOMContentLoaded", () => {
    timeElement = document.getElementById("currTime");
    
    setInterval(updatePageOnTimeChange, 1000);
});


