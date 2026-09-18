
import create from "simple-els";
import Store from "@background/state";
import Message from "@common/messages";
import SearchString from "./SearchString";
import { fromFlatStringToStructure } from "@common/helpers";

export default create(
  (_) => `
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
`,
  {
    recentSearches: [],
    favoriteSearches: [],

    onChange: async (changes, { set }) => {
      if (changes > 0) {
        const { recentSearches, favoriteSearches } =
          await Message.getSearches();
        Store.set({ recentSearches, favoriteSearches });
        set({ recentSearches, favoriteSearches });

        Store.onChange(
          ["recentSearches", "favoriteSearches"],
          (_, { recentSearches, favoriteSearches }) =>
            set({ recentSearches, favoriteSearches }),
        );
      }
    },

    onMessage: ({ action, string }) => {
      Message[action]({ string });
    },
  },
  `
    .searches-container {
      font-family: sans-serif;
      display: flex;
      font-size: 18px;
      margin-left: 50px;
      margin-top: 20px;
      text-align: center;
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