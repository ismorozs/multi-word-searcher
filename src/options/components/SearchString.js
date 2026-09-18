import create from 'simple-els';
import SearchStringSegment from './SearchStringSegment';
import { fromStructureToFlatString } from '@common/helpers';

export default create(
  (_) => `
  <li>
    <div @wrapper>
      <ul @container>
        ${_(SearchStringSegment, (searchString, isContainerHovered) =>
          searchString.map((searchString) => ({
            ...searchString,
            isHovered: isContainerHovered,
          })),
        )}
        <div @buttons>
          <button @remove title="Remove search"></button>
          <button @add title="Save search"></button>
        </div>
      </ul>  
    </div>
  </li>  
`,
  {
    searchString: [],
    searchStringWidth: 0,
    isContainerHovered: false,
    wrapper: {
      mouseenter: (e, { set, markup }) => {
        set({
          isContainerHovered: true,
          searchStringWidth: Math.round(
            markup.container.getBoundingClientRect().width,
          ),
        });
      },
      mouseleave: (e, { set }) => set({ isContainerHovered: false }),
    },
    buttons_class: (isContainerHovered) =>
      isContainerHovered ? ["visible"] : ["hidden"],
    buttons_style: (searchStringWidth) => ({ left: searchStringWidth }),
    add_class: (type) => (type === "Favorite" ? ["hidden"] : []),
    add_click: (e, { get, send }) => {
      const { searchString } = get();
      send({
        action: "addFavoriteSearch",
        string: fromStructureToFlatString(searchString),
      });
    },
    remove_click: (e, { get, send }) => {
      const { type, searchString } = get();
      const action = `remove${type}Search`;
      send({
        action,
        string: fromStructureToFlatString(searchString),
      });
    },
  },

  `
    .wrapper {
      padding: 12px;
      padding-left: 26px;
      padding-right: 26px;
      display: flex;
      justify-content: center;
      min-height: 38px;
    }

    .container {
      display: flex;
      gap: 16px;
      padding-left: 0px;
      margin-left: 80px;
      margin-right: 80px;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    li:nth-child(even) .wrapper {
      background-color: rgba(210, 210, 210, 0.2);
    }

    .hidden {
      display: none !important;
    }

    .buttons {
      position: absolute;
      gap: 8px;
      margin-top: 3px;
      margin-left: 16px;
      padding-right: 10px;
    }

    .visible {
      display: flex;
    }

    .add {
      border: solid DarkGreen;
      border-width: 0 4px 4px 0;
      width: 14px;
      height: 14px;
      display: inline-block;
      padding: 3px;
      transform: rotate(-45deg);
      cursor: pointer;
      background-color: transparent;
      position: relative;
      top: 6px;
    }

    .add:hover {
      border: solid LimeGreen;
      border-width: 0 4px 4px 0;
    }

    .remove {
      width: 22px;
      height: 22px;
      padding: 0px;
      border: none;
      position: relative;
      background-color: transparent;
    }

    .remove::before, .remove::after {
      content: '';
      display: block;
      position: absolute;
      background: black;
      cursor: pointer;
      width: 100%;
    }

    .remove::before, .remove::after {
      background: DarkRed;
      height: 4px;
      top: 12px;
    }

    .remove:hover::before, .remove:hover::after {
      background: OrangeRed;
    }

    .remove::before {
      transform: rotate(45deg);
    }

    .remove::after {
      transform: rotate(-45deg);
    }
  `,
);
