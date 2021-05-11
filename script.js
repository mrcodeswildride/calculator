let display = document.getElementById(`display`)
let digits = document.getElementsByClassName(`digit`)
let operators = document.getElementsByClassName(`operator`)
let equal = document.getElementById(`equal`)

let firstDigits = ``
let operator = ``
let secondDigits = ``

for (let digit of digits) {
  digit.addEventListener(`click`, selectDigit)
}

for (let op of operators) {
  op.addEventListener(`click`, selectOperator)
}

equal.addEventListener(`click`, selectEqual)

function selectDigit() {
  display.innerHTML = `${display.innerHTML}${this.innerHTML}`

  if (operator == ``) {
    firstDigits = `${firstDigits}${this.innerHTML}`
  } else {
    secondDigits = `${secondDigits}${this.innerHTML}`
  }
}

function selectOperator() {
  if (firstDigits != `` && operator == ``) {
    display.innerHTML = `${display.innerHTML} ${this.innerHTML} `
    operator = this.id
  }
}

function selectEqual() {
  if (secondDigits != ``) {
    let answer

    if (operator == `add`) {
      answer = Number(firstDigits) + Number(secondDigits)
    } else if (operator == `subtract`) {
      answer = Number(firstDigits) - Number(secondDigits)
    } else if (operator == `multiply`) {
      answer = Number(firstDigits) * Number(secondDigits)
    } else if (operator == `divide`) {
      answer = Number(firstDigits) / Number(secondDigits)
    }

    display.innerHTML = answer

    firstDigits = answer
    operator = ``
    secondDigits = ``
  }
}
