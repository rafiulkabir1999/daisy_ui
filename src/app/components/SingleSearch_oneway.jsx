'use client'
import React from "react";
import Image from "next/image";
import usbangla from "../../../public/logo/usbangla.png";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

function SingleSearch_oneway() {

    const [Status,setStatus] = React.useState(false)
    const toggleDetails = () => {
     setStatus(state => !state)
    }

    const airport_name = {
      // boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      // padding: '20px', // Adding padding to make the shadow more visible
      // backgroundColor: '#f9f9f9', // Optional: background color for contrast
    };

  return (
    <div className="bg-white  rounded-xl hover:shadow hover:shadow-blue-400">
      <div className={`flex justify-between items-center p-3 ${Status ? 'border-b' : 'border-none'}`}>
        <div className="flex gap-2">
          <Image
          
            src={usbangla}
            alt="usbangla_fingerflight"
            className="rounded-full border"
          />
          <div className="">
            <span className="font-semibold opacity-60 text-sm">Us Banglad</span> <br />
            <span className="opacity-30 text-xs">Boeing</span>
          </div>
        </div>
        <div className="">
          <span className="font-bold opacity-60 text-sm">Dhaka , Thu</span> <br />
          <span className="opacity-50 text-xs">05 jan 2024</span>
        </div>
        <div className="flex justify-center opacity-40 items-center gap-2">
          <span className="text-xs ">Direct</span> <br />
          <FiArrowRight className="text-center" />
        </div>
        <div className="">
          <span className="font-bold opacity-60 text-sm">Dhaka , Thu</span> <br />
          <span className="opacity-50 text-xs">05 jan 2024</span>
        </div>
        <div className="">
          <span className="text-xs opacity-40">45 m</span> <br />
        </div>
             <span onClick={toggleDetails} className=" btn btn-info btn-sm  btn-outline px-4 opacity-50 flex items-center gap-2 p-2 justify-end cursor-pointer hover:text-blue-400">
        Showmore <FiChevronDown />
      </span>
        <div className="text-center space-y-1">
          <span className="font-bold">32,000 BDT</span> <br />
          <button className="btn btn-sm bg-yellow-400 text-white shadow-inner">
            Book Now
          </button>
        </div>
      </div>
      { Status && ( <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <button className="btn btn-sm text-white bg-blue-400">
            DAC - JSR
          </button>
          <div className="flex gap-4">
            <button className="btn btn-sm ">Bagage</button>
            <button className="btn btn-sm ">Fare</button>
            <button className="btn btn-sm ">Policy</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2 gap-2">
            <p className="bg-blue-300 rounded-full px-4 text-white p-2 leading-4  shadow-inner" style={airport_name}>
              Hazrat Shahjalal International Airport,Dhaka
            </p>
            <div className="flex items-center gap-4">
              <div className="flex text-center">
                <FiArrowDown className="text-xl" />
                <span className="font-bold opacity-60">45 m</span>
              </div>
              <div className="flex gap-2">
                {/* <Image
                  src={usbangla}
                  alt="usbangla_fingerflight"
                  className="rounded-full border w-14 h-14"
                /> */}
                <div className="">
                  <span className="font-semibold text-sm opacity-90 ">Us Banglad</span>{" "}
                  <br />
                  <span className="opacity-50 text-xs">Boeing</span>
                </div>
              </div>
              <div className="">
                <span className="font-semibold text-sm opacity-90 ">ECONOMY-A(A)</span>{" "}
                <br />
                <span className="opacity-50 text-xs">Flight No :TK713</span>
              </div>
              <div className="">
                <span className="font-semibold text-sm opacity-90 ">12:30 am</span> <br />
                <span className="opacity-50 text-xs">8 oct Thusday</span>
              </div>
              <div className="">
                <span className="font-semibold text-sm opacity-90 ">12:30 am</span> <br />
                <span className="opacity-50 text-xs">8 oct Thusday</span>
              </div>
            </div>
            <p className="bg-blue-300 rounded-full px-4 text-white p-2 leading-4" style={airport_name}>
              Hazrat Shahjalal International Airport,Dhaka
            </p>
          </div>
          <div className=" ">
            <p className="max-w-[300px] text-xs">
              In a distant land where the sky shimmered with hues of lavender
              and gold, the ancient city of Elyria stood tall amidst the rolling
              hills. Its towers spiraled into the clouds, where birds with
              silver feathers soared in graceful arcs. The people of Elyria
              spoke of the olden times, when dragons roamed the skies and magic
              flowed freely through the rivers. Now, the last remnants of that
              ancient magic lay dormant beneath the city, waiting for the chosen
              one to awaken it.
            </p>
          </div>
        </div>
      </div>)
      }
      {/* <span onClick={toggleDetails} className="bg-gray-100 opacity-50 flex items-center gap-2 p-2 justify-end cursor-pointer hover:text-blue-400">
        Showmore <FiChevronDown />
      </span> */}
    </div>
  );
}

export default SingleSearch_oneway;
