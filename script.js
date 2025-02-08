function showCountdown() {
    const eventDate = new Date("March 17, 2025 08:30:00").getTime();
    const countdownContainer = document.getElementById("countdown-container");
    
    countdownContainer.classList.remove("hidden");
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            clearInterval(interval);
            countdownContainer.innerHTML = "<h2>Event Started!</h2>";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownContainer.innerHTML = <h2>Countdown:</h2><p>${days}d ${hours}h ${minutes}m ${seconds}s</p>;
    }, 1000);
}
// Set the event date (March 17, 2025, at 8:30 AM)
const eventDate = new Date("March 17, 2025 08:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown-timer").innerHTML = "Event Started!";
        return;
    }

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown text
    document.getElementById("countdown-timer").innerHTML =
        ${days}d ${hours}h ${minutes}m ${seconds}s;
}

// Ensure countdown starts when the page loads
document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
