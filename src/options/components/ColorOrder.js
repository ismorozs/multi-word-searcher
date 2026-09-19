import create from 'simple-els';
import Message from '@common/messages';
import { COLORS } from '@common/constants';

const Color = create(
  `
  <div @color draggable="true"></div>  
`,
  {
    color_style: (color) => ({ backgroundColor: `rgb(${color})` }),
    color_dragstart: (e, { get, send }) =>  send({ current: get().index }),
    color_dragover: (e) => e.preventDefault(),
    color_dragend: (e, { send }) => send({ dragEnd: true }),
    color_dragenter: (e, { get, send }) => send({ hovered: get().index }),
    color_dragleave: (e, { get, send }) => send({ prevHovered: get().index }),
  },
  `
  .color {
    min-width: 60px;
    height: 40px;
    cursor: grab;
  }

  .color:active {
    cursor: grabbing;
  }
`,
);

export default create(
  (_) =>
    `
  <div .container>
    <h3>Colors order</h3>
    <div .colors>
      ${_(Color, (colors) =>
        colors.map((color, index) => ({
          color,
          index,
        })),
      )}
    </div>
    <button @button>Defaults</button>
  </div> 
`,
  {
    colors: [],
    button_click: () => Message.setColors({ colors: COLORS }),
    onMessage: (data, { set, get }) => {
      if (data.dragEnd) {
        const { current, hovered, prevHovered, colors } = get();
        if (hovered === prevHovered) {
          return;
        }

        const curentColor = colors.splice(current, 1)[0];
        colors.splice(hovered, 0, curentColor);
        Message.setColors({ colors });
        return;
      }
      set(data);
    },
  },
  `
  .container {
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
    padding-left: 60px;
  }

  .colors {
    display: flex;
    width: 600px;
    border: 2px solid black;
  }

  .button {
    position: absolute;
    bottom: 0;
    right: -110px;
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    border: 3px solid black;
    background: none;
    font-size: 18px;
    padding: 5px 10px;
    min-width: 68px;
    box-sizing: border-box;
  }

  .button:hover {
    cursor: pointer;
  }

  .button:active {
    transform: scale(1.02);
  }
`,
);
