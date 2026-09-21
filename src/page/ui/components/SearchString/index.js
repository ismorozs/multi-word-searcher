import create from "simple-els/min";

import Store from "@page/store";
import styles from "./styles";

const ACTIVE_SEARCH_INPUT_LENGTH = 150;
const MAX_INPUT_WIDTH = 255;
const MIN_INPUT_WIDTH = 110;
const SPACE_BETWEEN_INPUTS = 34;
const LETTER_WIDTH = 11;
const UNFOCUSED_INPUT_PADDING = 14;
const ADD_SIGN_PADDING = 12;

export default create(
  `
  <li @container>
    <input @string type="text">
    <input @distance type="text" title="Distance between substrings">
    <button @remove tabindex="-1" title="Remove substring"></button>
    <button @add-new tabindex="-1" title="Add new substring"></button>
  </li>
`,
  {
    first: { _: false },
    focus: { _: false },
    index: { _: null },
    unfocusedInputs: { _: [] },

    container_style: (index, length) => {
      const style = {};

      if (index > 0 && length > 2) {
        style.marginTop = 20;
      }

      return style;
    },

    string: {
      _: "",
      value: (string) => string,
      keyup: (e) => {
        e.stopPropagation();
        Store.handleSearchStringInput(e);
      },
      click: (e, { get }) => Store.changeSearchStringFocus(get().index),

      style: (focus, string, unfocusedInputs, length, index) => {
        const style = {};

        if (length < 2) {
          style.width = MAX_INPUT_WIDTH - ADD_SIGN_PADDING;
          return style;
        }

        let width;

        if (!focus) {
          width = string.length * LETTER_WIDTH + UNFOCUSED_INPUT_PADDING;
        } else {
          width = unfocusedInputs.reduce((focusedInputLength, input) => {
            return (
              focusedInputLength -
              input.string.length * LETTER_WIDTH -
              UNFOCUSED_INPUT_PADDING -
              SPACE_BETWEEN_INPUTS
            );
          }, MAX_INPUT_WIDTH);

          if (width < MIN_INPUT_WIDTH) {
            width = MAX_INPUT_WIDTH;
          }

          width = width - ADD_SIGN_PADDING;
        }

        style.width = width;

        return style;
      },
    },

    distance: {
      value: (distance) => distance,
      class: (distance) => (distance === null ? ["hidden"] : []),
      keyup: (e, { get }) =>
        Store.updateStringDistance(e.target.value, get().index),
    },

    remove: {
      click: () => Store.removeSearchString(),
      class: (first, focus) => (first || !focus ? ["hidden"] : []),
    },

    addNew: {
      click: () => Store.addNewSearchString(),
      class: (focus) => (!focus ? ["hidden"] : []),
    },

    focus_onChange: (change, { markup, get }) => {
      if (get()[change]) {
        setTimeout(() => markup.string.focus(), 0);
      }
    },
  },
  styles({ SPACE_BETWEEN_INPUTS, ACTIVE_SEARCH_INPUT_LENGTH }),
);