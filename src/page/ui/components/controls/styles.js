import { EXTENSION_ID } from '../../../../common/constants';

export default (vars) => ({

  '': {
    fontSize: 15,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    width: vars.APP_WIDTH,
    marginTop: 18,
    marginLeft: 10,
    marginRight: 10,
    color: 'black',
    lineHeight: 'normal',
  },

  'button': {
    background: 'none',
    fontSize: 15,
    '-webkit-appearance': 'none',
    border: '2px solid black',
    cursor: 'pointer',
    color: 'black',
    fontWeight: '400',
    fontFamily: 'sans-serif',
    padding: '0 8px',
    lineHeight: 'normal',
    wordWrap: 'normal',
    borderRadius: 0,
    height: 24,
    minHeight: 'auto',
    boxShadow: 'none',
  },

  'input': {
    fontFamily: 'sans-serif',
    lineHeight: 'normal',
    padding: '1px 1px !important',
    fontSize: 15,
    height: 24,
  },

  'button:hover': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },

  'button:focus': {
    outline: 'none',
  },

  'button:active': {
    outline: '1px solid LimeGreen',
  },

  '.upperButtons': {
    float: 'right',
    marginTop: 5,
  },

  searchStrings: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    width: vars.MAX_INPUT_WIDTH,
  },

  '.searchString:first-child': {
    marginLeft: 0,
  },

  searchButton: {
    width: 50,
  },

  caseButton: {
    width: 22,
    marginLeft: 2,
    paddingLeft: 0,
    paddingRight: 1,
  },

  '.search-constrols': {
    display: 'inline-block',
    position: 'relative',
  },

  searchId: {
    width: 22,
    paddingLeft: 1,
    paddingRight: 1,
  },

  removeSearch: {
    position: 'absolute',
    padding: 0,
    width: 14,
    height: 14,
    top: -16,
    right: -5,
  },

  'removeSearch::before, removeSearch::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: '100%',
    height: 2,
    top: 4,
    cursor: 'pointer',
  },

  'removeSearch:hover': {
    borderColor: 'OrangeRed',
  },

  'removeSearch:hover::before, removeSearch:hover::after': {
    background: 'DarkRed'
  },

  'removeSearch::before': {
    transform: 'rotate(45deg)',
  },

  'removeSearch::after': {
    transform: 'rotate(-45deg)',
  },

  'searchId:focus': {
    color: 'DarkGreen',
    borderColor: 'LimeGreen',
    outline: '1px solid LimeGreen',
    animation: `'${EXTENSION_ID}_outline_blinker' 1.3s linear infinite`
  },

  '.hidden': {
    display: 'none'
  },

  results: {
    paddingTop: 3,
    paddingBottom: 9,
    overflow: 'auto',
  },

  foundResults: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 12,
    verticalAlign: 'middle',
  },

  highlightPosition: {
    display: 'inline-block',
    paddingTop: 9,
    paddingRight: 3,
    paddingLeft: 5,
    verticalAlign: 'middle',
  },

  'foundResults, controls': {
    float: 'right',
  },

  'blink': {
    height: 23,
    verticalAlign: 'bottom',
    marginRight: 5,
  },

  'moveUp, moveDown': {
    width: 32,
    height: 23,
    position: 'relative',
  },

  'moveUp::before, moveUp::after, moveDown::before, moveDown::after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    background: 'black',
    width: 13,
    height: 3,
    top: 8
  },

  'moveUp:hover::before, moveUp:hover::after, moveDown:hover::before, moveDown:hover::after': {
    background: 'DarkGreen'
  },

  'moveUp::before, moveDown::before': {
    left: 4
  },

  'moveUp::after, moveDown::after': {
    right: 4
  },

  'moveDown::before' : {
    transform: 'rotate(45deg)'
  },

  'moveDown::after' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::before' : {
    transform: 'rotate(-45deg)'
  },

  'moveUp::after' : {
    transform: 'rotate(45deg)'
  },

  'moveLeft:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  'moveRight:hover': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  moveLeft: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 5,
    height: 14,
    border: 'none',
    borderTop: '7px solid transparent',
    borderRight: '7px solid black',
    borderBottom: '7px solid transparent',
  },

  moveRight: {
    padding: 0,
    verticalAlign: 'top',
    marginTop: 5,
    height: 14,
    border: 'none',
    borderTop: '7px solid transparent',
    borderLeft: '7px solid black',
    borderBottom: '7px solid transparent',
  },

});
