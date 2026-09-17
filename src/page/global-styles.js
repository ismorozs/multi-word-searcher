import { FIND_HELPER_CLASS, COLORS } from '@common/constants';

export let stylesString = COLORS.map((color, idx) => `
  @keyframes ${FIND_HELPER_CLASS}${idx} {
    0% {
      outline-color: rgba(${color}, 1);
    }

    100% {
      outline-color: rgba(${color}, 0);
    }
  }

  .${FIND_HELPER_CLASS}${idx} {
    animation-name: '${FIND_HELPER_CLASS}${idx}';
    outline-style: solid;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`).join('');

stylesString += `
  @keyframes outline_blinker {
    50% {
      outline-color: rgba(0, 0, 0, 0);
    }
  }
`;

export function appendStyles (styleStr) {
  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
}

appendStyles(stylesString);