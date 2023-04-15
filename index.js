let stat = "";
let string = "";
let palindrome = true;
let clear = document.getElementById("clear");
let strings = document.getElementById("str");
let result = document.getElementById("stat");

const validate = () => {
  string = document.getElementById("string").value;
  n = string.length;

  if (string == "") {
    alert("No string found.");
  } else {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (string[i] == "1" || string[i] == "0") {
        if (string[i] != string[n - i - 1]) {
          palindrome = false;
          break;
        }
      } else {
        palindrome = false;
        break;
      }
    }
    checkStatus();
  }
};

const checkStatus = () => {
  if (palindrome == true) {
    stat = "A palindrome";
  } else {
    stat = "Not a palindrome";
  }
  palindrome = true;
  strings.innerText += "\n" + string;
  result.innerText += "\n" + stat;
};

const clean = () => {
  strings.innerText = "";
  result.innerText = "";
};
