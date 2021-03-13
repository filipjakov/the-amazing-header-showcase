// # Listen to escape click
window.addEventListener("keyup", ({ code }) => {
  if (code === "Escape") document.location.hash = "";
});

// # Listen to hash changes
const onHashChange = () => {
  const isOpen = document.location.hash === "#nav-open";

  isOpen
    ? document.querySelector('a[href="#_"]').focus()
    : document.querySelector('a[href="#nav-open"]').focus();
};

window.addEventListener("hashchange", onHashChange);
// Initial call
onHashChange();
