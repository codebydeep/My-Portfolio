import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="bg-black text-white flex justify-center mb-10 rounded-b-xs border-[0.7px] border-dashed border-gray-700">
          <div className="w-[80vw] md:w-[50vw] p-2">
            <div className="p-4">
              <span className="">Lets connect with me..</span>
              <div className="flex justify-between py-4">
                <ul className="flex gap-4">
                  <li>
                    <Icon
                      icon="mdi:github"
                      width="22"
                      height="22"
                      color="#ffffff"
                    />
                  </li>
                  <li>
                    <Icon
                      icon="mdi:linkedin"
                      width="22"
                      height="22"
                      color="#ffffff"
                    />
                  </li>
                  <li>
                    <Icon
                      icon="mdi:gmail"
                      width="22"
                      height="22"
                      color="#ffffff"
                    />
                  </li>
                  <li>
                    <Icon
                      icon="prime:twitter"
                      width="20"
                      height="20"
                      color="#ffffff"
                    />
                  </li>
                </ul>
                {/* <button className="text-xs">Resume</button> */}
                <div className="">
                  <button className="border border-gray-600 border-dashed px-4 py-2">Resume</button>
                </div>
              </div>
              <hr />
              <div className="text-center text-xs mt-4">
                Made in love by Deepansh
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
