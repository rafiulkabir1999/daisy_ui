import React from 'react'

function Banner01() {
  return (
    <div className=" h-[230px] flex flex-col justify-center items-center bg-[url('/image/slider2-city-new.png')] bg-cover bg-center text-white text-center">
     <div className="w-[40%] leading-10 space-y-4">
     <h1 className='text-5xl top-10 font-bold drop-shadow'>New Year, New Adventures</h1>
        <p className=' leading-6 opacity-80 font-bold'>Save 15% or more when you book and stay <br />
        before 1 April 2025</p>
        <button className='btn bg-yellow-400 border-none text-white w-52 p-2'>Find Early 2024 Deals</button></div>
    </div>
  )
}

export default Banner01