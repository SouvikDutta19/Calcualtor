let string = "";

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the input box element
  const inputBox = document.querySelector('.inputbox');

  // Get all the calculator buttons
  const buttons = document.querySelectorAll('.jsbtn');

  // Attach event listeners to the buttons
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      const buttonText = button.textContent;

      if (buttonText === '=') {
        string = eval(string);
        inputBox.value = string;
      }
      else if (buttonText === 'AC') {
        string = "";
        inputBox.value = string;
      }
      else {
        string += buttonText;
        inputBox.value = string;
      }
    });
  });
});
