import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import SeeMore from "./components/Button";

function Page() {
  return (
    <div className="">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Card</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
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
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm">Button</a>
        </div>
      </div>

      <div className="flex gap-10 gap-y-10  container mx-auto xl:gap-x-[50px] xl:py-16">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-6xl font-bold">
            High Quality <br />
            NFT Collection
          </h1>

          <p className="text-sm">
            Sure! Could you share a bit more about the focus of your website,
            <br />
            such as its purpose or the type of content it will feature? <br />
            That way I can suggest a more tailored title.
          </p>
          <SeeMore />

          <div className="flex gap-5">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl text-white">43K +</p>
              <span className="text-white">followers</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex "></div>
      </div>
    </div>
  );
}

export default Page;
