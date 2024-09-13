import React from 'react'
import Container from '../../common/container'
import { Heading, Text } from '../../common'
import BookingTripData from '../../../data/bookingtrip-data'
import Card from '../../common/card'
import LeafSvg from '../../svgs/leaf'
import MapSvg from '../../svgs/map'
import NavigationSvg from '../../svgs/naviagtion'
import BuildingSvg from '../../svgs/building'
import HeartSvg from '../../svgs/heart'
import EllipseSvg from '../../svgs/ellipse'


const BookTripSection = () => {
  return (
    <Container className={'h-full !max-h-[492px] mb-10'}>
      <div className='flex flex-col lg:flex-row justify-between gap-0 h-full max-h-[400px] relative'>


        <div className='w-full lg:max-w-[450px]'>
          <Heading
            subtitle={'Easy and Fast'}
            title={'Book your next trip in 3 easy steps'}
            className={'!text-left !items-start'}
          />

          <ul className='w-full lg:max-w-[395px] my-2'>
            {BookingTripData?.map((item, index) => (
              <li key={index} className='mb-4 lg:h-[90px]'>
                <div className='flex gap-4'>
                  <img src={item.image} alt={item?.title} className='object-contain' />
                  <div>
                    <p className='text-[16px] font-[700] leading-[23px] text-subColor'>{item?.title}</p>
                    <p className='text-[15px] font-[400] leading-[20px] text-subColor'>{item?.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className='relative pr-[100px]'>
          <Card className='my-14 z-20 w-full max-w-[370px] h-full max-h-[400px] p-7 rounded-[24px]'>
            <img src='/asset/image/tripimage.jpg' alt='girl' className='w-full rounded-[24px]' />
            <div className='my-7'>
              <p className='text-greeceColor font-[600] font-serif text-[18px] leading-[22px] tracking-[4%]'>Trip To Greece</p>
              <div className='flex gap-2 my-4 text-dataColor'>
                <Text text={'14-29 June'} />
                <Text text={'by Robbin Joseph'} />
              </div>
              <div className='flex gap-6 my-4'>
                <button className='flex items-center bg-[#F5F5F5] justify-center rounded-[50%] w-[36px] h-[36px]  font-[900] text-[#F5F5F5]'>
                  <LeafSvg />

                </button>

                <button className='flex items-center bg-[#F5F5F5] justify-center rounded-[50%] w-[36px] h-[36px]  font-[900] text-[#F5F5F5]'>
                  <MapSvg />
                </button>
                <button className='flex items-center bg-[#F5F5F5] justify-center rounded-[50%] w-[36px] h-[36px]  font-[900] text-[#F5F5F5]'>
                  <NavigationSvg />
                </button>
              </div>
              <div className='flex justify-between my-7'>
                <div className='flex gap-4'>
                  <BuildingSvg />
                  <p className='text-[14px] font-[400] leading-[20px] text-subColor'>24 people going</p>
                </div>
                <button>
                  <HeartSvg />
                </button>
              </div>
            </div>
          </Card>
          <Card className='absolute bottom-0 left-[50%] p-2 right-0 z-20 !h-[129px] !w-[250px] rounded-[20px]'>
            <div className='flex gap-4 p-3 relative'>
              <div>
                <img src='/asset/image/MaskGroup.png' alt='Ongoing trip' className='object-contain' />
              </div>
              <div>
                <p className='text-[12px] font-[400] leading-[17px] text-subColor mb-1'>Ongoing</p>
                <p className='text-[18px] font-[500] leading-[17px] text-greeceColor mb-2'>Trip to Rome</p>
                <div className='mb-1 text-[12px] font-[400]'>
                  <span className='text-subColor'>40%</span> <b>completed</b>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 relative'>
                  <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </Card>

        </div>
        {/* <div className="absolute  left-[45%] bottom-0 z-[-1] " >
          <EllipseSvg />
        </div> */}
      
        <div className="absolute top-[-10px] right-0 w-[354px]  h-[367px] opacity-[20%] bg-ellipse shadow-ellipse z-[-1]" />



      </div>


    </Container>

  )
}

export default BookTripSection