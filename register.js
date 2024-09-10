const btnRegister = document.querySelector(".btnRegister");
const btnLogin = document.querySelector(".btnLogin");

const btnEyeOpen = document.querySelector("#icon-eye-open");
const btnEyeClose = document.querySelector("#icon-eye-close");
const inputPasswordEye = document.querySelector(".password");

const btnEyeShow = document.querySelector("#icon-eye-show");
const btnEyeNone = document.querySelector("#icon-eye-none");
const inputConPasswordEye = document.querySelector(".confirmPassword");

btnEyeClose.addEventListener("click", () => {
  btnEyeClose.classList.add("active");

  btnEyeOpen.classList.remove("active");

  inputPasswordEye.type === "password" ? inputPasswordEye.type = "text" : inputPasswordEye.type = "password";

});

btnEyeOpen.addEventListener("click", () => {
  btnEyeOpen.classList.add("active");

  btnEyeClose.classList.remove("active");

  inputPasswordEye.type === "password" ? inputPasswordEye.type = "text" : inputPasswordEye.type = "password";

});

btnEyeShow.addEventListener("click", () => {
  btnEyeShow.classList.add("active");

  btnEyeNone.classList.remove("active");

  inputConPasswordEye.type === "password" ? inputConPasswordEye.type = "text" : inputConPasswordEye.type = "password";

});

btnEyeNone.addEventListener("click", () => {
  btnEyeNone.classList.add("active");

  btnEyeShow.classList.remove("active");

  inputConPasswordEye.type === "password" ? inputConPasswordEye.type = "text" : inputConPasswordEye.type = "password";

});

btnRegister.addEventListener("click", () => {
  let inputNames = document.querySelector(".name").value;
  let inputEmail = document.querySelector(".email").value;
  let inputPassword = document.querySelector(".password").value;
  let inputConPassword = document.querySelector(".confirmPassword").value;

  if (
    inputNames === "" &&
    inputEmail === "" &&
    inputPassword === "" &&
    inputConPassword === ""
  ) {
    return alert("vui long nhap day du thong tin");
  }

  if (inputPassword != inputConPassword) {
    alert("pass chua trung khop");
    reset();
    return;
  }

  let product = {
    name: inputNames,
    email: inputEmail,
    password: inputPassword,
    confirmPassword: inputConPassword,
  };

  // let dataProduct = JSON.parse(localStorage.getItem("product")) || [];

  // let saveProduct = [...dataProduct, product];

  localStorage.setItem("product", JSON.stringify(product));

  alert("ok");

  window.location.href = "login.html";
});

btnLogin.addEventListener("click", () => {
  window.location.href = "login.html";
});

function reset() {
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".password").value = "";
  document.querySelector(".confirmPassword").value = "";
}
