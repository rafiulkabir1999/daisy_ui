import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Nav from "./components/Nav";
import SeeMore from "./components/Button";

function Page() {
  return (
    <div className="">
      <Nav />

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
