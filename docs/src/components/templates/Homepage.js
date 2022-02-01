import React from "react";
import Header from '../Header';

export default ({relativePagePath, children }) => {
  return (
    <div>
      <Header
        relativePagePath={relativePagePath}
      />
      {children}
    </div>
  );
} 
