let url = "https://m5r3server.herokuapp.com/api/hotel";

let login_text = document.querySelector(".login_text");
let register_text = document.querySelector(".register_text");
let login_box = document.querySelector(".login_box");
let signup_box = document.querySelector(".signup_box");

login_text.addEventListener("click", showLoginForm);
register_text.addEventListener("click", showRegisterForm);

function showLoginForm() {
  login_box.style.display = "block";
  signup_box.style.display = "none";
  login_text.classList.add("active_tab");
  register_text.classList.remove("active_tab");
}
function showRegisterForm() {
  login_box.style.display = "none";
  signup_box.style.display = "block";
  login_text.classList.remove("active_tab");
  register_text.classList.add("active_tab");
}
