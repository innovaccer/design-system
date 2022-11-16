import algoliasearch from 'algoliasearch/lite';
import React, { createRef, useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './searchBox';
import SearchResult from './searchResult';
import './search.css';

export default function Search({ indices }) {
  const rootRef = createRef();
  const [hasFocus, setFocus] = useState(false);
  const [query, setQuery] = useState();
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  return (
    <div className="position-absolute algolia-search mr-6 mt-4" ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => {setFocus(true); setQuery("");}} hasFocus={hasFocus} value={query}/>
        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
          query={query}
          parentRef={rootRef}
        />
      </InstantSearch>
    </div>
  );
}
