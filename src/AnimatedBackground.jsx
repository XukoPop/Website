import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      <svg
        className="absolute inset-0 w-full h-full opacity-70"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="mainGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="rgba(30, 64, 175, 0.05)" />
            <stop offset="100%" stopColor="rgba(30, 64, 175, 0)" />
          </radialGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#mainGradient)"
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;