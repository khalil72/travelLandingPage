import React from 'react'
import Container from '../../common/container'
import { Button } from '../../common'

const HeroSection = () => {
    return (
        <Container className='flex justify-between h-full max-h-[764px]'>
            <div className='w-full max-w-[545px] text-center lg:text-left'>
                <p className='text-red-500 text-[20px] font-bold leading-[30px] mb-5'>
                    Best Destinations around the world
                </p>
                <p className='text-[80px] font-bold leading-[89px] tracking-[-4%] mb-5'>
                    Travel,enjoy and live a new and full life
                </p>

                <p className='w-full max-w-[450px]  text-[16px] font-[400] leading-[30px] text-subColor mb-5'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className='flex lg:flex-row gap-5'>
                    <Button text={'Find out more'} className={'text-[18px] font-[500] text-center '} />
                    <button className='flex items-stretch gap-0  max-w-[170px]  '>
                        <img src='/asset/image/Playbutton.png' alt='demo' className='h-[90px] w-[82px]' />
                        <span className='text-[14px] font-[500] my-6'>Play Demo</span>
                    </button>
                </div>


            </div>
            <div>
                <img src='/asset/image/Traveller1.png' alt='travaller' />
            </div>

        </Container>
    )
}

export default HeroSection