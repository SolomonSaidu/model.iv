// Get elements by ID
let form = document.getElementById('form');
let input = document.getElementById('input');
let runBtn = document.getElementById('run');
let clearBtn = document.getElementById('clear');
let output = document.getElementById('output');

// Data points (study time and grades)
let x = [5, 10, 15]; // Study hours
let y = [40, 50, 60]; // Grades

// Linear Regression Function
function Model(val) {
    let slope = (y[1] - y[0]) / (x[1] - x[0]); // Calculate slope (m)
    let constant = y[0] - slope * x[0]; // Calculate intercept (c)
    let fOutput = constant + slope * val; // Predict y = mx + c

    return fOutput;
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let parsedText = parseInt(input.value);
    if (isNaN(parsedText) || parsedText < 0) {
        output.innerText = 'Please enter a valid study hour!';
        return;
    }
    output.innerText = `Predicted Grade: ${Model(parsedText).toFixed(2)}%`;
});

// Clear button
clearBtn.addEventListener('click', () => {
    input.value = '';
    output.innerText = '';
});
