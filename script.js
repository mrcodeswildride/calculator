var display = document.getElementById("display");
var digits = document.querySelectorAll(".digit");
var operators = document.querySelectorAll(".operator");
var equal = document.getElementById("equal");

var firstDigits = "";
var operator = "";
var secondDigits = "";

for (var i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", selectDigit);
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", selectOperator);
}

equal.addEventListener("click", selectEqual);

function selectDigit() {
    display.innerHTML = display.innerHTML + this.innerHTML;

    if (operator == "") {
        firstDigits = firstDigits + this.innerHTML;
    }
    else {
        secondDigits = secondDigits + this.innerHTML;
    }
}

function selectOperator() {
    if (firstDigits != "" && operator == "") {
        display.innerHTML = display.innerHTML + " " + this.innerHTML + " ";
        operator = this.getAttribute("id");
    }
}

function selectEqual() {
    if (secondDigits != "") {
        var answer;

        if (operator == "plus") {
            answer = parseFloat(firstDigits) + parseFloat(secondDigits);
        }
        else if (operator == "minus") {
            answer = parseFloat(firstDigits) - parseFloat(secondDigits);
        }
        else if (operator == "times") {
            answer = parseFloat(firstDigits) * parseFloat(secondDigits);
        }
        else if (operator == "divide") {
            answer = parseFloat(firstDigits) / parseFloat(secondDigits);
        }

        display.innerHTML = isNaN(answer) ? "Error" : answer;

        firstDigits = display.innerHTML;
        operator = "";
        secondDigits = "";
    }
}
