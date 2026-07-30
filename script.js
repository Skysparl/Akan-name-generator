// Akan Name Data
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// DOM Elements
const akanForm = document.getElementById('akanForm');
const resultContainer = document.getElementById('resultContainer');
const akanNameElement = document.getElementById('akanName');
const resetBtn = document.getElementById('resetBtn');

// Form Submit Event Handler
akanForm.addEventListener('submit', function (e) {
    // 1. Prevent default form submission (stops page reload)
    e.preventDefault();

    // 2. Get form values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // 3. Strict Calendar Date Validation
    if (!isValidDate(day, month, year)) {
        alert("Please enter a valid calendar date!");
        return;
    }

    // 4. Calculate Day of the Week (0 = Sunday, 1 = Monday, etc.)
    const birthDate = new Date(year, month - 1, day);
    const dayIndex = birthDate.getDay();

    // 5. Determine Akan Name
    const dayName = daysOfWeek[dayIndex];
    const akanName = gender === 'male' ? maleNames[dayIndex] : femaleNames[dayIndex];

    // 6. Display Result
    akanNameElement.textContent = `You were born on a ${dayName}. Your Akan name is ${akanName}!`;
    akanForm.classList.add('hidden');
    resultContainer.classList.remove('hidden');
});

// Helper Function: Validate actual calendar days (handles leap years too)
function isValidDate(day, month, year) {
    const testDate = new Date(year, month - 1, day);
    return (
        testDate.getFullYear() === year &&
        testDate.getMonth() === month - 1 &&
        testDate.getDate() === day
    );
}

// Reset Button Event Handler
resetBtn.addEventListener('click', function () {
    akanForm.reset();
    resultContainer.classList.add('hidden');
    akanForm.classList.remove('hidden');
});