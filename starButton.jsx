import React, { useState } from 'react';

const StarButton = ({ onClick }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    const updatedCount = Math.min(count + 1, 20);
    setCount(updatedCount);
    if (onClick) onClick();
  };

  const displayCount = count > 19 ? '20+' : count;
  const interpolationFactor = count / 20;
  const starFillColor = `rgba(255, 215, 0, ${interpolationFactor})`;
  const numberFillColor = `rgba(${Math.floor(255 * interpolationFactor)}, ${Math.floor(255 * interpolationFactor)}, ${Math.floor(255 * interpolationFactor)}, 1)`;

  return (
    <button
    className={'relative transition-transform transform hover:scale-110'}
      onClick={handleButtonClick}
    >
      <svg width="40" height="40" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="transparent" stroke="rgba(255, 215, 0, 1)" strokeWidth="1" />
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={starFillColor} />
        <text x="12" y="15" textAnchor="middle" fill={numberFillColor} fontSize="6">{displayCount}</text>
      </svg>
    </button>
  );
};

export default StarButton;
