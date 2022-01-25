import React from 'react';

const CloseButton = () => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.75 5.25L5.25 18.75'
        stroke='#8FA3BF'
        strokeWidth='2'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
      <path
        d='M18.75 18.75L5.25 5.25'
        stroke='#8FA3BF'
        strokeWidth='2'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseButton;
