import React from "react";
import Image from "next/image";
import FingerFlight from "../../../public/logo/fingerflights/brand.png";
import World from "../../../public/icon/world.svg";
import Menu from "../../../public/icon/world.svg";
import Link from "next/link";

function Nav() {
  return (
    <div className="navbar mx-auto px-6 bg-white shadow">
      <div className="navbar-start space-x-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div
          style={{
            width: "200px",
            height: "45px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={FingerFlight}
            alt="Finger Flight"
            layout="fill" // Make sure the image fills the parent div
            objectFit="contain" // Adjusts the image to contain within the dimensions
          />
        </div>
        <ul className="menu menu-horizontal px-1  opacity-70 text-md">
          <li>
            <a className="font-bold text-primary">Home</a>
          </li>
          <li>
            <a>Flight</a>
          </li>
          <li>
            <a>Tours</a>
          </li>
          <li>
            <a>Hotel</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <span className="flex gap-2">
                    {/* <Image src={World} /> */}
                    USD
                  </span>
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="text-nowrap">Submenu 1</a>
                  </li>
                  <li>
                    <a className="text-nowrap">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <span className="flex gap-2">
                    <Image src={World} />
                    EN
                  </span>
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="text-nowrap">Submenu 1</a>
                  </li>
                  <li>
                    <a className="text-nowrap">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          <li>
        <Link href='/login' className="btn btn-sm btn-primary">Login</Link>

          </li>
          <li>
             <Image src={Menu}/>
          </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Nav;
