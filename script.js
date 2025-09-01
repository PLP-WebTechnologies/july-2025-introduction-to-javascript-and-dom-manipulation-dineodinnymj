// =========================
// PART 1: Variables & Conditionals
// =========================
let studentName = "Mabore";
let grade = 85;
let passed = false;

if (grade >= 50) {
  passed = true;
  console.log(studentName + " has passed with grade: " + grade);
} else {
  console.log(studentName + " has failed.");
}

// =========================
// PART 2: Functions
// =========================

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Greet a person
function greet(name) {
  return "Hello, " + name + "! Welcome to the project.";
}

// Show results in the DOM
document.getElementById("sumResult").textContent =
  "Sum of 5 + 10 = " + calculateSum(5, 10);

document.getElementById("greetResult").textContent = greet(studentName);

// =========================
// PART 3: Loops
// =========================

// Loop 1: For loop to generate numbers
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  document.getElementById("numberList").appendChild(li);
}

// Loop 2: While loop for countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// =========================
// PART 4: DOM Interactions
// =========================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").textContent =
    "The text has been changed using JavaScript!";
});

// 2. Change background color of message div
document.getElementById("intro").style.backgroundColor = "#eaf2f8";

// 3. Dynamically update page title
document.title = "JS Assignment Demo - Completed!";
