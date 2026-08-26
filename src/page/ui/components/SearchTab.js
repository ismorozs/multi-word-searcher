import create from 'simple-els/min';
import Store from '@page/store';

export default create(
  `
  <li @tab></li>  
`,
  {
    title: "",
    color: "",
    tab: {
      attrs: (title) => ({ title }),
      style: (color) => ({ backgroundColor: "rgba(" + color + ", 0.5)" }),
      click: (e, { get }) =>
        Store.setCurrentSearch(get().idx),
      contextmenu: async (e, { get }) => {
        e.preventDefault();
        Store.removeSearch({ all: e.shiftKey, idx: get().idx });
      },
    },
  },
  `
  .tab {
    float: left;
    width: 27px;
    height: 15px;
    borderRight: 1px solid black;
    cursor: pointer;
  }
`,
);