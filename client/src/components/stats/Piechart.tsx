

import React from 'react';

type CircleProps = {
  colour: string;
  percentage?: number;
};

type TextProps = {
  percentage: number;
};

type PieProps = {
  percentage: number;
  colour: string;
};

const cleanPercentage = (percentage: number): number => {
  const isNegativeOrNaN = !Number.isFinite(percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : percentage;
};

const Circle: React.FC<CircleProps> = ({ colour, percentage = 0 }) => {
  const r = 35;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;

  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text: React.FC<TextProps> = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"12px"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie: React.FC<PieProps> = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);

  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 50 100)`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
