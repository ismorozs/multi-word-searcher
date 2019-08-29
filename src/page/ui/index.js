export function createElement (type, styles) {
  const el = document.createElement(type);

  for (let attr in styles) {
    el.style.setProperty(attr, styles[attr], 'important');
  }

  return el;
}
