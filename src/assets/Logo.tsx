import React from 'react';

interface LogoProps {
  className?: string;
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isWhite = false }) => {
  const textColor = isWhite ? 'white' : '#333';
  const purpleColor = isWhite ? '#F3E8F5' : '#A076A8';
  
  return (
    <svg className={className} viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
            .logo-text { font-family: 'Montserrat', sans-serif; }
          `}
        </style>
      </defs>
      <g>
        <path 
          d="M 80 15 C 65 15, 55 25, 55 40 C 55 55, 65 85, 80 85 C 95 85, 105 55, 105 40 C 105 25, 95 15, 80 15 Z M 80 20 C 90 20, 100 28, 100 40 C 100 52, 90 80, 80 80 C 70 80, 60 52, 60 40 C 60 28, 70 20, 80 20 Z" 
          fill={purpleColor} 
          transform="translate(-15, 0)"
        />
        <path 
          d="M 65 40 L 95 40" 
          stroke={purpleColor} 
          strokeWidth="5" 
          strokeLinecap="round" 
          transform="translate(-15, 0)"
        />
        <path 
          d="M 65 15 L 95 15" 
          stroke={purpleColor} 
          strokeWidth="5" 
          strokeLinecap="round" 
          transform="translate(-15, 0)"
        />
      </g>
      <rect x="110" y="5" width="2" height="90" fill="#E0E0E0" />
      <text x="125" y="30" className="logo-text" fontSize="20" fontWeight="bold" fill={textColor}>Somaliland</text>
      <text x="125" y="55" className="logo-text" fontSize="24" fontWeight="bold" fill={purpleColor}>Cancer</text>
      <text x="125" y="78" className="logo-text" fontSize="20" fontWeight="normal" fill={textColor}>Support</text>
      <text x="125" y="95" className="logo-text" fontSize="12" fontWeight="normal" fill={textColor}>Organization</text>
    </svg>
  );
};

export default Logo;
