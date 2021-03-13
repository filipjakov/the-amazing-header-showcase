// # 3.1 Listen to escape click
window.addEventListener("keyup", ({ code }) => {
  if (code === "Escape") document.location.hash = "";
});

// # 3.2 Listen to hash changes
const onHashChange = () => {
  const isOpen = document.location.hash === "#nav-open";

  document.body.classList.toggle("lock", isOpen); // added 3.3
  document.querySelector(".overlay").classList.toggle("show", isOpen); // added 3.4

  isOpen
    ? document.querySelector('a[href="#_"]').focus()
    : document.querySelector('a[href="#nav-open"]').focus();
};

window.addEventListener("hashchange", onHashChange);
// Initial call
onHashChange();

// # 3.3 Listen to screen changes
const onScreenMatch = ({ matches }) =>
  document.body.classList.toggle(
    "lock",
    document.location.hash === "#nav-open" && matches
  );

const mediaQueryList = window.matchMedia("(max-width: 48em)");

mediaQueryList.addListener(onScreenMatch);

// Initial call
onScreenMatch({ matches: mediaQueryList.matches });

// # TODO: focus traps/inert -> covered by Kiki
