import React from 'react';
import { Row, Column } from '@innovaccer/design-system';
import './Rules.css';

const Rules = ({ children, isPortraitMode = false }) => {
  return (
    <div className="Rules-Container">
      {isPortraitMode ? (
        <>
          <Row>
            <Column>{children.length > 0 && <div>{children[0]}</div>}</Column>
          </Row>
          <Row>
            <Column>{children.length > 1 && <div>{children[1]}</div>}</Column>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Column>{children.length > 0 && <div>{children[0]}</div>}</Column>
            <Column>{children.length > 1 && <div>{children[1]}</div>}</Column>
          </Row>
        </>
      )}
    </div>
  );
};

export default Rules;
