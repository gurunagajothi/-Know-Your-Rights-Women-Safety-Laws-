function showToast(msg) {
  const toast = document.createElement("div");
  toast.innerText = msg;
  toast.style.cssText =
    "position:fixed;bottom:20px;right:20px;background:#ff3366;color:white;padding:10px;border-radius:6px;";
  document.body.appendChild(toast);

  setTimeout(()=> toast.remove(), 3000);
}
