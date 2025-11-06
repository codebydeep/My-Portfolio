import { Icon } from "@iconify/react";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-black">
        <div className="bg-black text-white flex justify-center border-[0.7px] border-dashed border-gray-700">
          <div className="w-[80vw] md:w-[50vw] p-2 ">
            <div className="p-4">
              <h2 className="text-2xl font-semibold pb-5">My Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* // boxes here - */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon icon="codicon:code" width="25" height="25" />
                    Programming Languages
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:javascript" width="18" height="18" />
                      JavaScript
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:typescript" width="18" height="18" />
                      TypeScript
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:java" width="18" height="18" />
                      Java
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="vscode-icons:file-type-sql"
                        width="18"
                        height="18"
                      />
                      SQL
                    </span>
                  </div>
                </div>
                {/* 2 */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon
                      icon="vscode-icons:file-type-image"
                      width="25"
                      height="25"
                    />
                    Frontend Development
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:react" width="18" height="18" />
                      React
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:nextjs" width="18" height="18" />
                      Next.JS
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:zustand" width="18" height="18" />
                      Zustand
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:tailwindcss" width="18" height="18" />
                      TailwindCSS
                    </span>
                  </div>
                </div>
                {/* 3- */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon
                      icon="material-icon-theme:folder-database-open"
                      width="25"
                      height="25"
                    />
                    Backend Development
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="vscode-icons:file-type-node"
                        width="18"
                        height="18"
                      />
                      Node
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="skill-icons:expressjs-light"
                        width="18"
                        height="18"
                      />
                      Express
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:fastify" width="18" height="18" />
                      Fastify
                    </span>
                  </div>
                </div>
                {/* 4- */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon
                      icon="material-icon-theme:database"
                      width="25"
                      height="25"
                    />
                    Databases
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="vscode-icons:file-type-mongo"
                        width="18"
                        height="18"
                      />
                      MongoDB
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="skill-icons:mysql-light"
                        width="18"
                        height="18"
                      />
                      MySQL
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:prisma" width="18" height="18" />
                      Prisma ORM
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:redis" width="18" height="18" />
                      Redis
                    </span>
                  </div>
                </div>
                {/* 5- */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon icon="codicon:cloud" width="25" height="25" />
                    DevOps |
                    <Icon
                      icon="material-icon-theme:gemini-ai"
                      width="18"
                      height="18"
                    />
                    AI
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="vscode-icons:file-type-docker"
                        width="18"
                        height="18"
                      />
                      Docker
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="material-icon-theme:folder-git"
                        width="18"
                        height="18"
                      />
                      CI/CD
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="skill-icons:aws-light"
                        width="18"
                        height="18"
                      />
                      AWS
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:docker" width="18" height="18" />
                      Jenkins
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="material-icon-theme:gemini-ai"
                        width="18"
                        height="18"
                      />
                      OpenAI
                    </span>
                  </div>
                </div>
                {/* 6- */}
                <div className="max-w-sm p-4 border border-gray-500 rounded-xl shadow-sm">
                  <h3 className="flex items-center gap-2 font-semibold mb-5">
                    <Icon
                      icon="material-icon-theme:settings"
                      width="25"
                      height="25"
                    />
                    Tools
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="material-icon-theme:git"
                        width="18"
                        height="18"
                      />
                      Git
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon
                        icon="skill-icons:github-light"
                        width="18"
                        height="18"
                      />
                      GitHub
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:postman" width="18" height="18" />
                      Postman
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:vscode" width="18" height="18" />
                      VS Code
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-500">
                      <Icon icon="devicon:intellij" width="18" height="18" />
                      IntelliJ IDEA
                    </span>
                  </div>
                </div>
                {/* // end here- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
