document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name.length < 3) {
    alert("Please enter a valid name");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Save login info
  localStorage.setItem("loggedInUser", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("loginType", "Email");

  // Redirect
  window.location.href = "dashboard.html";
});
