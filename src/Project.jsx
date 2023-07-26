import { useEffect } from "react";
import { Link } from "react-router-dom";

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

    for (const card of document.querySelectorAll(".card")) {
      card.onpointermove = (event) => handleOnPointerMove(event);
    }
  }, []);

  return (
    <>
      <div className="project w-screen h-screen overflow-auto bg-black">
        <div className="px-6 mx-auto space-y-8 max-w-7xl md:px-8 md:space-y-16 pt-6 lg:pt-10 h-screen font-Poppins  ">
          <nav className="navbar  flex flex-row-reverse items-center  justify-between overflow-hidden p-6 mx-auto  md:tracking-wider text-sm  border-b-[1px] border-white/40">
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
            <p className="mt-4 text-zinc-400 font-ubuntu tracking-tighter">
              Some of the projects I made during my journey 🎉
            </p>
            <div className="projects-card-wrapper flex justify-center flex-col gap-8 items-center w-full pt-36 ">
              <div className="card group mb-6  h-[28em] w-full md:w-[80%] rounded-lg border border-white/10 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)]  bg-[length:1.1rem_1.1rem] bg-[50%_50%] relative">
                <div className="img"></div>
                <div className="details"></div>
                <div className="blob h-full w-full absolute left-0 top-0 z-10 bg-[radial-gradient(_800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_40%_)] opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
