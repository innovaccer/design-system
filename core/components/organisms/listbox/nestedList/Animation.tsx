export const getAnimationClass = (uniqueKey: string, expanded?: boolean) => {
  if (expanded) return `nestedList-open-${uniqueKey} 240ms cubic-bezier(0, 0, 0.38, 0.9)`;
  else if (!expanded) return `nestedList-close-${uniqueKey} 160ms cubic-bezier(0.2, 0, 1, 0.9)`;
  return '';
};

// const getHeight = (listItemRef: React.RefObject<HTMLDivElement>) => {
//   const scrollHeight = listItemRef.current?.scrollHeight;
//   console.log(
//     'aalistItemRef.current',
//     listItemRef.current,
//     'scrollHeight',
//     scrollHeight,
//     'clientheight',
//     listItemRef.current?.clientHeight,
//     'offset',
//     listItemRef.current?.offsetHeight
// );
//   // debugger;
//   return scrollHeight;
// };

export const menuItemAnimation = (scrollHeight: number | undefined, uniqueKey: string) => {
  console.log('myy listitem scrollHeight', scrollHeight);

  // if (scrollHeight) {
    return `
      @keyframes nestedList-open-${uniqueKey} {
      from {
        height: 0px;
      }
      to {
        height: ${scrollHeight}px;
      }
    }

    @keyframes nestedList-close-${uniqueKey} {
      from {
        height: ${scrollHeight}px;
      }
      to {
        height: 0px;
      }
    }
  `;
  // } 
  // return ''
  // else {
  //   return `
  //     @keyframes nestedList-open-${uniqueKey} {
  //     from {
  //       height: 0px;
  //     }
  //     to {
  //       height: auto;
  //     }
  //   }

  //   @keyframes nestedList-close-${uniqueKey} {
  //     from {
  //       height: auto;
  //     }
  //     to {
  //       height: 0px;
  //     }
  //   }
  // `;
  // }
};
