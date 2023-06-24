import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            EVERYTHING START
            <span className="sm:block"> WITH A THOUGHT. </span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="">
          <a
            href="#"
            className="my-4 max-w-[550px] bg-white relative block overflow-hidden rounded-lg border text-left border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  I want to be a blockchain developer, that&apos;s why I am
                  learning it everyday.
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By John Doe
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt="Paul Clapton"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="max-w-[40ch] text-sm text-gray-500">
                Greetings, my name is Kritik Sah, and I am a 23-year-old
                frontend web developer. I possess a strong zeal for expanding my
                knowledge and skillset within the realm of web3 and blockchain
                technology.
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">31st June, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">3 minute</dd>
              </div>
            </dl>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
