function displayDateTime() {
    var currentDate = new Date();
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.innerHTML = "Current Date and Time: " + currentDate;
  }
  
  // Call the function when the page loads
  window.onload = function() {
    displayDateTime();
  };
  //2
  function greetUser() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
  
    if (firstName && lastName) {
      var fullName = firstName + " " + lastName;
      alert("Hello, " + fullName + "! Welcome!");
    } else {
      alert("enter your names");
    }
  }
//3
function addNumbers() {
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
  
    if (num1+num2) {
      var sum = num1 + num2;
     console.log(sum);
    } else {
      console.log( "Please enter valid numbers.");
    }
  }
  //5
  function squareNumber(number) {
    console.log( number * number);
  }
  //6
  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  
  