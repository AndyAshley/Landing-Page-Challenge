const textInput = document.getElementById("email");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");
const errorIcon = document.getElementById("error-icon");

const resetForm = () => {
  textInput.classList.toggle("error");
  errorIcon.classList.toggle("active");
  errorMessage.classList.toggle("active");
};

function sendMail() {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (textInput.value.match(validateEmail)) {
    successMessage.classList.toggle("active");
    setTimeout(() => {
      successMessage.classList.toggle("active");
    }, 5000);
  } else {
    textInput.classList.toggle("error");
    errorMessage.classList.toggle("active");
    errorIcon.classList.toggle("active");
    setTimeout(() => {
      resetForm();
    }, 5000);
  }
}
