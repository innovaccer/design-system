import React from 'react';

type SaraIconType = {
  className?: string;
};

const SaraIconTop = (props: SaraIconType) => {
  const { className } = props;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-test="DesignSystem-AI-Icon"
    >
      <mask id="path-1-outside-1_3121_1765" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="15" fill="black">
        <rect fill="white" width="15" height="15" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 1C6 3.76142 3.76142 6 1 6C3.76142 6 6 8.23858 6 11C6 8.23858 8.23858 6 11 6C8.23858 6 6 3.76142 6 1ZM11 8C11 9.65685 9.65685 11 8 11C9.65685 11 11 12.3431 11 14C11 12.3431 12.3431 11 14 11C12.3431 11 11 9.65685 11 8Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C6 3.76142 3.76142 6 1 6C3.76142 6 6 8.23858 6 11C6 8.23858 8.23858 6 11 6C8.23858 6 6 3.76142 6 1ZM11 8C11 9.65685 9.65685 11 8 11C9.65685 11 11 12.3431 11 14C11 12.3431 12.3431 11 14 11C12.3431 11 11 9.65685 11 8Z"
        fill="url(#paint0_linear_3121_1765)"
      />
      <path
        d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7V5ZM7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1H7ZM5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11H5ZM11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5V7ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12V10ZM12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8H12ZM10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14H10ZM14 12C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10V12ZM1 7C4.31371 7 7 4.31371 7 1H5C5 3.20914 3.20914 5 1 5V7ZM7 11C7 7.68629 4.31371 5 1 5V7C3.20914 7 5 8.79086 5 11H7ZM11 5C7.68629 5 5 7.68629 5 11H7C7 8.79086 8.79086 7 11 7V5ZM5 1C5 4.31371 7.68629 7 11 7V5C8.79086 5 7 3.20914 7 1H5ZM8 12C10.2091 12 12 10.2091 12 8H10C10 9.10457 9.10457 10 8 10V12ZM12 14C12 11.7909 10.2091 10 8 10V12C9.10457 12 10 12.8954 10 14H12ZM14 10C11.7909 10 10 11.7909 10 14H12C12 12.8954 12.8954 12 14 12V10ZM10 8C10 10.2091 11.7909 12 14 12V10C12.8954 10 12 9.10457 12 8H10Z"
        fill="currentColor"
        mask="url(#path-1-outside-1_3121_1765)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3121_1765"
          x1="5.5"
          y1="3.25"
          x2="8.29755"
          y2="12.1038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC208" />
          <stop offset="1" stopColor="#E31C79" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SaraIconTop;
