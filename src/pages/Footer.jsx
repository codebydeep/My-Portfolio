import { Icon } from "@iconify/react";
import React from "react";
import pdf from "/resume.pdf";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="bg-black text-white flex justify-center mb-10 rounded-b-xs border-[0.7px] border-dashed border-gray-700">
          <div className="w-[90vw] sm:w-[70vw] md:w-[70vw] lg:w-[50vw] p-2">
            <div className="p-4">
              <span className="text-lg">Lets connect with me..</span>
              <div className="flex justify-between py-4">
                <ul className="flex gap-4 pt-4">
                  <li>
                    <a href="https://github.com/codebydeep/" target="_blank">
                      <Icon
                        icon="mdi:github"
                        width="22"
                        height="22"
                        color="#ffffff"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/deepansh-vishwakarma/"
                      target="_blank"
                    >
                      <Icon
                        icon="mdi:linkedin"
                        width="22"
                        height="22"
                        color="#ffffff"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:deepanshvish123@gmail.com">
                      <Icon
                        icon="mdi:gmail"
                        width="22"
                        height="22"
                        color="#ffffff"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/deeep_vish" target="_blank">
                      <Icon
                        icon="prime:twitter"
                        width="20"
                        height="20"
                        color="#ffffff"
                      />
                    </a>
                  </li>
                </ul>
                {/* <button className="text-xs">Resume</button> */}
                  <button className="border border-gray-600 border-dashed px-4 py-2 rounded-xl">
                    <a href={pdf} download={pdf}>
                      Resume
                    </a>
                  </button>
              </div>
              <hr class="border-t border-gray-500 opacity-40" />

              <div className="text-center text-xs mt-4">
                Made in ❤️ by Deepansh
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
