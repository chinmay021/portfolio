import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skill = () => {
  /* 
  <li>JavaScript</li>
              <li>React</li>
              <li>
                <span>Redux-toolkit</span>
              </li>
              <li>Html</li>
              <li>CSS</li>
              <li>Tanstack Query</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>Framer Motion</li>
*/

  return (
    <div className="home bg-black/90 w-full h-full  relative ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // exit={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="w-full h-full flex flex-col justify-start items-center pb-10"
      >
        <nav className="navbar  flex flex-row-reverse items-center  justify-between overflow-hidden py-6 pr-2 md:p-6 md:mx-[200px]  md:tracking-wider text-md  border-white/40 border-b z-[3]  w-[85%] xl:w-[60%]  lg:mt-8">
          <div className="flex justify-between gap-8">
            <Link
              className="duration-200 text-white hover:text-pink-500"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="duration-200 text-white hover:text-yellow-400"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="duration-200 text-white hover:text-green-400"
              to="/about"
            >
              About
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
        <section className="skills z-[3] mt-8 lg:mt-20 text-white lg:w-[60%] xl:w-[40%] w-[85%]">
          <h1 className="text-gray-300 font-semibold flex items-center text-2xl font-Ubuntu">
            Skills & Tools
            <div className="h-[2px] w-[40%] ::after bg-gray-600 ml-5"></div>
          </h1>
          <section className="skills mt-5 font-Poppins text-white    ">
            <h2 className="  pb-2 text-pink-500 text-lg border-b-2">
              Languages & framework / library
            </h2>
            <ul className="grid grid-cols-2 gap-1 mt-5 md:grid-cols-3 lg:grid-cols-3 ">
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2}}
                className="flex flex-col items-center gap-2 p-5  hover:text-yellow-400 bg-zinc-800 rounded-md duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="text-2xl "
                >
                  <path
                    fill="currentColor"
                    d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03l-1.38.8Z"
                  />
                </svg>
                <span className="">JavaScript</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-blue-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Zm8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Z"
                  />
                </svg>
                <span className="">React</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.15 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-purple-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fill="currentColor"
                      d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598Zm5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492ZM6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894Z"
                    />

                    <defs>
                      <clipPath id="akarIconsReduxFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <span className="">Redux Toolkit</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-orange-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="m145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2l-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3l-21.2 242.2l-1.7 16.2l-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2l102.4 27.7h.4l102-27.6l11.4-118.6H510.9v-.1H306l-22.8-253.5l-1.7-24.3h460.3l-1.6 24.3z"
                  />
                </svg>
                <span className="">HTML</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.25 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-blue-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137l.905-9.923z"
                  />
                </svg>
                <span className="">CSS</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.3 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-[#FF4154] duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742a.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333c-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93c-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664c-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047a.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047a.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188C1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332c.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18a.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426a35.65 35.65 0 0 0-2.074-2.742a.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218a.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102a35.54 35.54 0 0 0-3.363.437a.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2.43a.638.638 0 0 1-.551.316h-2.774a.627.627 0 0 1-.546-.316l-1.395-2.43a.644.644 0 0 1 0-.629l1.395-2.426a.627.627 0 0 1 .546-.316Zm-.491.867h-1.79a.624.624 0 0 0-.546.316l-.899 1.56a.644.644 0 0 0 0 .628l.899 1.563a.632.632 0 0 0 .547.316h1.789a.632.632 0 0 0 .547-.316l.898-1.563a.644.644 0 0 0 0-.629l-.898-1.558a.624.624 0 0 0-.547-.317Zm-.477.828c.227 0 .438.121.547.317l.422.73a.625.625 0 0 1 0 .629l-.422.734a.627.627 0 0 1-.547.317h-.836a.632.632 0 0 1-.547-.317l-.422-.734a.625.625 0 0 1 0-.629l.422-.73a.632.632 0 0 1 .547-.317zm-.418.817a.548.548 0 0 0-.473.273a.547.547 0 0 0 0 .547a.544.544 0 0 0 .473.27a.544.544 0 0 0 .473-.27a.547.547 0 0 0 0-.547a.548.548 0 0 0-.473-.273Zm-4.422.546h.98M18.98 7.75c.391-1.895.477-3.344.223-4.398c-.148-.63-.422-1.137-.84-1.508c-.441-.39-1-.582-1.625-.582c-1.035 0-2.12.472-3.281 1.367a14.9 14.9 0 0 0-1.473 1.316a1.206 1.206 0 0 0-.136-.144c-1.446-1.285-2.66-2.082-3.7-2.39c-.617-.184-1.195-.2-1.722-.024c-.559.187-1.004.574-1.317 1.117c-.515.894-.652 2.074-.46 3.527c.078.59.214 1.235.402 1.934a1.119 1.119 0 0 0-.215.047C3.008 8.62 1.71 9.269.926 10.015c-.465.442-.77.938-.883 1.481c-.113.578 0 1.156.312 1.7c.516.894 1.465 1.597 2.817 2.155a15.21 15.21 0 0 0 1.844.61a1.023 1.023 0 0 0-.07.226c-.391 1.891-.477 3.344-.223 4.395c.148.629.425 1.14.84 1.508c.44.39 1 .582 1.625.582c1.035 0 2.12-.473 3.28-1.364c.477-.37.973-.816 1.489-1.336a1.2 1.2 0 0 0 .195.227c1.446 1.285 2.66 2.082 3.7 2.39c.617.184 1.195.2 1.722.024c.559-.187 1.004-.574 1.317-1.117c.515-.894.652-2.074.46-3.527a14.941 14.941 0 0 0-.425-2.012a1.225 1.225 0 0 0 .238-.047c1.828-.61 3.125-1.258 3.91-2.004c.465-.441.77-.937.883-1.48c.113-.578 0-1.157-.313-1.7c-.515-.894-1.464-1.597-2.816-2.156a14.576 14.576 0 0 0-1.906-.625a.865.865 0 0 0 .059-.195z"
                  />
                </svg>
                <span className="">Tanstack Query</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.35 }}
                className="flex flex-col items-center gap-2 p-5 text-white bg-zinc-800 rounded-md hover:text-[#38bdf8]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                  />
                </svg>
                <span className="">Tailwind CSS</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.4 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-[#F44250]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.118 5.466a2.306 2.306 0 0 0-.623.08c-.278.067-.702.332-.953.583c-.41.423-.49.609-.662 1.469c-.08.423.41 1.43.847 1.734c.45.317 1.085.502 2.065.608c1.429.16 1.84.636 1.84 2.197c0 1.377-.385 1.747-1.96 1.906c-1.707.172-2.58.834-2.765 2.117c-.106.781.41 1.76 1.125 2.091c1.627.768 3.15-.198 3.467-2.196c.211-1.284.622-1.642 1.998-1.747c1.588-.133 2.409-.675 2.713-1.787c.278-1.02-.304-2.157-1.297-2.554c-.264-.106-.873-.238-1.35-.291c-1.495-.16-1.879-.424-2.038-1.39c-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 0 0-1.613-.73zm-4.785 4.36a2.145 2.145 0 0 0-.497.048c-1.469.318-2.17 2.051-1.35 3.295c1.178 1.774 3.944.953 3.97-1.177c.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 0 0-.427.052c-2.158.476-2.237 3.626-.106 4.182c.53.145.582.145 1.111.013c1.191-.318 1.866-1.456 1.549-2.607c-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162c-1.39.477-1.866 2.092-.98 3.336c.557.794 1.96 1.058 2.82.516c1.416-.874 1.363-3.057-.093-3.746c-.38-.186-.663-.271-.963-.268z"
                  />
                </svg>

                <span className="">React Router</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.45}}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-green-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  fill="currentColor"
                  className="text-2xl"
                  viewBox="0 0 128 128"
                >
                  <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" />
                </svg>
                <span className=" ">Framer Motion</span>
              </motion.li>
            </ul>
          </section>
          <section className="tools mt-5 font-Poppins text-white    ">
            <h2 className="  pb-2 text-pink-500 text-lg border-b-2">
              Tools and Platforms
            </h2>
            <ul className="grid grid-cols-2 gap-1 mt-5 md:grid-cols-3 lg:grid-cols-3 ">
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2}}
                className="flex flex-col items-center gap-2 p-5  hover:text-[#F34F29] bg-zinc-800 rounded-md duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82Z"
                  />
                </svg>
                <span className="">Git</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.1 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-[#C12127] duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <g id="evaNpmOutline0">
                    <g id="evaNpmOutline1">
                      <g id="evaNpmOutline2" fill="currentColor">
                        <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3ZM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
                        <path d="M12 9h4v10h-4z" />
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="">NPM</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.15 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-blue-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M36.85 42.5v-8h1.8a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5Z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M33.435 43.324a21.485 21.485 0 1 1 9.89-9.89"
                  />
                  <circle
                    cx="24.179"
                    cy="24.019"
                    r="8.046"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24 15.953h19.944M17.21 28.024L7.239 10.752m23.909 17.29l-9.972 17.272"
                  />
                  <circle
                    cx="38.5"
                    cy="38.5"
                    r="7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="">Developer tools</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-[#BE4248]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a.998.998 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876ZM19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z"
                  />
                  <path
                    fill="currentColor"
                    d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"
                  />
                </svg>
                <span className="">Parcel</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.25 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-blue-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <g
                      fill="currentColor"
                      clipPath="url(#akarIconsVscodeFill0)"
                    >
                      <path d="M.228 8.37s-.584-.427.117-.995L1.98 5.897s.467-.497.962-.064l15.081 11.542v5.534s-.007.87-1.11.774L.227 8.369Z" />
                      <path d="M4.116 11.937L.228 15.509s-.4.3 0 .837l1.805 1.66s.429.465 1.062-.065l4.121-3.158l-3.1-2.846Zm6.824.029l7.13-5.502l-.047-5.505s-.305-1.202-1.32-.576L7.216 9.11l3.724 2.856Z" />
                      <path d="M16.912 23.69c.414.428.916.288.916.288l5.556-2.767c.711-.49.611-1.098.611-1.098V3.588c0-.726-.735-.977-.735-.977L18.444.264c-1.052-.657-1.741.119-1.741.119s.886-.645 1.32.576v21.85c0 .15-.032.297-.095.43c-.127.259-.402.5-1.062.4l.046.051Z" />
                    </g>
                    <defs>
                      <clipPath id="akarIconsVscodeFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
                <span className="">VS Code</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.3 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-[#FF6C37] duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M18.036.131C9.271-.989 1.255 5.198.131 13.964c-1.12 8.765 5.067 16.781 13.833 17.905c8.765 1.12 16.781-5.067 17.9-13.833C32.989 9.271 26.803 1.255 18.036.131zm3.292 9.984c-.297 0-.579.12-.787.333l-5.937 5.932l-.411-.407l-.855-.859c5.849-5.833 6.907-5.891 7.989-5zm-6.479 6.478l5.916-5.921a.831.831 0 0 1 1.204.005a.825.825 0 0 1-.073 1.197l-6.265 5.5zm.438.928l-1.469.317a.085.085 0 0 1-.088-.047a.08.08 0 0 1 .016-.095l.859-.859zm-3.74-.614l1.568-1.563l1.172 1.172l-2.641.567a.1.1 0 0 1-.115-.052a.102.102 0 0 1 .016-.124zm-4.859 8.077c-.057-.005-.1-.057-.095-.109a.122.122 0 0 1 .032-.063h.005l1.26-1.26l1.631 1.631zm3.233-1.677a.313.313 0 0 0-.156.344l.271 1.152c.043.167-.161.28-.281.156H9.75l-1.635-1.636l5.016-5.011l2.427-.525l1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zm7.038-4.567l-1.12-1.12l6.265-5.5c.057-.052.109-.109.156-.167c-.192 1.792-2.703 4.323-5.301 6.787zm4.88-8.615h-.005c-2.183-2.193.901-5.563 3.276-3.584l-2.145 2.152a.161.161 0 0 0 0 .228l1.661 1.663a2.418 2.418 0 0 1-2.787-.459zm3.432 0a2.136 2.136 0 0 1-.359.291l-1.609-1.609l2.041-2.047a2.428 2.428 0 0 1-.073 3.365zm-.131-2.057a.19.19 0 0 0-.072.208a.548.548 0 0 1-.068.599a.185.185 0 0 0 .031.265a.198.198 0 0 0 .109.037c.057 0 .111-.021.141-.063a.931.931 0 0 0 .12-1.005a.185.185 0 0 0-.261-.041z"
                  />
                </svg>
                <span className="">Postman</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.35 }}
                className="flex flex-col items-center gap-2 p-5 text-white bg-zinc-800 rounded-md hover:text-[#2684FF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84a.84.84 0 0 0-.84-.84h-9.63M6.77 6.8a4.362 4.362 0 0 0 4.34 4.34h1.8v1.72a4.362 4.362 0 0 0 4.34 4.34V7.63a.841.841 0 0 0-.83-.83H6.77M2 11.6c0 2.4 1.95 4.34 4.35 4.34h1.78v1.72c.01 2.39 1.95 4.34 4.34 4.34v-9.57a.84.84 0 0 0-.84-.84L2 11.6Z"
                  />
                </svg>
                <span className="">Jira</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.4 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>

                <span className="">Github</span>
              </motion.li>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // exit={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.2, delay: 0.45 }}
                className="flex flex-col items-center gap-2 p-5  text-white bg-zinc-800 rounded-md hover:text-purple-500 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  className="text-2xl"
                  viewBox="0 0 510 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144zm-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684L256.89 493.71z"
                  />
                </svg>
                <span className=" ">Vite</span>
              </motion.li>
            </ul>
          </section>
        </section>
      </motion.div>
    </div>
  );
};

export default Skill;
