const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value);
  } catch (error) {
    inputFieldEl.value = "Error";
  }
}


function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}
function sin() {
  inputFieldEl.value = Math.floor(Math.sin(inputFieldEl.value));
}
function cos() {
  inputFieldEl.value = Math.floor(Math.cos(inputFieldEl.value)  );
}
function tan() {
  inputFieldEl.value = Math.floor(Math.tan(inputFieldEl.value) );
}
function log() {
  inputFieldEl.value = Math.log(inputFieldEl.value);
}