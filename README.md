# GPA Calculator

A simple command-line program written in C++ to calculate the Grade Point Average (GPA) based on user inputs for subjects, credit hours, and scores.

---

## Features
- Allows dynamic input for the number of subjects.
- Validates input for credit hours (1-4) and scores (0-100).
- Calculates GPA based on standard grade points.
- Outputs a well-aligned tabular summary of input and results.

---

## How It Works

1. **Input:**
   - The user specifies the number of subjects.
   - For each subject, the program prompts the user to input:
     - Subject name.
     - Credit hours (1-4).
     - Score (0-100).

2. **Processing:**
   - Grades and grade points are assigned based on the score.
   - The GPA is calculated using the formula:  
     \[
     \text{GPA} = \frac{\text{Total Quality Points}}{\text{Total Credits}}
     \]

3. **Output:**
   - A tabular summary showing:
     - Subject index
     - Subject name
     - Credit hours
     - Score
     - Grade
     - Grade points
   - The calculated GPA.

---

## Usage

1. Clone or download this repository.
2. Compile the program using a C++ compiler:
   ```bash
   g++ -o gpa_calculator gpa_calculator.cpp

## Run output
  ./gpa_calculator
## Sample Output
======================================== 
 Program: GPA CALCULATOR
 Author : [pakcu carlos]
=================================================

Enter the number of subjects: 3

Enter details for subject 1:
Name of Subject: Mathematics
Credit Hours (1-4): 4
Total Score (0-100): 85

Enter details for subject 2:
Name of Subject: Science
Credit Hours (1-4): 3
Total Score (0-100): 72

Enter details for subject 3:
Name of Subject: History
Credit Hours (1-4): 2
Total Score (0-100): 65

=========================================================
INDEX    SUBJECT          CREDIT   SCORE   GRADE    POINT
=========================================================
1        Mathematics         4      85      A       4.00
2        Science             3      72      B+      3.30
3        History             2      65      B       3.00

GPA: 3.54
