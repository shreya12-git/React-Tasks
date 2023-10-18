import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isOpen && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          You picked: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
