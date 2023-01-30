export const getAnimationClass = (uniqueID: string, expanded?: boolean) => {
  if (expanded) return `nestedList-open-${uniqueID} 240ms cubic-bezier(0, 0, 0.38, 0.9)`;
  else if (!expanded) return `nestedList-close-${uniqueID} 160ms cubic-bezier(0.2, 0, 1, 0.9)`;
  return '';
};

const getHeight = (uniqueID: string) => {
  const menuElement = document.getElementById(uniqueID);
  const scrollHeight = menuElement?.scrollHeight;

  return scrollHeight;
};

export const menuItemAnimation = (uniqueID: string) => {
  return `
      @keyframes nestedList-open-${uniqueID} {
      from {
        height: 0px;
      }
      to {
        height: ${getHeight(uniqueID)}px;
      }
    }

    @keyframes nestedList-close-${uniqueID} {
      from {
        height: ${getHeight(uniqueID)}px;
      }
      to {
        height: 0px;
      }
    }
  `;
};
