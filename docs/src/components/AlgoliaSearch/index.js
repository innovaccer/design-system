import algoliasearch from "algoliasearch/lite";
import React, { createRef, useState, useMemo } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./searchBox";
import SearchResult from "./searchResult";
import './search.css';

export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  return (
    <div
      className="position-absolute algolia-search mr-6"
      ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
          query={query}
          parentRef={rootRef}
        />
      </InstantSearch>
    </div>
  )
}
