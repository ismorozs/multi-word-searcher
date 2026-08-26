import SearchString from '../SearchString';

export default (_) => `
  <div .container>
    <ul @search-strings>
      ${_(SearchString, (searchStrings, unfocusedInputs) =>
        searchStrings.map((str, i) => ({
          ...str,
          length: searchStrings.length,
          index: i,
          unfocusedInputs
        })))}
    </ul>
    <div .upper-buttons>
      <button @search-button>Find</button>
      <button @case-button title="Case-sensitive on/off">C</button>
      <div .search-constrols>
        <button @move-left tabindex="-1"></button>
        <button @search-id tabindex="0"></button>
        <button @remove-search tabindex="-1" title="Remove current search"></button>
        <button @move-right tabindex="-1"></button>
      </div>
    </div>

    <div @results >
      <div @controls>
        <button @blink title="Get findings to blink">Blink</button>
        <button @move-up></button>
        <button @move-down></button>
        <span @highlight-position></span>
      </div>
      <span @found-results></span>
    </div>
  </div>
`;