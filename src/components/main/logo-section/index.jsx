import React from 'react';
import Slider from 'react-slick';
import Container from '../../common/container';
import LogoData from '../../../data/logo-data';


const LogoSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container className='h-full lg:max-h-[162px]'>
      <div className="relative">
        <Slider {...settings} className="">
          {LogoData?.map((item, index) => (
            <div key={index} className="  ">
             <img
  src={item?.image}
  alt={`logo-${index}`}
  className="h-[136px] w-[136px] object-contain"
/>

            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default LogoSection;
