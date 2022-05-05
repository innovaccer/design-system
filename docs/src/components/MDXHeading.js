import React, { useState } from "react";
import { Heading, Icon, Tooltip } from "@innovaccer/design-system";
import { copyMessage, copyMessageSuccess } from "../util/constants.js";

const copyToClipboard = (str) => {
  navigator.clipboard.writeText(str);
};

const MDXHeading = ({ size, headingInfo }) => {
  const refHeading = React.createRef();
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipName, setTooltipName] = useState(copyMessage);
  const [isTooltipActive, setTooltipActive] = useState(false);

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
    setTooltipName(copyMessage);
    setTooltipActive(false);
  };

  const onClickHandler = (id) => {
    const currURL = window.location.href;

    if (currURL.includes(id)) {
      copyToClipboard(currURL);
    }
    else if (currURL.includes("#")) {
      copyToClipboard(currURL.slice(0, currURL.indexOf("#") + 1) + id);
    }
    else {
      copyToClipboard(currURL + "#" + id);
    }
    setTooltipActive(true);
    setTooltipName(copyMessageSuccess);
  };

  const sizeMarginMapper = {
    s: "mt-4",
    m: "mt-4",
    l: "mt-6"
  }

  return (
    <div
      ref={refHeading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeaveHandler}
      className={`d-inline-flex w-100 align-items-center ${sizeMarginMapper[size]}`}
    >
      <Heading
        className="mr-4"
        size={size}
        {...headingInfo}
      />
      <div className="cursor-pointer d-flex">
        {isHovered && (
          <Tooltip
            open={isTooltipActive}
            tooltip={tooltipName}
            position="bottom"
            appendToBody={false}
            boundaryElement={refHeading}
            className="Heading-tooltip"
          >
            <Icon
              onClick={() => onClickHandler(headingInfo.id)}
              appearance="subtle"
              type="filled"
              size={16}
              name="link"
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default MDXHeading;
