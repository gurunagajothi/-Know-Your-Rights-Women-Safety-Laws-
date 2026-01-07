function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "admin@example.com" && password === "123456") {
    window.location.href="dashboard.html";
  } else if(email === "user@example.com" && password === "123456") {
    window.location.href="dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
