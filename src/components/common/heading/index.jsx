/* eslint-disable no-template-curly-in-string */

import React from 'react';
const Heading = ({ title, subtitle, className }) => {
  return (
    <div className={`flex flex-col gap-[5px] text-center items-center lg:mb-[20px] font-sans ${className}`}>
      <span className={`font-[600] text-[18px] text-subColor leading-[27px] ${className?.subtitle}`}>
        {subtitle}
      </span>
      <h2 className={`text-blackColor text-[20px] md:text-[24px] lg:text-[50px]  font-[700] leading-[65px] font-sans ${className?.title}`}>
        {title}
      </h2>
     
      
    </div>
  );
};

export default Heading;
