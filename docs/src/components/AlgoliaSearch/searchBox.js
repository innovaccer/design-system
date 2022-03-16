import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { Input } from '@innovaccer/design-system';

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus }) => (
    <Input
      className="w-25 SearchInput"
      icon="search"
      name="input"
      placeholder="Search components, patterns..  "
      onChange={e => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
    />
  )
)
