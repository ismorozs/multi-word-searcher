export default (vars) => `

  .container {
    position: relative;
    display: inline-block;
    margin-left: ${vars.SPACE_BETWEEN_INPUTS}px;
    margin-top: 20px;
  }

  .container:first-child {
    margin-left: 0;
    margin-top: 0;
  }

  .container:nth-child(-n + 2) {
    margin-top: 0;
  }

  .string {
    box-sizing: border-box;
    font-size: 15px;
    width: ${vars.ACTIVE_SEARCH_INPUT_LENGTH}px;
    -webkit-appearance: none;
    border-width: 0px;
    border-bottom: 2px solid black;
    background: white;
    color: black;
    padding: 1px;
  }

  .string:focus {
    outline: none;
    border-color: LimeGreen;
  }

  .distance {
    width: ${vars.SPACE_BETWEEN_INPUTS - 10}px;
    position: absolute;
    left: -30px;
    top: -17px;
    -webkit-appearance: none;
    border-width: 0px;
    border-bottom: 1px solid black;
    background: white;
    color: black;
    font-size: 13px;
    height: 16px;
  }

  .distance:focus {
    outline: none;
    border-color: LimeGreen;
  }

  .hidden {
    display: none;
  }

  .add-new, .remove {
    width: 10px;
    height: 10px;
    padding: 0px;
    position: absolute;
    border: none;
  }

  .add-new {
    right: -14px;
    bottom: 7px;
  }

  .remove {
    left: -14px;
    bottom: 4px;
  }

  .add-new::before, .add-new::after, .remove::before, .remove::after {
    content: '';
    display: block;
    position: absolute;
    background: black;
    cursor: pointer;
    width: 100%;
  }

  .add-new::before, .add-new::after {
    background: DarkGreen;
    height: 2px;
    top: 5px;
  }

  .add-new:hover::before, .add-new:hover::after {
    background: LimeGreen;
  }

  .remove::before, .remove::after {
    background: DarkRed;
    height: 2px;
    top: 5px;
  }

  .remove:hover::before, .remove:hover::after {
    background: OrangeRed;
  }

  .add-new::before {
    transform: rotate(90deg);
  }

  .remove::before {
    transform: rotate(45deg);
  }

  .remove::after {
    transform: rotate(-45deg);
  }

`;
