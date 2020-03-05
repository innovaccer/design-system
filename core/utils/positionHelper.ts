/**
 * Get target position object
 */
const getPosition = (
  position: string,
  trigger: HTMLElement,
  target: HTMLElement,
  offset: { vertical: number; horizontal: number } = {
    vertical: 0,
    horizontal: 0,
  },
  appendToBody: boolean,
) => {
  const { horizontal: horizontalOffset, vertical: verticalOffset } = offset;
  const { pageYOffset, pageXOffset } = window;
  const triggerCoordinates = trigger.getBoundingClientRect();
  const targetCoordinates = target.getBoundingClientRect();
  if (appendToBody) {
    switch (position) {
      case 'TopLeft': {
        return {
          left: Math.round(
            triggerCoordinates.left + pageXOffset + horizontalOffset,
          ),
          top: Math.round(
            triggerCoordinates.top +
              pageYOffset -
              (targetCoordinates.height + verticalOffset),
          ),
        };
      }
      case 'TopCenter': {
        const xOffset = triggerCoordinates.left + triggerCoordinates.width / 2;
        return {
          left: Math.round(
            xOffset +
              pageXOffset +
              horizontalOffset -
              targetCoordinates.width / 2,
          ),
          top: Math.round(
            triggerCoordinates.top +
              pageYOffset -
              (verticalOffset + targetCoordinates.height),
          ),
        };
      }
      case 'TopRight': {
        return {
          left: Math.round(
            triggerCoordinates.right +
              pageXOffset +
              horizontalOffset -
              targetCoordinates.width,
          ),
          top: Math.round(
            triggerCoordinates.top +
              pageYOffset -
              (verticalOffset + targetCoordinates.height),
          ),
        };
      }
      case 'RightCenter': {
        return {
          left: Math.round(
            triggerCoordinates.right + pageXOffset + horizontalOffset,
          ),
          top: Math.round(
            triggerCoordinates.top +
              pageYOffset +
              verticalOffset +
              triggerCoordinates.height / 2 -
              targetCoordinates.height / 2,
          ),
        };
      }
      case 'BottomRight': {
        return {
          left: Math.round(
            triggerCoordinates.right +
              pageXOffset +
              horizontalOffset -
              targetCoordinates.width,
          ),
          top: Math.round(
            triggerCoordinates.bottom + pageYOffset + verticalOffset,
          ),
        };
      }
      case 'BottomCenter': {
        const xOffset = triggerCoordinates.left + triggerCoordinates.width / 2;
        return {
          left: Math.round(
            xOffset +
              pageXOffset +
              horizontalOffset -
              targetCoordinates.width / 2,
          ),
          top: Math.round(
            triggerCoordinates.bottom + pageYOffset + verticalOffset,
          ),
        };
      }
      case 'BottomLeft': {
        return {
          left: Math.round(
            triggerCoordinates.left + horizontalOffset + pageXOffset,
          ),
          top: Math.round(
            triggerCoordinates.bottom + pageYOffset + verticalOffset,
          ),
        };
      }
      case 'LeftCenter': {
        return {
          left: Math.round(
            triggerCoordinates.left +
              pageXOffset -
              (horizontalOffset + targetCoordinates.width),
          ),
          top: Math.round(
            triggerCoordinates.top +
              pageYOffset +
              verticalOffset +
              triggerCoordinates.height / 2 -
              targetCoordinates.height / 2,
          ),
        };
      }
      default: {
        return {
          left: Math.round(
            triggerCoordinates.right +
              pageXOffset +
              horizontalOffset -
              targetCoordinates.width,
          ),
          top: Math.round(
            triggerCoordinates.bottom + pageYOffset + verticalOffset,
          ),
        };
      }
    }
  }

  switch (position) {
    case 'TopLeft': {
      return {
        left: Math.round(horizontalOffset),
        top: -Math.round(targetCoordinates.height + verticalOffset),
      };
    }
    case 'TopCenter': {
      return {
        left: Math.round(
          (triggerCoordinates.width - targetCoordinates.width) / 2 +
            horizontalOffset,
        ),
        top: -Math.round(targetCoordinates.height + verticalOffset),
      };
    }
    case 'TopRight': {
      return {
        left:
          triggerCoordinates.width -
          targetCoordinates.width -
          horizontalOffset,
        top: -Math.round(targetCoordinates.height + verticalOffset),
      };
    }
    case 'RightCenter': {
      return {
        left: triggerCoordinates.width + horizontalOffset,
        top: Math.round(
          verticalOffset +
            triggerCoordinates.height / 2 -
            targetCoordinates.height / 2,
        ),
      };
    }
    case 'BottomRight': {
      return {
        left:
          triggerCoordinates.width -
          targetCoordinates.width -
          horizontalOffset,
        top: Math.round(verticalOffset + triggerCoordinates.height),
      };
    }
    case 'BottomCenter': {
      return {
        left: Math.round(
          (triggerCoordinates.width - targetCoordinates.width) / 2 +
            horizontalOffset,
        ),
        top: Math.round(verticalOffset + triggerCoordinates.height),
      };
    }
    case 'BottomLeft': {
      return {
        left: horizontalOffset,
        top: Math.round(verticalOffset + triggerCoordinates.height),
      };
    }
    case 'LeftCenter': {
      return {
        left: -Math.round(horizontalOffset + targetCoordinates.width),
        top: Math.round(
          verticalOffset +
            triggerCoordinates.height / 2 -
            targetCoordinates.height / 2,
        ),
      };
    }
    default: {
      return {
        left: horizontalOffset,
        top: Math.round(verticalOffset + triggerCoordinates.height),
      };
    }
  }
};

/**
 * Return whether element is in viewport or not
 */
const isInViewport = (
  targetElement: HTMLElement,
  position: { top: number; left: number },
  appendToBody?: boolean,
  triggerElement?: HTMLElement,
) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const { pageYOffset, pageXOffset } = window;
  const elementCoordinates = targetElement;

  let element = { left: 0, bottom: 0, right: 0, top: 0 };
  if (appendToBody) {
    element = {
      top: position.top - pageYOffset,
      left: position.left - pageXOffset,
      right: elementCoordinates.offsetWidth + position.left - pageXOffset,
      bottom: elementCoordinates.offsetHeight + position.top - pageYOffset,
    };
  } else if (triggerElement) {
    const triggerElementPosition = triggerElement.getBoundingClientRect();
    element = {
      top: triggerElementPosition.top + position.top,
      left: triggerElementPosition.left + position.left,
      right:
        triggerElementPosition.left +
        position.left +
        elementCoordinates.offsetWidth,
      bottom:
        triggerElementPosition.top +
        position.top +
        elementCoordinates.offsetHeight,
    };
  }

  // Hidden on top
  if (element.top < 0) {
    return false;
  }
  // Hidden on the bottom
  if (element.bottom > windowHeight) {
    return false;
  }
  // Hidden in the left
  if (element.left < 0) {
    return false;
  }
  // Hidden on the right
  if (element.right > windowWidth) {
    return false;
  }

  return true;
};

export { getPosition, isInViewport };
