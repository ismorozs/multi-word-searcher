export default (vars) => ({

  '': {
    position: 'relative',
    display: 'inline-block',
    marginLeft: vars.SPACE_BETWEEN_INPUTS,
    marginTop: 5,
    marginBottom: 14,
  },

  string: {
    boxSizing: 'border-box',
    fontSize: 15,
    width: vars.ACTIVE_SEARCH_INPUT_LENGTH,
    '-webkit-appearance': 'none',
    borderWidth: '0',
    borderBottom: '2px solid black',
    background: 'white',
    color: 'black',
    padding: 1,
  },

  'string:focus': {
    outline: 'none',
    borderColor: 'LimeGreen'
  },

  distance: {
    width: vars.SPACE_BETWEEN_INPUTS - 10,
    position: 'absolute',
    left: -30,
    top: -17,
    '-webkit-appearance': 'none',
    borderWidth: 0,
    borderBottom: '1px solid black',
    background: 'white',
    color: 'black',
    fontSize: 13,
    height: 16,
  },

  'distance:focus': {
    outline: 'none',
    borderColor: 'LimeGreen'
  },

  '.hidden': {
    display: 'none'
  },

  'addNew, remove': {
    width: 10,
    height: 10,
    padding: 0,
    position: 'absolute',
    border: 'none',
  },

  addNew: {
    right: -14,
    bottom: 4,
  },

  remove: {
    left: -14,
    bottom: 4,
  },

  'addNew::before, addNew::after, remove::before, remove::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    cursor: 'pointer',
    width: '100%',
  },

  'addNew::before, addNew::after': {
    background: 'DarkGreen',
    height: 2,
    top: 5,
  },

  'addNew:hover::before, addNew:hover::after': {
    background: 'LimeGreen',
  },

  'remove::before, remove::after': {
    background: 'DarkRed',
    height: 2,
    top: 5,
  },

  'remove:hover::before, remove:hover::after': {
    background: 'OrangeRed',
  },

  'addNew::before': {
    transform: 'rotate(90deg)',
  },

  'remove::before': {
    transform: 'rotate(45deg)',
  },

  'remove::after': {
    transform: 'rotate(-45deg)',
  }

});
