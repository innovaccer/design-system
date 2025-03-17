import React from 'react';

type SaraIconType = {
  className?: string;
};

const SaraIconDefault = (props: SaraIconType) => {
  const { className } = props;

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-test="DesignSystem-AI-Icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0.75C6 3.6495 8.3505 6 11.25 6C8.3505 6 6 8.35051 6 11.25C6 8.35051 3.64949 6 0.75 6C3.64949 6 6 3.6495 6 0.75Z"
        fill="url(#paint0_linear_54537_3573)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0.75C6 3.6495 8.3505 6 11.25 6C8.3505 6 6 8.35051 6 11.25C6 8.35051 3.64949 6 0.75 6C3.64949 6 6 3.6495 6 0.75Z"
        fill="url(#paint1_linear_54537_3573)"
        fillOpacity="0.24"
      />
      <defs>
        <linearGradient
          id="paint0_linear_54537_3573"
          x1="10.1719"
          y1="2.57813"
          x2="2.25"
          y2="9.30469"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E81F76" stopOpacity="0.8" />
          <stop offset="1" stopColor="#EB5324" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_54537_3573"
          x1="3.86719"
          y1="6.98438"
          x2="0.257812"
          y2="9.44531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC208" stopOpacity="0" />
          <stop offset="1" stopColor="#FFC208" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SaraIconDefault;
