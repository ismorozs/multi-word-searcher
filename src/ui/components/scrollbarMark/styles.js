export default (vars) => ({
  position: 'fixed',
  height: '5px',
  width: '15px',
  top: window.innerHeight / document.body.scrollHeight * vars.topPosition + 'px',
  right: '0px',
  'z-index': 2147483645,
  cursor: 'pointer',
  background: 'rgba(' +  vars.color + ', 0.5)',
});
