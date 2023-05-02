let emailSection = document.getElementById("emailId");
let signUpButton = document.getElementById("signBtn");
let vaildEmail = document.getElementById("vaildEmail");
let password = document.getElementById("Password");
let vailPassword = document.getElementById("vailPassword");
let rat;

signUpButton.addEventListener("click", () => {
  rat = emailSection.value;

  if (rat.includes("@") && rat.length >= 10) {
    console.log(rat);
  } else {
    vaildEmail.innerHTML = "Please enter a vaid email.";
    vaildEmail.style.color = "red";
    emailSection.style.border = "2px solid red";
  }
  let cat = password.value;
  let errors = [];

  if (cat.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (cat.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");
  }
  if (cat.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }
  if (cat.length > 0) {
    alert(errors.join("\n"));
    vailPassword.innerHTML = "Please enter a vaid password";
    vailPassword.style.color = "red";
    password.style.border = "2px solid red";
    return false;
  }
});
