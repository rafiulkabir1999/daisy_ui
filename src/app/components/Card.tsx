'use client'
import React from 'react'
import { FiClock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



function Card() {
  return (
 
        <div className="cursor-pointer">
        <div className="bg-[url('/image/background-1.png')] hover:shadow-xl  rounded-t-2xl h-64">
        <div className=""></div>
    </div>
    <div className="bg-white border p-4 space-y-3 rounded-b-2xl">
        <p className='font-bold text-sm'>Napa Valley Delights: Wine
        Country Retreat</p>
        <div className="flex justify-between">
            <span className='flex items-center gap-3 text-xs'><FiClock />7 days 6 night</span>
            <span className='flex items-center gap-3 text-xs'><FiUser />4-6 guest</span>
        </div>
        <div className="flex justify-between">
            <div className="">
                <span className='font-bold text-sm'>$15</span>/person
            </div>
            <button className='btn btn-sm bg-yellow-400 text-white'>Book Now</button>
        </div>
    </div>
    </div>

//  <div>
//         <Swiper
//     slidesPerView={4}
//     centeredSlides={true}
//     spaceBetween={30}
//     grabCursor={true}
//     pagination={{
//       clickable: true,
//     }}
//     modules={[Pagination]}
//     className="mySwiper"
//   >
//     <SwiperSlide>Slide 1</SwiperSlide>
//     <SwiperSlide>Slide 2</SwiperSlide>
//     <SwiperSlide>Slide 3</SwiperSlide>
//     <SwiperSlide>Slide 4</SwiperSlide>
//     <SwiperSlide>Slide 5</SwiperSlide>
//     <SwiperSlide>Slide 6</SwiperSlide>
//     <SwiperSlide>Slide 7</SwiperSlide>
//     <SwiperSlide>Slide 8</SwiperSlide>
//     <SwiperSlide>Slide 9</SwiperSlide>
//   </Swiper>
//  </div>

  )
}

export default Card