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

// =====================  SINGUP ======================

function handleSignup(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;

  if (!username || !email || !password || !confirm_password) {
    alert("Please fill all the required data");
    return;
  }
  if (confirm_password !== password) {
    alert("Password and confirm password is not matching");
    return;
  }
  const payload = {
    username,
    email,
    password,
    confirm_password,
  };
  localStorage.setItem("hotel_user", JSON.stringify(payload));
  showLoginForm();
}

// ========================= LOGIN ======================
function handleLogin(event) {
  event.preventDefault();
  let login_email = document.getElementById("login_email").value;
  let login_pass = document.getElementById("login_pass").value;
  if (login_email === "admin@gmail.com" && login_pass === "masai") {
    window.location.href = "admin.html";
    return;
  }

  let getSignupData = JSON.parse(localStorage.getItem("hotel_user"));
  if (
    login_email !== getSignupData.email ||
    login_pass !== getSignupData.password
  ) {
    alert("Wrong credentials, login failed!");
    return;
  } else {
    alert("Logged in successfully🎉");
    window.location.href = "hotel.html";
  }
}
