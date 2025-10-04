import React from 'react';

const RibbonBackground: React.FC = () => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <g transform="translate(200 100) scale(3) rotate(15)">
      <path 
        d="M 80 15 C 65 15, 55 25, 55 40 C 55 55, 65 85, 80 85 C 95 85, 105 55, 105 40 C 105 25, 95 15, 80 15 Z M 80 20 C 90 20, 100 28, 100 40 C 100 52, 90 80, 80 80 C 70 80, 60 52, 60 40 C 60 28, 70 20, 80 20 Z" 
        fill="#A076A8"
        opacity="0.1"
      />
      <path 
        d="M 65 40 L 95 40" 
        stroke="#A076A8" 
        strokeWidth="5" 
        strokeLinecap="round"
        opacity="0.1"
      />
      <path 
        d="M 65 15 L 95 15" 
        stroke="#A076A8"
        strokeWidth="5" 
        strokeLinecap="round"
        opacity="0.1"
      />
    </g>
     <g transform="translate(800 500) scale(4) rotate(-25)">
      <path 
        d="M 80 15 C 65 15, 55 25, 55 40 C 55 55, 65 85, 80 85 C 95 85, 105 55, 105 40 C 105 25, 95 15, 80 15 Z M 80 20 C 90 20, 100 28, 100 40 C 100 52, 90 80, 80 80 C 70 80, 60 52, 60 40 C 60 28, 70 20, 80 20 Z" 
        fill="#A076A8"
        opacity="0.08"
      />
      <path 
        d="M 65 40 L 95 40" 
        stroke="#A076A8" 
        strokeWidth="5" 
        strokeLinecap="round"
        opacity="0.08"
      />
      <path 
        d="M 65 15 L 95 15" 
        stroke="#A076A8"
        strokeWidth="5" 
        strokeLinecap="round"
        opacity="0.08"
      />
    </g>
  </svg>
);

export default RibbonBackground;
