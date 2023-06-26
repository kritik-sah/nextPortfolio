"use client";
import React from "react";
import CreatableSelect from "react-select/creatable";

const data = {
  image: "https://kritik.servicesstrategy.com/img/work/expensetracker.jpg",
  title: "EXPENSE TRACKER",
  desc: "React, Tailwind css expense tracker",
  skills: ["Github", "react", "tailwind css", "responsive"],
  github: "https://github.com/kritik-sah/ReactExpenseTracker",
  link: "https://expensetrackerproj.vercel.app/",
  colab: null,
  personal: true,
};

const Portfolio = () => {
  return (
    <div className="createPosts">
      <h1 className="">Add Portfolio</h1>
      <form className="my-4 space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-xs font-medium text-gray-700"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            placeholder="title..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="desc"
            className="block text-xs font-medium text-gray-700"
          >
            Description
          </label>

          <input
            type="text"
            id="desc"
            placeholder="image url..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-xs font-medium text-gray-700"
          >
            Image
          </label>

          <input
            type="text"
            id="image"
            placeholder="image url..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="github"
            className="block text-xs font-medium text-gray-700"
          >
            Github
          </label>

          <input
            type="text"
            id="github"
            placeholder="Github repo. url..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="link"
            className="block text-xs font-medium text-gray-700"
          >
            Link
          </label>

          <input
            type="text"
            id="link"
            placeholder="url..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="colab"
            className="block text-xs font-medium text-gray-700"
          >
            Colabrator
          </label>

          <input
            type="text"
            id="colab"
            placeholder="Colabrator url..."
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="skills"
            className="block text-xs mb-1 font-medium text-gray-700"
          >
            Skills
          </label>
          <CreatableSelect isMulti id="skills" placeholder="Select skills" />
        </div>
        <div className="flex items-center justify-start gap-4">
          <label
            htmlFor="isPersonal"
            className="relative h-8 w-14 cursor-pointer"
          >
            <input
              type="checkbox"
              id="isPersonal"
              className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />

            <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <svg
                data-unchecked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <svg
                data-checked-icon
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          </label>
          is personal project?
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Portfolio;
