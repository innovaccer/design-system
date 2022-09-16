import React from 'react';
import { Chip } from '@innovaccer/design-system';

import './Tile.css';

const Tile = (props) => {
  const { name, text, onClick, className, type, selected } = props;

  return (
    <Chip
      onClick={onClick}
      className={` Tile justify-content-center ${className} `}
      icon={name}
      label={text}
      type={type}
      selected={selected}
    />
  );
};
export default Tile;
