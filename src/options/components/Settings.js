
import create from "simple-els";
import Store from "@background/state";
import Message from "@common/messages";
import SearchString from "./SearchString";
import ColorOrder from './ColorOrder';
import { fromFlatStringToStructure } from "@common/helpers";

export default create(
  (_) => `
  <div .container>
    ${_(ColorOrder, (colors) => ({ colors }))}
    <div .searches-container>
      <div>
        <h3>Recent Searches</h3>
        <ul .searches>
          ${_(SearchString, (recentSearches) =>
            recentSearches.map((s) => ({
              searchString: fromFlatStringToStructure(s),
              type: "Recent",
            })),
          )}
        </ul>
      </div>
      <div>
        <h3>Saved Searches</h3>
        <ul .searches>
          ${_(SearchString, (favoriteSearches) =>
            favoriteSearches.map((s) => ({
              searchString: fromFlatStringToStructure(s),
              type: "Favorite",
            })),
          )}
        </ul>
      </div>
    </div>
  </div>
`,
  {
    recentSearches: [],
    favoriteSearches: [],
    colors: [],

    onChange: async (changes, { set }) => {
      if (changes > 0) {
        const { recentSearches, favoriteSearches, colors } = await Message.getData();

        Store.onChange(
          ["recentSearches", "favoriteSearches", "colors"],
          (_, { recentSearches, favoriteSearches, colors }) =>
            set({ recentSearches, favoriteSearches, colors }),
        );

        Store.set({ recentSearches, favoriteSearches, colors });
      }
    },

    onMessage: ({ action, string }) => {
      Message[action]({ string });
    },
  },
  `
    .container {
      font-family: sans-serif;
      font-size: 18px;
      margin-left: 50px;
      margin-top: 20px;
      text-align: center;
    }

    .searches-container {
      display: flex;
    }

    .searches-container h3 {
      margin-bottom: 0px;
    }

    .searches-container ul {
      list-style: none;
    }

    .searches-container > div {
      min-width: 350px;
    }

    .searches {
      margin-top: 0px;
      padding-left: 0;
    }
  `,
);