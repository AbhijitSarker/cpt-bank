//1 add click event handeler with login button
document.getElementById("btn-login").addEventListener("click", function () {
  //2 get the email addresss inside the email field
  //always remember to use .value to get the text from input  field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //3 get the password inside the password field
  //set id in the html element
  //get the element
  //get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //DANGER: DONT VARIRY email password on the client side
  //4 varify email password
  if (email === "abhijit@sarker.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User! Please enter valid password and email address");
  }
});
