import * as React from 'react';

interface SubtleLinkProps {
  children: string;
  href: string;
  onClick: () => void;
}

export const SubtleLink = (props: SubtleLinkProps) => {
  const {
    onClick,
    children,
    href
  } = props;

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a className="SubtleLink" href={href} onClick={onClickHandler}>
      {children}
    </a>
  );
};

export default SubtleLink;
