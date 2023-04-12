let math = document.querySelector(".math");
let result = document.querySelector(".result");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let subtract = document.querySelector("#subtract");
let add = document.querySelector("#add");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let equal = document.querySelector("#equal");

clear.addEventListener("click", () => {
  math.textContent = "";
  result.textContent = "";
});

backspace.addEventListener("click", () => {
  math.textContent = math.textContent.slice(0, -1);
  result.textContent = "";
});

divide.addEventListener("click", () => {
  if (
    math.textContent[math.textContent.length - 1] === "-" ||
    math.textContent[math.textContent.length - 1] === "*" ||
    math.textContent[math.textContent.length - 1] === "+"
  ) {
    math.textContent = math.textContent.slice(0, -1);
  }
  if (math.textContent[math.textContent.length - 1] != "/") {
    math.textContent += "/";
  }
});

multiply.addEventListener("click", () => {
  if (
    math.textContent[math.textContent.length - 1] === "-" ||
    math.textContent[math.textContent.length - 1] === "+" ||
    math.textContent[math.textContent.length - 1] === "/"
  ) {
    math.textContent = math.textContent.slice(0, -1);
  }
  if (math.textContent[math.textContent.length - 1] != "*") {
    math.textContent += "*";
  }
});

subtract.addEventListener("click", () => {
  if (
    math.textContent[math.textContent.length - 1] === "+" ||
    math.textContent[math.textContent.length - 1] === "*" ||
    math.textContent[math.textContent.length - 1] === "/"
  ) {
    math.textContent = math.textContent.slice(0, -1);
  }
  if (math.textContent[math.textContent.length - 1] != "-") {
    math.textContent += "-";
  }
});

add.addEventListener("click", () => {
  if (
    math.textContent[math.textContent.length - 1] === "-" ||
    math.textContent[math.textContent.length - 1] === "*" ||
    math.textContent[math.textContent.length - 1] === "/"
  ) {
    math.textContent = math.textContent.slice(0, -1);
  }
  if (math.textContent[math.textContent.length - 1] != "+") {
    math.textContent += "+";
  }
});
one.addEventListener("click", () => {
  math.textContent += "1";
});

two.addEventListener("click", () => {
  math.textContent += "2";
});

three.addEventListener("click", () => {
  math.textContent += "3";
});

four.addEventListener("click", () => {
  math.textContent += "4";
});

five.addEventListener("click", () => {
  math.textContent += "5";
});

six.addEventListener("click", () => {
  math.textContent += "6";
});

seven.addEventListener("click", () => {
  math.textContent += "7";
});

eight.addEventListener("click", () => {
  math.textContent += "8";
});

nine.addEventListener("click", () => {
  math.textContent += "9";
});

zero.addEventListener("click", () => {
  math.textContent += "0";
});

dot.addEventListener("click", () => {
  if (math.textContent[math.textContent.length - 1] != ".") {
    math.textContent += ".";
  }
});

equal.addEventListener("click", () => {
  var input = math.textContent;
  if (input != "") {
    result.textContent = eval(input);
  } else {
    result.textContent = "Error";
  }
});