// custom-schedule.js

const datePicker = document.getElementById("datePicker");
const selectedDateEl = document.getElementById("selectedDate");
const timeSlotsContainer = document.getElementById("timeSlots");

// Function to display time slots for the selected date
function showTimeSlots(date) {
    timeSlotsContainer.innerHTML = ""; // Clear previous time slots

    // Update selected date display
    selectedDateEl.textContent = date.toLocaleDateString();

    // Define time slots (e.g., 9:00 AM to 5:00 PM)
    const startHour = 9;
    const endHour = 17;

    for (let hour = startHour; hour <= endHour; hour++) {
        const time = `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
        
        const timeSlot = document.createElement("div");
        timeSlot.classList.add("time-slot");
        timeSlot.textContent = time;

        // Toggle the selected state on click
        timeSlot.addEventListener("click", () => {
            timeSlot.classList.toggle("selected");
        });

        timeSlotsContainer.appendChild(timeSlot);
    }
}

// Listen for date changes and show time slots accordingly
datePicker.addEventListener("change", (e) => {
    const selectedDate = new Date(e.target.value);
    if (!isNaN(selectedDate)) {
        showTimeSlots(selectedDate);
    }
});
