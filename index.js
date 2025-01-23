<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPA Calculator</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>GPA Calculator</h2>
    <p>Author: [pakcu carlos]</p>

    <h3>Enter Subject Details:</h3>
    <div id="subjectInputs"></div>
    <button onclick="addSubject()">Add Subject</button>
    <button onclick="calculateGPA()">Calculate GPA</button>

    <h3>Results:</h3>
    <table>
        <thead>
            <tr>
                <th>Index</th>
                <th>Subject</th>
                <th>Credit</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Point</th>
            </tr>
        </thead>
        <tbody id="resultsTable">
        </tbody>
    </table>
    <p>Total Quality Points: <span id="totalQualityPoints"></span></p>
    <p>Total Credits: <span id="totalCredits"></span></p>
    <p>GPA: <span id="gpa"></span></p>

    <script>
        const subjects = [];
        const credits = [];
        const scores = [];

        function addSubject() {
            const subjectInput = document.createElement('input');
            subjectInput.placeholder = 'Subject Name';
            document.getElementById('subjectInputs').appendChild(subjectInput);
            subjects.push(subjectInput);

            const creditInput = document.createElement('input');
            creditInput.placeholder = 'Credit Hours (1-4)';
            creditInput.type = 'number';
            document.getElementById('subjectInputs').appendChild(creditInput);
            credits.push(creditInput);

            const scoreInput = document.createElement('input');
            scoreInput.placeholder = 'Score (0-100)';
            scoreInput.type = 'number';
            document.getElementById('subjectInputs').appendChild(scoreInput);
            scores.push(scoreInput);

            document.getElementById('subjectInputs').appendChild(document.createElement('br'));
        }

        function calculateGPA() {
            const grades = [];
            const points = [];
            let totalQualityPoints = 0;
            let totalCredits = 0;

            for (let i = 0; i < subjects.length; i++) {
                const credit = parseInt(credits[i].value);
                const score = parseFloat(scores[i].value);
                let grade = '';
                let point = 0;

                if (score >= 80) {
                    grade = 'A'; point = 4.0;
                } else if (score >= 75) {
                    grade = 'A-'; point = 3.7;
                } else if (score >= 70) {
                    grade = 'B+'; point = 3.3;
                } else if (score >= 65) {
                    grade = 'B'; point = 3.0;
                } else if (score >= 60) {
                    grade = 'B-'; point = 2.7;
                } else if (score >= 55) {
                    grade = 'C+'; point = 2.3;
                } else if (score >= 50) {
                    grade = 'C'; point = 2.0;
                } else if (score >= 45) {
                    grade = 'C-'; point = 1.7;
                } else if (score >= 40) {
                    grade = 'D'; point = 1.0;
                } else {
                    grade = 'F'; point = 0.0;
                }

                grades.push(grade);
                points.push(point);
                totalQualityPoints += point * credit;
                totalCredits += credit;

                const row = document.createElement('tr');
                row.innerHTML = `<td>${i + 1}</td><td>${subjects[i].value}</td><td>${credit}</td><td>${score}</td><td>${grade}</td><td>${point.toFixed(2)}</td>`;
                document.getElementById('resultsTable').appendChild(row);
            }

            const gpa = totalQualityPoints / totalCredits;
            document.getElementById('totalQualityPoints').textContent = totalQualityPoints.toFixed(2);
            document.getElementById('totalCredits').textContent = totalCredits;
            document.getElementById('gpa').textContent = gpa.toFixed(2);
        }
    </script>
</body>
</html>
