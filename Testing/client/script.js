// Get the countdown element and the bid button
const countdownElement = document.getElementById('countdown');
const bidButton = document.getElementById('bidButton');

// Set the initial time remaining in the auction (24 days, 12 hours, 43 minutes)
let timeRemaining = {
  days: 24,
  hours: 12,
  minutes: 43
};

// Update the countdown timer display with the current time remaining
function updateCountdown() {
  countdownElement.textContent = `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m`;
}

// Add a minute to the time remaining when the bid button is clicked
bidButton.addEventListener('click', () => {
  timeRemaining.minutes++;
  if (timeRemaining.minutes >= 60) {
    timeRemaining.hours++;
    timeRemaining.minutes = 0;
  }
  if (timeRemaining.hours >= 24) {
    timeRemaining.days++;
    timeRemaining.hours = 0;
  }
  updateCountdown();
});

// Update the countdown timer every minute
setInterval(() => {
  timeRemaining.minutes--;
  if (timeRemaining.minutes < 0) {
    timeRemaining.hours--;
    timeRemaining.minutes = 59;
  }
  if (timeRemaining.hours < 0) {
    timeRemaining.days--;
    timeRemaining.hours = 23;
  }
  updateCountdown();
}, 60000);
