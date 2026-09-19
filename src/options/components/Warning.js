import create from 'simple-els';
import Message from '@common/messages';

export default create(
  `
  <div .container>
    <h3>Warning</h3>
    <p>Keeping this tab open when performing searches in other tabs<br> may cause extension  errors. <span .note>(in very rare cases)</span></p>
    <div @controls>
      <label @label>
        <input type="checkbox" @dont-show>
        Don't show again
      </label>
      <button @button>OK</button>
    </div>
  </div>
`,
  {
    button_click: (e, { markup }) =>
      Message.closingWarning(!markup.dontShow.checked),
  },
  `
  .container {
    font-family: sans-serif;
    background: white;
    border: 3px solid black;
    padding: 30px 40px;
    text-align: center;
    font-size: 18px;
  }

  .container h3 {
    font-size: 24px;
    margin-top: 0;
  }

  .container p {
    margin-bottom: 30px;
    line-height: 1.5;
  }

  .controls {
    position: relative;
  }

  .note {
    font-size: 16px;
  }

  .label {
    position: absolute;
    top: 8px;
    right: 40px;
    font-size: 16px;
  }

  .button {
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    border: 3px solid black;
    background: none;
    font-size: 18px;
    padding: 6px 30px;
    min-width: 68px;
    box-sizing: border-box;
  }

  .button:hover {
    cursor: pointer;
    color: rgb(145, 30, 180);
    border-color: rgb(145, 30, 180);
  }

  .button:active {
    transform: scale(1.02);
  }
`,
);