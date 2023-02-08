import { useEffect } from "react";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function HomeHeroSection() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight / 3,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    try {
      canvas = null;
    } catch (e) { }
  }, []);

  return (
    <div className="h-screen w-full relative -mt-20 md:-mt-16">
      <div
        className="h-full w-full absolute bg-center bg-no-repeat bg-cover transition dark:duration-300 opacity-0 dark:opacity-100"
        style={{
          backgroundImage: `url(./assets/images/bg.webp)`,
        }}
      ></div>
      <div
        className="h-full w-full absolute bg-center bg-no-repeat bg-cover transition dark:duration-300 dark:opacity-0 opacity-100"
        style={{
          backgroundImage: `url(./assets/images/bg.webp)`,
        }}
      ></div>
      <canvas className="h-full w-full absolute" id="liquid-canvas"></canvas>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-white translate-y-1 pointer-events-none dark:opacity-0 opacity-100 bottom-0"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-bgColor translate-y-1 pointer-events-none opacity-0 dark:opacity-100 bottom-0"></div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="skew absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10">
          <div className="md:px-6">
            <span className="m-auto block text-2xl md:text-xl text-white md:text-center">
              Hi {"I'm "}
              <span
                title="This is not a link."
                className="underline underline-offset-8 pointer-events-auto cursor-pointer text-pink dark:text-blue"
              >
                Brendan Frisby
              </span>
            </span>
            <span className="md:leading-[9rem] mb-6 block text-[13vw] sm:text-[7rem] text-white  md:text-center font-secondary max-w-[100vw] md:max-w-[80rem]">
              Engineer, Developer, Security Analyst
            </span>
            <span className="md:m-auto block text-white text-2xl md:text-xl leading-10 md:text-center max-w-xl my-4">
              I am a{" "}
              <span
                title="Not a link either."
                className="pointer-events-auto cursor-pointer text-pink dark:text-blue"
                >
              Penetration Tester
              </span>{" "}/{" "}
              <span
                className="pointer-events-auto cursor-pointer text-pink dark:text-blue"
                title="Link, true but only to this same page."
                >
                  <a href="https://brendanfrisby.live">
                Full Stack Developer
                  </a>
              </span>{" "}
              by profession, and a learner by passion.
            </span>
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                className="text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://github.com/bfrisbyh92"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://linkedin.com/in/brendan-frisby"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                className="text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="mailto:contact@bfrisbyh92@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span
        onClick={scrollDown}
        className="block w-full text-center text-black text-xl absolute bottom-16 pointer-events-auto cursor-pointer"
      >
        Scroll down
      </span>
    </div>
  );
}
