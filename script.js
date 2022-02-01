const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

// register link
register.addEventListener("click", () => {
  loginSection.style.display = "none";
  registerSection.style.display = "flex";
});

// login to account
login.addEventListener("click", () => {
  registerSection.style.display = "none";
  loginSection.style.display = "flex";
});

// forgot pass
forgot.addEventListener("click", () => {
  loginSection.style.display = "none";
  forgotSection.style.display = "flex";
});

// close dive
close.addEventListener("click", () => {
  forgotSection.style.display = "none";
  loginSection.style.display = "flex";
});
