# the-amazing-header-showcase

Walkthrough of creating a header component for JS Standup

0. The setup

- show the final product (functionality):

  1. Keeping toggle state in the URL (pragma/hash + `:target` pseudo for styles)
  2. a11y and UX `focus` enhancements (close/open)
  3. Escape press or Overlay click to close
  4. CSS Media Queries for viewport and user preference (reduced motion)
  5. Color switch on scroll (`IntersectionObserver` and `position: sticky`)

- file structure
- Plain old HTML
- PostCSS - mostly for nesting selectors
- Vanilla js
- [Parcel](https://parceljs.org/) as app bundler

1. The Markup

- show the markup
- explain why the menu/close buttons are links and explain the `id`'s
- explain `title` and `aria-label` on the links
- explain the `_` on the close button link

2. The Styles

- basic colors and stuff
- step by step coverage (header CSS)[./src/styles/index.css]
- progressive enhancment: we got basic functionality with no js

3. The Javascript
