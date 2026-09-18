import create from 'simple-els';

export default create(
  `
  <li @container>
    <p @distance type="text" title="Distance between substrings"></p>
    <p @string type="text"></p>
  </li>
`,
  {
    string_text: (string) => string,
    distance_text: (distance) => distance,
    container_class: (isHovered) => (isHovered ? ["hovered"] : [""]),
  },
  `
    .container {
      display: flex;
      height: 33px;
      gap: 8px;
    }

    .string {
      margin: 0;
      padding-top: 9px;
      padding-bottom: 0px;
      border-bottom: 2px solid black;
      padding-left: 7px;
      padding-right: 7px;
    }

    .distance {
      position: relative;
      top: -10px;
      font-size: 14px;
      border-bottom: 2px solid black;
      margin-top: 6px;
      margin-bottom: 10px;
      padding-left: 7px;
      padding-right: 7px;
    }

    .container:first-child .distance {
      border: none;
      padding: 0;
    }

    .hovered p {
      border-bottom: 2px solid LimeGreen;
    }
  `,
);
