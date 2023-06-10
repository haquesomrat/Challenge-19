let form = document.querySelector("form");
eInput = form.querySelector(".footer-input");
text = form.querySelector(".error-msg");

form.addEventListener(".footer-btn", (e) => {
  e.preventDefault(); //preventing form from submitting
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
  form.classList.add("error");
  form.classList.remove("valid");
  if (eInput.value === "") {
    text.innerText = "Email can't be blank";
  } else if (!eInput.value.match(pattern)) {
    text.innerText = "Pleas Enter a valid email";
  } else {
    form.classList.replace("error", "valid");
    text.innerText = "This a valid Email";
  }
});
