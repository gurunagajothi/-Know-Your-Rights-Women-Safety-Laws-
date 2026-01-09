function register() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!email.includes("@")) {
    showToast("Invalid Email");
    return;
  }

  if (phone.length !== 10) {
    showToast("Invalid Phone Number");
    return;
  }

  showToast("Registration Successful 🎉");

  setTimeout(() => {
    window.location.href = "success.html";
  }, 2000);
}
