import React from "react";
import img from "../assets/developer.jpeg";
import SmoothFollower from "../SmoothFollower";
import TextType from "./component/TextType";
import { Icon } from "@iconify/react"

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="main-div bg-[#000000] text-white flex justify-center mt-10 rounded-t-sm border-[0.7px] border-dashed border-gray-700">
          <div className="w-[80vw] md:w-[50vw] p-2">
            <div className="p-4 relative">
              <div className="w-full h-[150px]">
                <div className="shadow-[inset_14px_24px_16px_-21px_rgba(209,217,230,0.34),inset_14px_28px_20px_-21px_rgba(209,217,230,0.4),inset_14px_35px_27px_-21px_rgba(209,217,230,0.48),inset_14px_54px_43px_-21px_rgba(209,217,230,0.67),inset_-36px_-63px_47px_-21px_rgba(255,255,255,0.75),inset_-36px_-36.8341px_24.6719px_-21px_rgba(255,255,255,0.54),inset_-36px_-31.3638px_17.026000000000003px_-21px_rgba(255,255,255,0.45),inset_-36px_-28.4185px_16px_-21px_rgba(255,255,255,0.38)]"></div>
              </div>
              <div className="absolute w-36 h-36 border border-black rounded-full top-30">
                <img
                  src={img}
                  alt="Photo"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex justify-between pt-26">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-semibold tracking-wider hover:text-gray-400">
                    Deepansh Vishwakarma
                  </span>
                  <span className="text-xsm text-gray-400 tracking-wide font-semibold">
                    <span className="text-gray-300">Heyy👋 I am a </span>
                    <TextType
                      text={[" Software Engineer", " Full stack developer"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                  </span>
                </div>
                <div className="list-none flex justify-between gap-2 pt-10 cursor-pointer">
                  <li>
                    <Icon icon="mdi:github" width="22" height="22" color="#ffffff" />
                  </li>
                  <li>
                    <Icon icon="mdi:linkedin" width="22" height="22" color="#ffffff" />
                  </li>
                  <li>
                    <Icon icon="mdi:gmail" width="22" height="22" color="#ffffff" />
                  </li>
                  <li>
                    <Icon icon="prime:twitter" width="22" height="22" color="#ffffff" />
                  </li>
                </div>
              </div>
            </div>
            <hr className="bg-gray-900" />
            <div className="px-4 py-10">
              <p className="text-justify tracking-wide text-slate-400">
                I build from zero. Whether it's frontend, backend, full-stack
                applications, or AI-powered experiences, I work across the
                entire development lifecycle. From UI/UX to deployment to user
                feedback, I care less about technology debates and more about
                delivering results that people love using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
