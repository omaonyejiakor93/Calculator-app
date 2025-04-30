let currentInput = '';

function press(value) {
  currentInput += value;
  document.getElementById('display').innerText = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').innerText = currentInput;
  } catch (e) {
    document.getElementById('display').innerText = 'Error';
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').innerText = '0';
}