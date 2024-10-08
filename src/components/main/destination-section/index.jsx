import React from 'react'
import Container from '../../common/container'
import { Heading } from '../../common'
import Card from '../../common/card'
import DesinationData from '../../../data/desination-data'
import { Link } from 'react-router-dom'
import SpringSvg from '../../svgs/spring'

const DestinationSection = () => {
  return (
    <Container className='relative'>
      <Heading subtitle={'Top Selling'} title={'Top Destinations'} />
      <div className='flex flex-col  lg:flex-row  justify-between gap-0  my-[40px] lg:my-[65px]'>
        {DesinationData?.map((item, index) => (
          <Card
            className='p-0 m-0 w-full md:mx-auto lg:mx-0 md:max-w-[300px] lg:max-w-[320px] !h-full lg:!max-h-[457px] !rounded-[36px] mb-10 lg:mb-0'
            key={index}
          >
            <img src={item?.image} alt='img' className='lg:h-[307px] object-cover rounded-t-[24px]' />
            <div className='p-5 lg:p-7'>
              <div className='flex justify-between mb-5'>
                <p className='text-[18px] font-[400] leading-[22px] text-subColor'>{item?.text}</p>
                <p className='text-[18px] font-[400] leading-[22px] text-subColor'>{item?.price}</p>
              </div>
              <Link href='/' className='flex gap-2'>
                <img src='/asset/image/navigation.png' alt='navigation' />
                <p className='text-[14px] font-[400] leading-[20px]'>{item?.tourPlan}</p>
              </Link>
            </div>
          </Card>

        ))}
      </div>
      <div className='hidden lg:block absolute right-[-57px] top-[50%] z-[-1] '>
        <SpringSvg />
      </div>
    </Container>
  )
}

export default DestinationSection