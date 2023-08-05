import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className=" w-screen h-screen bg-black/90 overflow-hidden relative">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="wrapper h-full  px-6 mx-auto space-y-8 max-w-7xl md:px-8 md:space-y-16 pt-6 lg:pt-10 z-[3] "
      >
        <nav className="navbar  flex flex-row-reverse items-center  justify-between overflow-hidden p-6 mx-auto  md:tracking-wider text-md     border-white/40 border-b">
          <div className="flex justify-between gap-8">
            <Link
              className="duration-200 text-white hover:text-pink-500"
              to="/about"
            >
              About
            </Link>
            <Link
              className="duration-200 text-white hover:text-yellow-400"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="duration-200 text-white hover:text-yellow-400"
              to="/skills"
            >
              Skills
            </Link>
          </div>
          <Link className="duration-200 text-white hover:text-green-500" to="/">
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
        <div className="contact-wrapper flex flex-col justify-start items-center  h-full  gap-40">
          <div className="contact-details w-full  lg:w-3/5 flex-col justify-center items-center pl-4">
            <h1 className="text-gray-300 pb-8 font-semibold flex items-center text-2xl font-Ubuntu">
              Get in touch!
              <div className="h-[1px] w-[40%] ::after bg-gray-600 ml-5"></div>
            </h1>
            <div className="mt-5 font-Ubuntu text-gray-300 text-md  xl:text-lg  text-[#d1d3d6be]"></div>
            <p className="text-white font-Poppins text-sm md:text-base lg:tracking-wide whitespace-break-spaces">
              Thanks for checking in. I&#39;m currently looking for new
              opportunities to work with talented people and companies. I&#39;m
              highly adaptable and always willing to learn new technologies as
              required by the company. If you think I might be a good fit for
              your team or you just want to learn more about what I do,
              don&#39;t hesitate to reach out via email{" "}
              <a
                href="mailto:chinmaykumar021@gmail.com"
                className="hover:underline text-pink-500"
              >
                chinmaykumar021@gmail.com
              </a>{" "}
              or anywhere you feel comfortable to contact. I am always excited
              to work on some awesome projects, talk or play some games 😃.
            </p>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // exit={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="socials text-white w-full flex justify-center items-center gap-5 lg:gap-20"
          >
            <button>
              <a
                href="https://github.com/chinmay021"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  stroke="#white"
                  fill="white"
                  strokeWidth="2"
                  className="hover:fill-blue-400 h-8 md:h-10 duration-300 hover:scale-105"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              {/* <span className="">github</span> */}
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/chinmay-kumar-950754144/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                  className="hover:fill-blue-400 h-8 md:h-10 duration-300 hover:scale-105"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              {/* <span>linkedIn</span> */}
            </button>
            <button>
              <a
                href="https://twitter.com/chinmay_kr"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                  className="hover:fill-blue-400 h-8 md:h-10 duration-300 hover:scale-105"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                </svg>
              </a>
            </button>
            <button>
              <a
                href="https://steamcommunity.com/profiles/76561198404123987/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  fill="white"
                  className="hover:fill-blue-400 h-8 md:h-10 duration-300 hover:scale-105"
                >
                  <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
                </svg>
              </a>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
