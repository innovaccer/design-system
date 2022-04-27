import React, { useState } from "react";
import { Heading, Icon, Tooltip } from "@innovaccer/design-system";
import { copyMessage, copyMessageSuccess } from "../util/constants.js";

const MDXHeading = ({ size, headingInfo }) => {
  const refHeading = React.createRef();
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipName, setTooltipName] = useState(copyMessage);
  const [isTooltipActiveHeading, setTooltipActiveHeading] = useState(false);
  const hoverHandler = (type) => {
    if (type === "Enter") {
      setIsHovered(true);
    } else {
      setIsHovered(false);
      setTooltipName(copyMessage);
      setTooltipActiveHeading(false);
    }
  };
  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str);
  };
  const hoverCopyHandler = (id) => {
    const currURL = window.location.href;
    if (currURL.includes(id)) {
      copyToClipboard(currURL);
    } else if (currURL.includes("#")) {
      copyToClipboard(currURL.slice(0, currURL.indexOf("#") + 1) + id);
    } else {
      copyToClipboard(currURL + "#" + id);
    }
    setTooltipActiveHeading(true);
    setTooltipName(copyMessageSuccess);
  };
  return (
    <div
      onMouseEnter={() => hoverHandler("Enter", headingInfo)}
      onMouseLeave={() => hoverHandler("Leave", headingInfo)}
      className={`d-inline-flex w-100 ${size === "s" ? "align-items-center" : "align-items-baseline"
        }`}
      ref={refHeading}
    >
      <Heading
        className={`mr-4 
          ${size === "s" || size === "m" ?
            "mt-4"
            : size === "l" ?
              "mt-6"
              : ""
          }`
        }

        size={size}
        {...headingInfo}
      />
      <div className="cursor-pointer d-inline-block">
        {isHovered && (
          <Tooltip
            open={isTooltipActiveHeading}
            tooltip={tooltipName}
            position="bottom"
            appendToBody={false}
            boundaryElement={refHeading}
          >
            <Icon
              onClick={() => {
                hoverCopyHandler(headingInfo.id);
              }}
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
