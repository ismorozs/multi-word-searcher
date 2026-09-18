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
      gap: 8px;
    }

    .string {
      margin: 0;
      padding-top: 6px;
      padding-bottom: 0px;
      border-bottom: 2px solid black;
    }

    .distance {
      position: relative;
      top: -10px;
      font-size: 14px;
      border-bottom: 2px solid black;
      margin-top: 6px;
      margin-bottom: 10px;
      padding-left: 3px;
      padding-right: 3px;
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
