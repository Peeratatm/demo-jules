import React from 'react';

const ScoreChart = ({ score }) => {
  return (
    <div className="relative w-32 h-32">
      <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
        {/* Background circle */}
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          strokeWidth="4"
        />
        {/* Score arcs */}
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="#f00"
          strokeWidth="4"
          strokeDasharray="18,100"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="#0f0"
          strokeWidth="4"
          strokeDasharray="12,100"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="#ff0"
          strokeWidth="4"
          strokeDasharray="7,100"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {score}
      </div>
    </div>
  );
};

export default ScoreChart;