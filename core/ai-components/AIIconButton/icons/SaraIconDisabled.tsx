import React from 'react';

type SaraIconType = {
  className?: string;
};

const SaraIconDisabled = (props: SaraIconType) => {
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
        d="M0.75 6C3.6495 6 6 3.6495 6 0.75C6 3.6495 8.35051 6 11.25 6C8.35051 6 6 8.35051 6 11.25C6 8.35051 3.6495 6 0.75 6Z"
        fill="url(#paint0_linear_63015_2821)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 6C3.6495 6 6 3.6495 6 0.75C6 3.6495 8.35051 6 11.25 6C8.35051 6 6 8.35051 6 11.25C6 8.35051 3.6495 6 0.75 6Z"
        fill="url(#paint1_linear_63015_2821)"
        fillOpacity="0.24"
      />
      <defs>
        <linearGradient
          id="paint0_linear_63015_2821"
          x1="2.57813"
          y1="1.82812"
          x2="9.30469"
          y2="9.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E81F76" stopOpacity="0.8" />
          <stop offset="1" stopColor="#EB5324" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_63015_2821"
          x1="6.98438"
          y1="8.13281"
          x2="9.44531"
          y2="11.7422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC208" stopOpacity="0" />
          <stop offset="1" stopColor="#FFC208" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SaraIconDisabled;
