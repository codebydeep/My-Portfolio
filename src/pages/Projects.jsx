import { Icon } from "@iconify/react";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="bg-black text-white flex justify-center border-[0.7px] border-dashed border-gray-700">
          <div className="w-[80vw] md:w-[50vw] p-2">
            <div className="p-4">
              <h2 className="text-2xl font-semibold pb-2">My Projects</h2>

              {/* start - */}
              <ul className="list  rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  My recent Project works are
                </li>

                <li className="list-row mb-4 border border-gray-700 hover:bg-base-100">
                  <div>
                    <div className="text-xsm uppercase font-semibold opacity-60">
                      Remaining Reason
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    • Developed a Backend of coding platform inspired by
                    LeetCode, supporting user roles (Admin/User) with secure
                    authentication and authorization using JWT and bcryptjs.
                    <br />
                    • Integrated Judge0 API to execute and evaluate code
                    submissions in multiple languages in real-time. Admins can
                    manage problem sets, while users can practice coding
                    challenges with a seamless UI.
                    <br />• Ensured secure backend operations and role-based
                    access control for a scalable platform experience.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <Icon
                      icon="mdi:github"
                      width="22"
                      height="22"
                      color="#ffffff"
                    />
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row my-1 border border-gray-700 hover:bg-base-100">
                  <div>
                    <div className="text-xsm uppercase font-semibold opacity-60">
                      Full Stack AI Bot
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    • Integrated LLM logic via Groq SDK to power context-aware
                    responses with function-calling capabilities.
                    <br />
                    • Developed a secure Node.js + Express backend, exposing
                    REST APIs to interact with the agent.
                    <br />• Designed a modern React + Vite frontend with
                    Markdown rendering, syntax highlighting, and dark-mode UI.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <Icon
                      icon="mdi:github"
                      width="22"
                      height="22"
                      color="#ffffff"
                    />
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    />
                  </div>
                  <div>
                    <div>Sabrino Gardener</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Cappuccino
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Cappuccino" quickly gained attention for its smooth melody
                    and relatable themes. The song’s success propelled Sabrino
                    into the spotlight, solidifying their status as a rising
                    star.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
              {/* end- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
