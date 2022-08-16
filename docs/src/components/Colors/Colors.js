import React from 'react';
import { Card, CardBody, Tooltip, Paragraph, Column } from '@innovaccer/design-system';
import './Colors.css';

const Colors = (props) => {
  const { colorData, toggleToast } = props;
  const [isHover, setIsHover] = React.useState();
  const ref = React.createRef();
  return colorData.map((elt) => {
    return (
      <Column size="4">
        <Card className="mr-7 mt-7 overflow-visible" shadow="none" ref={ref}>
          <div className="px-6">
            <div
              style={{
                backgroundColor: elt.backgroundColor,
              }}
              className="my-6 container w-auto"
            ></div>
            <Tooltip tooltip="Copy to clipboard" appendToBody={false} boundaryElement={ref}>
              <Paragraph
                onClick={() => {
                  navigator.clipboard.writeText(elt.hexCode);
                  toggleToast(`Copied "${elt.hexCode}"`);
                }}
                className="cursor-pointer"
                onMouseEnter={() => setIsHover(elt.name)}
                onMouseLeave={() => setIsHover()}
              >
                {elt.name}
              </Paragraph>
            </Tooltip>
            <div className="d-flex mb-7 mt-5">
              <div className="mr-auto">
                <Paragraph appearance="subtle" className="my-2">
                  Hex
                </Paragraph>
                <Paragraph className={`${isHover === elt.name ? 'underline' : ''}`}>{elt.hexCode}</Paragraph>
              </div>
              <div>
                <Paragraph appearance="subtle" className="my-2">
                  RGB
                </Paragraph>
                <Paragraph>{elt.colorCode}</Paragraph>
              </div>
            </div>
          </div>
        </Card>
      </Column>
    );
  });
};

export default Colors;
