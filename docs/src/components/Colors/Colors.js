import React from 'react';
import { Card, CardBody, Tooltip, Paragraph, Column } from '@innovaccer/design-system';
import './Colors.css';
import { copyMessage, copyMessageSuccess } from '../../util/constants.js';

const Colors = (props) => {
  const { colorData } = props;
  const [isHoverHex, setIsHoverHex] = React.useState();
  const [isHoverRGB, setIsHoverRGB] = React.useState();
  const [tooltipStatus, setTooltipStatus] = React.useState(copyMessage);
  const ref = React.createRef();
  return colorData.map((elt) => {
    return (
      <Column key={elt.name} size="4">
        <Card className="mr-4 mt-7 overflow-visible" shadow="none" ref={ref}>
          <div className="px-2">
            <div
              style={{
                backgroundColor: elt.backgroundColor,
              }}
              className="my-6 container w-auto"
            ></div>
            {/* <Tooltip tooltip="Copy to clipboard" appendToBody={false} boundaryElement={ref}> */}
            <Paragraph className="d-flex w-100 flex-nowrap ml-2">{elt.name}</Paragraph>
            {/* </Tooltip> */}
            <div className="d-flex flex-row justify-content-center mb-7 mt-5">
              <Tooltip tooltip={tooltipStatus} appendToBody={false} boundaryElement={ref}>
                <div
                  className="d-flex flex-column mx-1 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(elt.hexCode);
                    setTooltipStatus(copyMessageSuccess);
                  }}
                  onMouseEnter={() => {
                    setIsHoverHex(elt.hexCode);
                    setTooltipStatus(copyMessage);
                  }}
                  onMouseLeave={() => {
                    setIsHoverHex();
                    setTooltipStatus(copyMessage);
                  }}
                >
                  <Paragraph appearance="subtle" className="my-2 --font-size-s">
                    Hex
                  </Paragraph>
                  <Paragraph
                    className={`d-flex w-100 flex-nowrap --font-size-s ${
                      isHoverHex === elt.hexCode ? 'underline' : ''
                    }`}
                  >
                    {elt.hexCode}
                  </Paragraph>
                </div>
              </Tooltip>
              <Tooltip tooltip={tooltipStatus} appendToBody={false} boundaryElement={ref}>
                <div
                  className="d-flex flex-column mx-1 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(elt.colorCode);
                    setTooltipStatus(copyMessageSuccess);
                  }}
                  onMouseEnter={() => {
                    setIsHoverRGB(elt.colorCode);
                    setTooltipStatus(copyMessage);
                  }}
                  onMouseLeave={() => {
                    setIsHoverRGB();
                    setTooltipStatus(copyMessage);
                  }}
                >
                  <Paragraph appearance="subtle" className="my-2 --font-size-s">
                    RGB
                  </Paragraph>
                  <Paragraph
                    className={`d-inline w-100 flex-nowrap --font-size-s ${
                      isHoverRGB === elt.colorCode ? 'underline' : ''
                    }`}
                  >
                    {elt.colorCode}
                  </Paragraph>
                </div>
              </Tooltip>
            </div>
          </div>
        </Card>
      </Column>
    );
  });
};

export default Colors;