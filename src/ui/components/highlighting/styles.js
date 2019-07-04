export default (vars) => ({
  position: 'absolute',
  height: vars.rect.height + 'px',
  width: vars.rect.width + 'px',
  top: vars.scrollTop + vars.rect.y + 'px',
  left: vars.scrollLeft + vars.rect.x + 'px',
  'z-index': 2147483645,
  'pointer-events': 'none',
  background: 'rgba(' +  vars.color + ', 0.25)',
  'outline-width': '3px',
});
