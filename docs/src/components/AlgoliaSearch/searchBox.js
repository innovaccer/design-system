import React, { useEffect, useRef } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Input } from '@innovaccer/design-system';
import { getPlatformPrefix } from './helpers';

const CustomSearchBox = ({ refine, currentRefinement, onFocus, value }) => {
  const platformPrefix = getPlatformPrefix();
  const searchRef = useRef();
  useEffect(() => {
    const element = document.getElementById('___gatsby');
    element.addEventListener('keydown', handleInstantSearch);

    return () => {
      element.removeEventListener('keydown', handleInstantSearch);
    };
  }, []);

  const handleInstantSearch = (e) => {
    const inputField = searchRef.current;
    if ((e.ctrlKey || e.metaKey) && (e.key === 'K' || e.key === 'k')) {
      e.preventDefault();
      inputField.click();
    }
  };

  return (
    <Input
      ref={searchRef}
      className="SearchInput"
      icon="search"
      name="input"
      autoComplete="off"
      placeholder={`Press ‘${platformPrefix}+ k’ to quickly start searching.`}
      onChange={(e) => refine(e.target.value)}
      value={value}
      onFocus={onFocus}
      onClear={(e) => refine(e.target.value)}
    />
  );
};

const SearchBox = connectSearchBox(CustomSearchBox);

export default SearchBox;
