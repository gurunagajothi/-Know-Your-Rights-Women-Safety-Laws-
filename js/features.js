function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function saveProgress(checkbox) {
  localStorage.setItem(checkbox.parentNode.innerText, checkbox.checked);
}

window.onload = () => {
  document.querySelectorAll("input[type='checkbox']").forEach(cb => {
    const saved = localStorage.getItem(cb.parentNode.innerText);
    cb.checked = saved === "true";
  });
};
