import { useEffect } from "react";
import { Link } from "react-router-dom";
import streamyImage from "./assests/streamy-homepage.webp";
import foodvillaImage from "./assests/foodvilla.webp";
import { motion } from "framer-motion";

const Project = () => {
  useEffect(() => {
    const handleOnPointerMove = (event) => {
      const { currentTarget: target } = event;

      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const cardDetails of document.querySelectorAll(".details")) {
      cardDetails.onpointermove = (event) => handleOnPointerMove(event);
    }
  }, []);

  return (
    <>
      <div className="project w-screen h-screen overflow-auto bg-black">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // exit={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="px-6 mx-auto space-y-8 max-w-7xl md:px-8 md:space-y-16 pt-6 lg:pt-10 h-screen font-Poppins  "
        >
          <nav className="navbar  flex flex-row-reverse items-center  justify-between overflow-hidden p-6 mx-auto  md:tracking-wider text-sm   border-white/40">
            <div className="flex justify-between gap-8">
              <Link
                className="duration-200 text-white hover:text-pink-500"
                to="/about"
              >
                About
              </Link>
              <Link
                className="duration-200 text-white hover:text-yellow-400"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="duration-200 text-white hover:text-yellow-400"
                to="/skills"
              >
                Skills
              </Link>
            </div>
            <Link
              className="duration-200 text-white hover:text-green-500"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 "
              >
                <line x1="19" x2="5" y1="12" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </Link>
          </nav>
          <div className="mx-8  lg:mx-10 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-ubuntu">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter pb-6 border-b border-white/20">
              Some of the projects I made during my journey 🎉
            </p>
            <div className="projects-card-wrapper flex justify-center flex-col gap-8 items-center w-full pt-36 ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="card group mb-6 flex flex-col w-full md:w-[80%] rounded-lg border border-white/20 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)]  bg-[length:1.1rem_1.1rem] bg-[50%_50%] "
              >
                <img
                  className="img w-full  rounded-lg rounded-b-none   bg-white"
                  src={streamyImage}
                ></img>
                <div className="details w-full text-white font-Poppins px-4 py-2 md:px-8 md:py-8 flex flex-col gap-6 relative">
                  <div className="project-name text-pink-500 text-lg md:text-3xl ">
                    Streamy
                  </div>
                  <div className="project-details text-xs   text-zinc-200 md:text-sm md:leading-6 tracking-wide ">
                    <p>
                      Streamy is a web application built using React.js that
                      allows users to watch videos. It uses the YouTube API to
                      show videos and provide an experience similar to YouTube.
                      The application also comes with features such as a video
                      summarizer using Chat GPT, cache network calls using
                      React/Tanstack Query to reduce the number of requests to
                      the API, a highly optimized search feature using
                      debouncing and caching, responsive design, and dark mode.
                    </p>
                  </div>
                  <div className="project-stack text-xs md:text-sm border-b border-white/20 pb-4 text-zinc-400">
                    <ul className="flex justify-around pt-4">
                      <li>React.js</li>
                      <li>Redux toolkit</li>
                      <li>React Query</li>
                      <li>Tailwind CSS</li>
                      <li>React Router</li>
                    </ul>
                  </div>
                  <div className="project-links">
                    <div className="md:mt-6 mb-3 flex justify-end gap-10 items-center">
                      <a
                        href="https://github.com/chinmay021/Streamy"
                        className="hover:-translate-y-1 transition-all z-[3]"
                        target="_blank"
                        rel="noreferrer"
                        cursor="pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a
                        href="https://streamydev.vercel.app/"
                        className="hover:-translate-y-1 transition-all z-[3]"
                        target="_blank"
                        rel="noreferrer"
                        cursor="pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="blob h-full w-full absolute left-0 top-0 z-[2] bg-[radial-gradient(_800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,0,166,0.2),transparent_40%_)] opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="card group mb-6 flex flex-col w-full md:w-[80%] rounded-lg border border-white/20 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)]  bg-[length:1.1rem_1.1rem] bg-[50%_50%] "
              >
                <img
                  className="img w-full rounded-lg rounded-b-none   bg-white"
                  src={foodvillaImage}
                ></img>
                <div className="details w-full text-white font-Poppins  px-4 py-2 md:px-8 md:py-8 flex flex-col gap-6 relative">
                  <div className="project-name text-yellow-500 text-xl md:text-3xl ">
                    FoodVilla
                  </div>
                  <div className="project-details text-xs   text-zinc-200 md:text-sm md:leading-6 tracking-wide ">
                    <p>
                      FoodVilla is a high-performance food ordering app using
                      Swiggy live API for real-time data. Discover top nearby
                      restaurants and their dishes, with options to select
                      location, sort by delivery time, cost, and ratings for a
                      seamless user experience.
                    </p>
                  </div>
                  <div className="project-stack text-sm border-b border-white/20 pb-4 text-zinc-400">
                    <ul className="flex justify-around pt-4">
                      <li>React.js</li>
                      <li>Redux toolkit</li>
                      <li>React-stripe-checkout</li>
                      <li>Tailwind CSS</li>
                      <li>React Router</li>
                    </ul>
                  </div>
                  <div className="project-links">
                    <div className="md:mt-6 mb-3 flex justify-end gap-10 items-center">
                      <a
                        href="https://github.com/chinmay021/fooodvilla"
                        className="hover:-translate-y-1 transition-all z-[3]"
                        target="_blank"
                        rel="noreferrer"
                        cursor="pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a
                        href="https://fooodvilla.netlify.app/"
                        className="hover:-translate-y-1 transition-all z-[3]"
                        target="_blank"
                        rel="noreferrer"
                        cursor="pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5FF4D1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="blob h-full w-full absolute left-0 top-0 z-[2] bg-[radial-gradient(_800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,219,0,0.2),transparent_40%_)] opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Project;
