import React from 'react'
import Container from '../../common/container'
import { Button } from '../../common'
import { FaPlay } from "react-icons/fa";
import HeadingLine from '../../svgs/heading-line';
import ShortPlane from '../../svgs/short-plane';


const HeroSection = () => {
    return (
        <Container className='flex flex-col lg:flex-row justify-between h-full lg:max-h-[764px] relative'>
            <div className='hidden lg:block absolute left-[42%] top-[-11%]'>
                <ShortPlane />
            </div>
            <div className='w-full lg:max-w-[545px] text-center lg:text-left'>
                <p className='text-red-500  text-[14px] lg:text-[20px] font-[700] lg:leading-[30px] mb-5'>
                    Best Destinations around the world
                </p>
                <p className='text-[30px] lg:text-[80px] font-bold lg:leading-[89px] tracking-[-4%] mb-5 relative'>
                    Travel,enjoy and live a new and full life
                    <div className='hidden lg:block absolute lg:top-[25%] z-[-1] lg:left-[43%]'>
                        <HeadingLine />
                    </div>
                </p>
                <p className='w-full lg:max-w-[450px]  lg:text-[16px] font-[400] lg:leading-[30px] text-subColor mb-5'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className='flex lg:flex-row gap-8'>
                    <Button text={'Find out more'} className={'text-[18px] font-[500] text-center '} />
                    <div className='flex  gap-4 items-center justify-center'>
                        <button className='bg-redColor h-[50px] w-[50px] rounded-[50%] shadow-[3px_2px_10px_#DF6951] text-white' >
                            <FaPlay className='mx-auto' />
                        </button>
                        <span className='text-[17px ]'>Play Demo</span>

                    </div>
                    <button className='flex items-stretch gap-0  max-w-[170px] '>
                    </button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <img src='/asset/image/Traveller1.png' alt='travaller' />
            </div>
        </Container>
    )
}

export default HeroSection