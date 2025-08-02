


// Calculator functionality
const inputBox = document.getElementById('input-box');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;
    // Clear All
    if (value === 'AC') {
      input = '';
      inputBox.value = '';
      // Delete Last Character
    } else if (value === 'DEL') {
      input = input.slice(0, -1);
      inputBox.value = input;
      //Calculate The results
    } else if (value === '=') {
      try {
        // Replace % with /100 for percentage calculation
        // let expression = input.replace(/%/g, '/100');
        // input = eval(expression).toString();
        // inputBox.value = input;
        String=eval(input)
        inputBox.value = String;
      } catch {
        inputBox.value = 'Error';
        input = '';
      }
    } else {
      input += value;
      inputBox.value = input;
    }
  });
});
