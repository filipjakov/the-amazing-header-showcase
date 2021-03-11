// Listen to hash changes
const onHashChange = () => {
  const isOpen = document.location.hash === "#nav-open";

  document.body.classList.toggle("lock", isOpen);

  isOpen
    ? document.querySelector('a[href="#_"]').focus()
    : document.querySelector('a[href="#nav-open"]').focus();
};

window.addEventListener("hashchange", onHashChange, {
  passive: true,
});

// Why calling it initally?
onHashChange();

// Listen to media changes
const onScreenMatch = ({ matches }) =>
  document.body.classList.toggle(
    "lock",
    document.location.hash === "#nav-open" && matches
  );

const mediaQueryList = window.matchMedia("(max-width: 48em)");

mediaQueryList.addListener(onScreenMatch);

// Why calling it initally?
onScreenMatch({ matches: mediaQueryList.matches });

// IO detects when element sticks
const header = document.querySelector("header");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(header);

// TODO: focus traps/inert -> covered by Kiki
