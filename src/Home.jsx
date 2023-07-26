import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

const Home = () => {
  useEffect(() => {
    const blob = document.querySelector("#blob");
    // console.log(blob);

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      // console.log(clientX, clientY);

      blob.animate(
        {
          left: clientX - blob.clientWidth / 2 + "px",
          top: clientY - blob.clientHeight / 2 + "px",
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div className="home bg-black flex flex-col items-center justify-center w-screen h-screen overflow-hidden relative">
      <nav className="nav absolute top-10 right-40 z-[3] font-medium ">
        <button>
          <a
            href="https://drive.google.com/file/d/1xRPPrtaTr0tngOALP9Q5Kd4EhSd28vW4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 justify-center items-center w-full btn-primary bg-white px-4 py-2 rounded-lg hover:bg-black/90 hover:text-white transition-all  ease-in-out"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl mt-[0.13rem]"
              height="0.8em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="8 17 12 21 16 17"></polyline>
              <line x1="12" y1="12" x2="12" y2="21"></line>
              <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
            </svg>
            Resume
          </a>
        </button>
        <div className="flex items-center space-x-2">
          {/* <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
        </div>
      </nav>
      <div
        id="blob"
        className="bg-white h-[12vmax] aspect-[1] absolute rounded-[50%]  bg-gradient-to-r from-[#7FFFD4] to-[#9370DB] animate-rotate "
      ></div>
      <div
        id="blur"
        className="blur h-full w-full absolute z-[2] backdrop-blur-[10vmax]"
      ></div>
      {/* hero section */}
      <>
        <div className="name text-white z-[3] font-Satisfy text-[clamp(6rem,10vw,10rem)] whitespace-nowrap p-[0rem_clamp(1rem,2vw,3rem)] rounded-[clamp(0.4rem,0.75vw,1rem)] m-0">
          Chinmay.
        </div>
        <div className="subtext my-2 text-center mx-12 z-[3] md:w-[40em] w-[30em] ">
          <h2 className="text-sm 2xl:text-lg text-zinc-300 ">
            Hi 👋, I’m a passionate frontend developer from India.
          </h2>
        </div>
        <nav className="my-4  z-[3] font-Poppins  md:tracking-wider">
          <ul className="flex items-center justify-center gap-4">
            <Link
              className="text-sm  duration-500 text-white  hover:text-green-500"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm duration-500 text-white  hover:text-pink-600"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-sm duration-500 text-white  hover:text-blue-600"
              to="/skill"
            >
              Skills
            </Link>
            <Link
              className="text-sm duration-500 text-white hover:text-yellow-400 "
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </nav>
      </>
    </div>
  );
};

export default Home;
