function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function changeTheme(color) {
  if (color === "pink") {
    document.body.style.background = "#ffe4ec";
  } else if (color === "blue") {
    document.body.style.background = "#e3f2fd";
  } else if (color === "green") {
    document.body.style.background = "#e8f5e9";
  }
}
