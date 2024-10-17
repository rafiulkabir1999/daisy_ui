'use client'
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SeeMore from "../components/Button";
import ModifySearch from "../components/ModifySearch";
import SearchResult from "../components/SearchResult";
import Airlines from '../components/filter/Airlines'
import Price from '../components/filter/Price'
import Banner from '../components/banner/Banner01'
import Gallery from '../components/banner/Gallery'
import WorkWithUs from '../components/WorkWithUs'
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Autoplay, Pagination } from "swiper";
// import { Pagination } from 'swiper/modules';
// import { Autoplay, Pagination, Navigation } from "swiper/react";
// Swiper.use([Autoplay, Pagination, Navigation]);
function Page() {
  return (
    <div className="">
      
      <Hero />

      <div className="w-full container flex  my-10 gap-10 h-[500px]">
      <Swiper
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
    slidesPerView={4}
    centeredSlides={false}
    spaceBetween={20}
    grabCursor={true}
    pagination={{
      clickable: true,
    }}
    // modules={[AutoPlay,Pagination]}
    className="mySwiper"
  >
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
  </Swiper>
      </div>
      <Banner />
      <div className="container  my-32 space-y-32">
      <Gallery />
      <WorkWithUs />
      </div>
    </div>
  );
}

export default Page;
