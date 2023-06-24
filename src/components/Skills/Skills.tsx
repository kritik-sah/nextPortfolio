import React from "react";
import { ImLab } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { SiSolidity } from "react-icons/si";
import {
  FaGithub,
  FaJira,
  FaNodeJs,
  FaReact,
  FaWordpress,
  FaYoutube,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            My Skillsets
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Greetings, my name is Kritik Sah, and I am a 23-year-old frontend
            web developer. I possess a strong zeal for expanding my knowledge
            and skillset within the realm of web3 and blockchain technology.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <ImLab className="text-2xl" />
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Problem Solving
                </h2>
                <p className="text-gray-500">I am good at finding solution</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaNodeJs className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Node JS/javascript knowledge
                </h2>
                <p className="text-gray-500">
                  Have good understanding of Javascript/nodejs
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaReact className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  React,Redux, Next.js experience
                </h2>
                <p className="text-gray-500">3+ years of work exp.</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <SiSolidity className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Solidity, EVM chains.
                </h2>
                <p className="text-gray-500">
                  Basic understanding of web3 tech
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaGithub className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Git/Github & version control
                </h2>
                <p className="text-gray-500">
                  Version control & project mannagement
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaJira className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Project Management Tools(Jira)
                </h2>
                <p className="text-gray-500">
                  Good Communication & mannagement skills
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <CgWebsite className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Frontend web development
                </h2>
                <p className="text-gray-500">
                  HTML, CSS, Bootstrap, Tailwind experience
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaWordpress className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Wordpress
                </h2>
                <p className="text-gray-500">
                  Have good developer/ user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex gap-4 items-center border-gray-200 border p-4 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FaYoutube className="text-2xl" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Youtube
                </h2>
                <p className="text-gray-500">Photoshop/ video editing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
