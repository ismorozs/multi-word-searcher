export function createElement (type, styles) {
  const el = document.createElement(type);

  for (let attr in styles) {
    el.style.setProperty(attr, styles[attr], 'important');
  }

  return el;
}

export function appendStyles(styleStr) {
  const styleEl = document.createElement("style");
  styleEl.appendChild(document.createTextNode(styleStr));
  document.head.appendChild(styleEl);
}
