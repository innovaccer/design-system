import React from 'react';
import { Card, Tooltip, Paragraph, Column } from '@innovaccer/design-system';
import './Colors.css';
import { copyMessage, copyMessageSuccess } from '../../util/constants.js';

const CopyToClipboard = React.forwardRef((props, ref) => {
  const [tooltipStatus, setTooltipStatus] = React.useState(copyMessage);
  const { type, code, isHover, setIsHover } = props;
  return (
    <Tooltip tooltip={tooltipStatus} appendToBody={false} boundaryElement={ref}>
      <div
        role='presentation'
        className="d-flex flex-column mx-1 cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setTooltipStatus(copyMessageSuccess);
        }}
        onMouseEnter={() => {
          setIsHover(code);
          setTooltipStatus(copyMessage);
        }}
        onMouseLeave={() => {
          setIsHover();
          setTooltipStatus(copyMessage);
        }}
      >
        <Paragraph appearance="subtle" className="my-2">
          {type}
        </Paragraph>
        <Paragraph className={`font-size--s d-flex w-100 flex-nowrap ${isHover === code ? 'underline' : ''}`}>
          {code}
        </Paragraph>
      </div>
    </Tooltip>
  );
});

const Colors = (props) => {
  const { colorData } = props;
  const [isHoverHex, setIsHoverHex] = React.useState();
  const [isHoverRGB, setIsHoverRGB] = React.useState();
  const ref = React.createRef();
  return colorData.map((elt) => {
    return (
      <Column key={elt.name} size="4">
        <Card className="mr-5 mt-7 overflow-visible" shadow="none" ref={ref}>
          <div className="px-6">
            <div
              style={{
                backgroundColor: elt.backgroundColor,
              }}
              className="my-6 container w-auto"
            ></div>
            <Paragraph className="d-flex w-100 flex-nowrap ml-2">{elt.name}</Paragraph>
            <div className="d-flex flex-row justify-content-between mb-5 mt-5">
              <CopyToClipboard
                ref={ref}
                type="Hex"
                code={elt.hexCode}
                isHover={isHoverHex}
                setIsHover={setIsHoverHex}
              />
              <CopyToClipboard
                ref={ref}
                type="RGB"
                code={elt.colorCode}
                isHover={isHoverRGB}
                setIsHover={setIsHoverRGB}
              />
            </div>
          </div>
        </Card>
      </Column>
    );
  });
};

export default Colors;
