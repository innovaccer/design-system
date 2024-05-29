import React from 'react';

type SaraIconType = {
  className?: string;
};

const SaraIconBottom = (props: SaraIconType) => {
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
      <mask id="path-1-outside-1_2094_5789" maskUnits="userSpaceOnUse" x="1" y="0" width="15" height="15" fill="black">
        <rect fill="white" x="1" width="15" height="15" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 6C12.2386 6 10 3.76142 10 1C10 3.76142 7.76142 6 5 6C7.76142 6 10 8.23858 10 11C10 8.23858 12.2386 6 15 6ZM8 11C6.34315 11 5 9.65685 5 8C5 9.65685 3.65685 11 2 11C3.65685 11 5 12.3431 5 14C5 12.3431 6.34315 11 8 11Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6C12.2386 6 10 3.76142 10 1C10 3.76142 7.76142 6 5 6C7.76142 6 10 8.23858 10 11C10 8.23858 12.2386 6 15 6ZM8 11C6.34315 11 5 9.65685 5 8C5 9.65685 3.65685 11 2 11C3.65685 11 5 12.3431 5 14C5 12.3431 6.34315 11 8 11Z"
        fill="url(#paint0_linear_2094_5789)"
      />
      <path
        d="M11 1C11 0.447715 10.5523 0 10 0C9.44772 0 9 0.447715 9 1L11 1ZM15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5L15 7ZM5 5C4.44771 5 4 5.44772 4 6C4 6.55228 4.44771 7 5 7L5 5ZM9 11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11L9 11ZM6 8C6 7.44772 5.55229 7 5 7C4.44771 7 4 7.44772 4 8H6ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10V12ZM2 10C1.44771 10 1 10.4477 1 11C1 11.5523 1.44771 12 2 12V10ZM4 14C4 14.5523 4.44771 15 5 15C5.55229 15 6 14.5523 6 14H4ZM9 1C9 4.31371 11.6863 7 15 7L15 5C12.7909 5 11 3.20914 11 1L9 1ZM5 7C8.31371 7 11 4.31371 11 1L9 1C9 3.20914 7.20914 5 5 5L5 7ZM11 11C11 7.68629 8.31371 5 5 5L5 7C7.20914 7 9 8.79086 9 11L11 11ZM15 5C11.6863 5 9 7.68629 9 11L11 11C11 8.79086 12.7909 7 15 7L15 5ZM4 8C4 10.2091 5.79086 12 8 12V10C6.89543 10 6 9.10457 6 8H4ZM2 12C4.20914 12 6 10.2091 6 8H4C4 9.10457 3.10457 10 2 10V12ZM6 14C6 11.7909 4.20914 10 2 10V12C3.10457 12 4 12.8954 4 14H6ZM8 10C5.79086 10 4 11.7909 4 14H6C6 12.8954 6.89543 12 8 12V10Z"
        fill="currentColor"
        mask="url(#path-1-outside-1_2094_5789)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2094_5789"
          x1="12.75"
          y1="5.5"
          x2="3.89622"
          y2="8.29755"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC208" />
          <stop offset="1" stopColor="#E31C79" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SaraIconBottom;
