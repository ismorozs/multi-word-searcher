export default (vars) => ({
  '': {
    width: 415,
    position: 'fixed',
    background: 'white',
    border: '3px solid black',
    zIndex: '2147483647',
    boxSizing: 'border-box',
    padding: 0,
    ...vars.INITIAL_POPUP_POSITION
  },

  topbar: {
    height: 15,
    borderBottom: '1px solid black',
    cursor: 'grab',
    position: 'relative',
    background: '#d6f5d6',
    boxSizing: 'border-box',
  },

  searches: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },

  'searches li': {
    float: 'left',
    width: 27,
    height: 15,
    borderRight: '1px solid black',
    cursor: 'pointer',
  },

  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 32,
    cursor: 'pointer',
    borderLeft: '1px solid black',
    background: 'rgba(255, 79, 43, 0.85)',
  },

  'closeButton:hover': {
    background: 'rgb(255, 79, 43)'
  },

  'closeButton::before, closeButton::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 11,
    height: 2,
    top: 6,
    left: 11,
    cursor: 'pointer',
  },

  'closeButton::before': {
    transform: 'rotate(45deg)',
  },

  'closeButton::after': {
    transform: 'rotate(-45deg)',
  },
});
