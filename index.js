const prompt = require('prompt-sync')(); // Importing prompt for input

console.log("======================================== ");
console.log(" Program: GPA CALCULATOR");
console.log(" Author : [pakcu carlos]");
console.log("=================================================");

const SIZE = 5; // Fixed size for now, can be changed based on user preference
const subjects = [];
const credits = [];
const scores = [];
const grades = [];
const points = [];

// Input loop for subjects, credits, and scores
for (let i = 0; i < SIZE; i++) {
    console.log(`\nEnter details for subject ${i + 1}:`);

    subjects[i] = prompt("Name of Subject: ");

    let credit;
    do {
        credit = parseInt(prompt("Credit Hours (1-4): "), 10);
        if (credit < 1 || credit > 4) {
            console.log("Invalid credit hours! Enter between 1-4.");
        }
    } while (credit < 1 || credit > 4);
    credits[i] = credit;

    let score;
    do {
        score = parseFloat(prompt("Total Score (0-100): "));
        if (score < 0 || score > 100) {
            console.log("Invalid score! Please enter between 0-100.");
        }
    } while (score < 0 || score > 100);
    scores[i] = score;
}

// Assign grades and points based on scores
for (let i = 0; i < SIZE; i++) {
    if (scores[i] >= 80) {
        grades[i] = "A";
        points[i] = 4.0;
    } else if (scores[i] >= 75) {
        grades[i] = "A-";
        points[i] = 3.7;
    } else if (scores[i] >= 70) {
        grades[i] = "B+";
        points[i] = 3.3;
    } else if (scores[i] >= 65) {
        grades[i] = "B";
        points[i] = 3.0;
    } else if (scores[i] >= 60) {
        grades[i] = "B-";
        points[i] = 2.7;
    } else if (scores[i] >= 55) {
        grades[i] = "C+";
        points[i] = 2.3;
    } else if (scores[i] >= 50) {
        grades[i] = "C";
        points[i] = 2.0;
    } else if (scores[i] >= 45) {
        grades[i] = "C-";
        points[i] = 1.7;
    } else if (scores[i] >= 40) {
        grades[i] = "D";
        points[i] = 1.0;
    } else {
        grades[i] = "F";
        points[i] = 0.0;
    }
}

let totalQualityPoints = 0;
let totalCredits = 0;

// Calculate quality points and total credits
for (let i = 0; i < SIZE; i++) {
    const qualityPoints = points[i] * credits[i];
    totalQualityPoints += qualityPoints;
    totalCredits += credits[i];
}

// Calculate GPA
const gpa = totalQualityPoints / totalCredits;

console.log("\nCalculation verification:");
console.log(`Total Quality Points: ${totalQualityPoints.toFixed(2)}`);
console.log(`Total Credits: ${totalCredits}`);
console.log(`GPA: ${gpa.toFixed(2)}`);

console.log("\n=========================================================");
console.log("INDEX  SUBJECT         CREDIT   SCORE   GRADE    POINT");
console.log("=========================================================");
for (let i = 0; i < SIZE; i++) {
    console.log(
        `${(i + 1).toString().padEnd(8)}${subjects[i].padEnd(15)}${credits[i]
            .toString()
            .padStart(8)}${scores[i].toFixed(2).padStart(8)}${grades[i].padEnd(9)}${points[
            i
        ].toFixed(2)}`
    );
}
