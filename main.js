let stuffandThings = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '/',
        value: '/',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '×',
        value: '*',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '.',
        value: '.',
    },
    {
        text: '=',
        value: '=',
    },
    {
        text: '+',
        value: '+',
    },
];

let please_teachmeJQ = '';

let calculatorElement = document.getElementById('calculator');
let display = document.createElement('div');
display.classList.add('calculator-display');
let clearButton = createButton('C');

clearButton.addEventListener('click', function () {
    please_teachmeJQ = '';
    updateDisplay();
});

calculatorElement.appendChild(display);
calculatorElement.appendChild(clearButton);

stuffandThings.forEach(function (item) {
    let b = createButton(item.text);

    if (item.value === '=') {
        b.classList.add('equals');

        b.addEventListener('click', function () {
        try {
        please_teachmeJQ = '' + eval(please_teachmeJQ);
        }
        catch (e) {

        please_teachmeJQ = '';
        }
          updateDisplay();
        });
    } else {
        if (typeof item.value === 'number') {
            b.classList.add('number');
        } else if (item.value === '.') {
            b.classList.add('decimal');
        } else {
            b.classList.add('operation');
        }

        b.addEventListener('click', function () {
            if (please_teachmeJQ.length >= 9)
                return;

            please_teachmeJQ += '' + item.value;
            updateDisplay();
        });
    }

    calculatorElement.appendChild(b);
});

function updateDisplay () {
    display.textContent = please_teachmeJQ.substring(0, 9);
}

function createButton (text) {
    let b = document.createElement('button');
    b.textContent = text;
    b.classList.add('calculator-button');
    return b;
}
