import React from 'react';

type PathAnimationProps = {
  text?: string;
  fontSize?: string;
  gradientStart?: string;
  gradientEnd?: string;
  strokeWidth?: string;
  dur?: string;
  repeatCount?: string;
  viewBoxHeight?: number;
  gradientId?: string;
};

const PathAnimation = ({
  text = 'PATH DRAWING',
  fontSize = '88',
  gradientStart = '#f093fb',
  gradientEnd = '#f5576c',
  strokeWidth = '2',
  dur = '8s',
  repeatCount = 'indefinite',
  viewBoxHeight = 160,
  gradientId = 'pathGradient',
}: PathAnimationProps) => {
  return (
    <div className="flex justify-center items-center min-h-[50px]">
      <svg
        width="1000"
        height="50"
        viewBox={`0 0 800 ${viewBoxHeight}`}
        className="max-w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="100%" stopColor={gradientEnd} />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          {text}
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0"
            dur={dur}
            repeatCount={repeatCount}
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1"
          />
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;
