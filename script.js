const btnLogin = document.querySelector(".button");
const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const noUsernameMsg = document.querySelector(".username");
const noPasswordMsg = document.querySelector(".password");
const loginMsg = document.querySelector(".wrapper");
//Set random color generator
const randomNumber = () => Math.ceil(Math.random() * 255);
console.log(randomNumber());
const randomColor = (num1, num2, num3) => `rgb(${num1}, ${num2}, ${num3})`;
console.log(randomColor(randomNumber(), randomNumber(), randomNumber()));
//Set user input value color to (random)
userName.style.color = randomColor(
  randomNumber(),
  randomNumber(),
  randomNumber()
);
password.style.color = randomColor(
  randomNumber(),
  randomNumber(),
  randomNumber()
);

//display messages
const span = document.createElement("span");
span.innerHTML = "This field cannot be empty";
const span1 = document.createElement("span");
span1.textContent = `Both fields cannot be empty`;
const span2 = document.createElement("span");
span2.textContent = `LOOL. Did you really think that was going to work? 🤣🤣🤣`;
const removeMsg = () => (span.style.display = "hidden");
//Form Functionality
btnLogin.addEventListener("click", function () {
  if (userName.value == "" && passWord.value == "") {
    noPasswordMsg.appendChild(span1);
  } else if (userName.value == "") {
    noUsernameMsg.appendChild(span);
  } else if (passWord.value == "") {
    noPasswordMsg.appendChild(span);
  } else {
    loginMsg.appendChild(span2);
  }
  console.log(userName);
});
