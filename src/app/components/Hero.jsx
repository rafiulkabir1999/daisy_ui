import React from "react";
import { FiNavigation } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import Link from "next/link";

function Hero() {
  return (
    <section class="relative h-[620px] bg-[url('/image/slider2-city-new.png')] bg-cover bg-center flex justify-center ">
      <div class="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative z-10 container flex flex-col mt-28">
        <div className="text-center space-y-2 p-4">
          <h1 className="text-white text-6xl font-bold drop-shadow-sm">
            Explore the world together
          </h1>
          <p className="text-2xl text-gray-100">
            Find awesome flights, hotel, tour, car and packages
          </p>
        </div>
        <div className="bg-white p-6 mx-auto rounded-2xl flex flex-col justify-between relative space-y-4 mt-10 shadow-2xl">
          <div className="w-full flex justify-between grow align-items">
            <ul class="flex items-center font-bold opacity-80 space-x-4">
              <li className="text-yellow-400">Flight</li>
              <li>Hotel</li>
              <li>Tour</li>
              <li>Visa</li>
            </ul>
            <div className="space-x-2">
              <button className="border border-gray-200 rounded px-4 py-1">
                traveller
              </button>
              <button className="border border-gray-200 rounded px-4 py-1">
                Economy
              </button>
              {/* <button>Economy</button> */}
            </div>
          </div>
          <div className="flex space-x-4 ">
            <button className="btn btn-sm text-white bg-blue-400 ">OneWay</button>
            <button className="btn btn-sm text-gray-400">RoundTrip</button>
            <button className="btn btn-sm text-gray-400">Multicity</button>
          </div>

          <div className="flex justify-between items-center relative pb-6 gap-8">
            <div className="flex items-center">
            <div className="border rounded-full flex gap-2 p-3 overflow-hidden">
              {/* <Image src={}></Image> */}
              <div className="opacity-50">
                <FiNavigation className="text-xl mt-1" />
                <span></span>
              </div>
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value="Dhaka"
                  className="text-lg font-bold outline-none"
                />
                <div className="opacity-50 line-clamp-1 w-44 text-xs">
                  Hazrat Shahjalal International ..
                </div>
              </div>
            </div>

            <div className="border rounded-full w-12 h-12 text-center flex justify-center items-center">
              <span className="">
                <RiArrowUpDownLine className="rotate-90 opacity-50 text-2xl" />
              </span>
            </div>

            <div className="border rounded-full flex gap-2 p-3  overflow-hidden">
              <div className="">
                <FiNavigation className="text-xl mt-1 opacity-50 rotate-90" />
                <span></span>
              </div>
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value="Chennai"
                  className="text-lg font-bold outline-none"
                />
                <div className="opacity-50 line-clamp-1 w-44 text-xs">
                  MAA,Chennai International Airport
                </div>
              </div>
            </div>
            </div>

            {/* <div className=" border rounded-full flex gap-2 p-3 min-w-44">
              <div className="">
                <FiCalendar className="text-xl mt-1 opacity-50" />
                <span></span>
              </div>
              <div className="">
                <label htmlFor="" className="font-bold text-lg">
                  Traveller
                </label>
                <div className="opacity-50 text-xs">2/02/20243</div>
              </div>
              
             
            </div> */}
            <div className=" border rounded-full flex gap-2 p-3 px-5 min-w-64">
              <div className="">
                <FiCalendar className="text-xl mt-1 opacity-50" />
                <span></span>
              </div>
              <div className="">
                <label htmlFor="" className="font-bold text-lg">
                  Journey
                </label>
                <div className="opacity-50 text-xs">2/02/20243</div>
              </div>
              <span className="w-1  mx-4 h-10 border-r"></span>
              <div className="">
                <FiCalendar className="text-xl mt-1 opacity-50" />
                <span></span>
              </div>
              <div className="">
                <label htmlFor="" className="font-bold text-lg">
                  Return
                </label>
                <div className="opacity-50 text-xs">12/3/2024</div>
              </div>
            </div>
            {/* <div className="border rounded-full flex gap-2 p-3 max-w-52 overflow-hidden"></div> */}
          </div>
          <Link href="searchresult">
          <button className="btn btn-lg bg-yellow-400 text-white text-xl w-52 absolute -bottom-10 left-1/2 transform -translate-x-1/2 shadow-xl">
            <FiSearch />
            Search
          </button></Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
