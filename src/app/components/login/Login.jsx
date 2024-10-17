'use client'
import React,{useState} from 'react'
import { FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Image from 'next/image';
import brand from '../../../../public/logo/fingerflights/brand.png'




function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
   <div className="flex">
     <div className='p-6 rounded-l-xl shadow bg-white w-[400px]'>
        <div className="p-4">
            <Image src={brand} className='p-10' />
            {/* <p className='text-center font-bold text-xl opacity-50 pb-20'>Login <br /> </p> */}
            {/* <span>FingerFlights</span> */}
          
           <div className="space-y-4">
           <div className="flex flex-col gap-1">
            <label htmlFor="" class=' opacity-40 flex items-center  gap-2 '><FiUser /> Email</label>
            <input type="text" className='input input-bordered bg-gray-100 opacity-60' />
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="" class=' opacity-40 flex items-center gap-2'><CiLock/>Password</label>
           <div className="relative">
           <input
          type={showPassword ? 'text' : 'password'}
          className="input input-bordered bg-gray-100 opacity-60 w-full pr-10"
          id="password"
        />
            <span
          className="absolute right-3 top-4 cursor-pointer opacity-50"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
           </div>
            </div>
            <div className="flex gap-2 text-sm">
            <input type="radio" className='radio  radio-sm defaultChekeked'></input>
            <p className='text-sm opacity-50'>Remember me </p>
            </div>
            <div className="pt-6">
            <button className='btn w-full text-white input bg-yellow-400'>Submit</button>
            <div className="my-6 w-full text-center flex flex-col">
            <span className='text-center text-gray-400  text-xs hover:underline cursor-pointer hover:text-orange-400'>register a new account</span>
            <span className='text-center text-gray-400  text-xs hover:underline curosr-pointer hover:text-orange-400'>forget password</span>
            </div>
            </div>
           </div>
        </div>
    </div>
    <div className=" bg-[url('/image/login_background.jpg')] bg-cover space-y-4 p-6 rounded-r-xl shadow bg-white w-[400px] flex flex-col items-center justify-center">
       <div className="flex  flex-col gap-4 items-center w-1/2">
       <button className='btn w-full btn-info text-white'>Register </button>
       <button className='btn w-full btn-info text-white'>Login </button>
       <button className='btn w-full btn-info text-white'>Forget Password </button>
       </div>
       <Image className='mt-auto p-10' src={brand} />
    </div>
   </div>
  )
}

export default Login