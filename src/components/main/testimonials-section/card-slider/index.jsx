import React from 'react';
import Slider from 'react-slick';
import TestimonailData from '../../../../data/testimonial-data';
import Card from '../../../common/card';
import { CustomNextArrow, CustomPrevArrow } from '../../../common/custom-arrows';

const CardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    };

    return (
        <div className="relative w-full max-w-[669px] h-[245px] p-4">
            <Slider {...settings} className="">
                {TestimonailData?.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide flex justify-center relative mb-6 ">
                        <Card className='!max-w-[400px] h-[245px] p-10 rounded-md mx-auto'>
                        
                            <p className="text-[14px] font-[400] leading-[32px] mb-4 my-4">{testimonial.desc}</p>
                            <h4 className="font-bold text-[18px]">{testimonial.name}</h4>
                            <span className="text-sm text-gray-500 mb-4">{testimonial.address}</span>
                        </Card>
                        <img
                            src={testimonial?.image}
                            alt='testimonial'
                            className='absolute top-[0%] left-[18%] w-[56px] h-[56px] rounded-full border-2 border-white'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CardSlider;
