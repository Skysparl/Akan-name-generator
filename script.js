// arrays holding the male and female names
// index 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var form = document.getElementById("nameForm");
var resultText = document.getElementById("resultText");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  var genderMale = document.getElementById("male").checked;
  var genderFemale = document.getElementById("female").checked;

  // check the day and month are valid numbers
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please fill in your day, month and year.");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Please enter a valid month between 1 and 12.");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Please enter a valid day between 1 and 31.");
    return;
  }

  // check gender was picked
  if (!genderMale && !genderFemale) {
    alert("Please select a gender.");
    return;
  }

  // work out day of the week using the formula
  var dayOfWeek = getDayOfWeek(day, month, year);

  var name;
  if (genderMale) {
    name = maleNames[dayOfWeek];
  } else {
    name = femaleNames[dayOfWeek];
  }

  resultText.innerHTML = "You were born on a " + dayNames[dayOfWeek] + ".<br>Your Akan name is <strong>" + name + "</strong>!";
});


// this function calculates the day of the week (0 = Sunday ... 6 = Saturday)
function getDayOfWeek(day, month, year) {

  // January and February count as months 13 and 14 of the previous year
  if (month < 3) {
    month = month + 12;
    year = year - 1;
  }

  var CC = Math.floor(year / 100);
  var YY = year % 100;

  var d = Math.floor(CC / 4) - (2 * CC) - 1 + Math.floor((5 * YY) / 4) + Math.floor((26 * (month + 1)) / 10) + day;

  // make sure the remainder is positive
  d = d % 7;
  if (d < 0) {
    d = d + 7;
  }

  return d;
}