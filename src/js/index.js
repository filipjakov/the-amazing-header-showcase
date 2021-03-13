// # Listen to escape click
window.addEventListener("keyup", ({ code }) => {
  if (code === "Escape") document.location.hash = "";
});
