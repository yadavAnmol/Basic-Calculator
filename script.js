document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector(".input");
  const buttons = document.querySelectorAll("button");

  let inputString = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.innerText;

      if (buttonText === "AC") {
        inputString = "";
      } else if (buttonText === "CL") {
        inputString = inputString.slice(0, -1);
      } else if (buttonText === "=") {
        try {
          inputString = eval(inputString).toString();
        } catch {
          inputString = "Error";
        }
      } else {
        inputString += buttonText;
      }

      inputField.value = inputString;
    });
  });
});
