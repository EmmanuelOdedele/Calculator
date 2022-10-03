let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
          if (window.confirm("Do you need help with Google?")) {
            (window.location.href = "http://www.google.com", "_blank");
          }
        }

        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
