// # Listen to hash changes
const onHashChange = () => {
  const isOpen = document.location.hash === "#nav-open";

  document.body.classList.toggle("lock", isOpen);
  document.querySelector(".overlay").classList.toggle("show", isOpen);

  isOpen
    ? document.querySelector('a[href="#_"]').focus()
    : document.querySelector('a[href="#nav-open"]').focus();
};

window.addEventListener("hashchange", onHashChange);

// Explain the initial call
onHashChange();

// # Listen to escape click
window.addEventListener("keyup", ({ code }) => {
  if (code === "Escape") document.location.hash = "";
});

// # Listen to screen changes changes
const onScreenMatch = ({ matches }) =>
  document.body.classList.toggle(
    "lock",
    document.location.hash === "#nav-open" && matches
  );

const mediaQueryList = window.matchMedia("(max-width: 48em)");

mediaQueryList.addListener(onScreenMatch);

// Explain the initial call
onScreenMatch({ matches: mediaQueryList.matches });

// # IO detects when element sticks
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(document.querySelector("header"));

// # TODO: focus traps/inert -> covered by Kiki
