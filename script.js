let result = document.getElementById('result');

function updateResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function compute(operator) {
  let expression = result.value;
  let operands = expression.split(operator);
  let operand1 = parseFloat(operands[0]);
  let operand2 = parseFloat(operands[1]);
  let computedResult;

  switch (operator) {
    case '+':
      computedResult = operand1 + operand2;
      break;
    case '-':
      computedResult = operand1 - operand2;
      break;
    case '*':
      computedResult = operand1 * operand2;
      break;
    case '/':
      computedResult = operand1 / operand2;
      break;
  }

  result.value = computedResult;
}