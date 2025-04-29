export const getAnimationClass = (uniqueKey: string, expanded?: boolean) => {
  if (expanded) return `nestedList-open-${uniqueKey} 240ms cubic-bezier(0, 0, 0.38, 0.9)`;
  else if (!expanded) return `nestedList-close-${uniqueKey} 160ms cubic-bezier(0.2, 0, 1, 0.9)`;
  return '';
};

const getHeight = (listItemRef: React.RefObject<HTMLDivElement>) => {
  const scrollHeight = listItemRef.current?.scrollHeight;
  return scrollHeight;
};

export const menuItemAnimation = (listItemRef: React.RefObject<HTMLDivElement | null>, uniqueKey: string) => {
  return `
      @keyframes nestedList-open-${uniqueKey} {
      from {
        height: 0px;
      }
      to {
        height: ${getHeight(listItemRef as React.RefObject<HTMLDivElement>)}px;
      }
    }

    @keyframes nestedList-close-${uniqueKey} {
      from {
        height: ${getHeight(listItemRef as React.RefObject<HTMLDivElement>)}px;
      }
      to {
        height: 0px;
      }
    }
  `;
};
