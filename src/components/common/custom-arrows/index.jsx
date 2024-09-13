import React from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev-arrow absolute right-0 top-1/4 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowUp size={24} className="text-gray-500" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-next-arrow absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <MdKeyboardArrowDown size={24} className="text-black" />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
