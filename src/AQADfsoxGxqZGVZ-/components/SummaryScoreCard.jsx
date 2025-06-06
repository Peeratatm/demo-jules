import React from 'react';
import ScoreChart from './ScoreChart';

const SummaryScoreCard = () => {
  return (
    <div className="flex gap-8 p-6 bg-white shadow rounded-lg">
      <div className="w-1/2">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="w-8 h-8 bg-orange-400 rounded-full mr-4 flex items-center justify-center">
              📄
            </div>
            <div>
              <div>Weighted pipeline value</div>
              <div className="font-bold">45</div>
            </div>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-pink-500 rounded-full mr-4 flex items-center justify-center">
              📄
            </div>
            <div>
              <div>Forecasted value</div>
              <div className="font-bold">56M</div>
            </div>
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded-full mr-4 flex items-center justify-center">
              📄
            </div>
            <div>
              <div>Pipeline value</div>
              <div className="font-bold">16M</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Score</h2>
        <ScoreChart score={54} />
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-red-500">
            <span className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></span>
            Score 80 - 100
            <span className="ml-auto">18</span>
          </li>
          <li className="flex items-center text-green-500">
            <span className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></span>
            Score 51 - 79
            <span className="ml-auto">12</span>
          </li>
          <li className="flex items-center text-yellow-500">
            <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2"></span>
            Score 10 - 50
            <span className="ml-auto">7</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryScoreCard;