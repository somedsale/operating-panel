import React, { useState } from 'react';

const Regulation = ({isOn}) => {
  const [level, setLevel] = useState(4); // Mức mặc định là 4 (giữa thang 0-7)
  // Xử lý tăng mức
  const handleIncrease = () => {
    if (level < 9) {
      setLevel(level + 1);
    }
  };

  // Xử lý giảm mức
  const handleDecrease = () => {
    if (level > 0) {
      setLevel(level - 1);
    }
  };

  // Chiều cao tăng dần từ 16px (mức 0) đến 48px (mức 7)
  const getHeight = (index) => {
    const baseHeight = 16;
    const increment = 4;
    return baseHeight + (index * increment);
  };

  return (
    
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          className="w-6 h-6 interface:h-8 interface:w-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          disabled={level === 0 || !isOn}
        >
          –
        </button>
        <div className="flex gap-1 items-end">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`w-2 interface:w-3 rounded-full ${
                index <= level && isOn ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              style={{ height: `${getHeight(index)}px` }}
            />
          ))}
        </div>
        <button
          onClick={handleIncrease}
          className="w-6 h-6 interface:h-8 interface:w-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          disabled={level === 9 || !isOn}
        >
          +
        </button>
      </div>
  );
};

export default Regulation;