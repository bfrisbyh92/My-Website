import Link from "next/link";

import {
  GallerySection,
  SubHeader,
  SkillsSection,
  ExperienceSection,
  Animatify,
  SEO, 
  BlogSection,
  // TestimonialsSection,
} from "../../components";
import Head from "next/head";
// import SpotifySection from "../../components/SpotifySection";

export default function About() {
  return (
    <div className="w-full pt-4 h-fit">
      <SEO
        title="About / Brendan"
        desc="I am a skilled and versatile professional with a passion for technology. As a web developer and software engineer, I have a decent understanding of the latest technologies and programming languages, and use this knowledge to create innovative and effective solutions. Additionally, as a security analyst and penetration tester, I have a strong understanding of the latest security threats and vulnerabilities and use this knowledge to help protect systems and data. Overall, my curiosity and passion for technology drives me to stay on the edge of the field and deliver."
        img="/assets/images/profile.webp"
      />
      <Animatify>
        <div className="px-10 pb-12 md:px-32">
          <div className="md:grid md:grid-cols-[1fr_0.4fr] gap-8 max-w-screen-xl m-auto mt-4">
            <div className="block md:hidden">
              <div
                className="relative z-10 bg-contain bg-black bg-no-repeat bg-center w-full h-[50vw]"
                style={{ backgroundImage: "url(/assets/images/gallery-section-6.png)" }}
              ></div>
            </div>
            <div className="md:m-auto">
              <h1 className="absolute text-border text-[6rem] md:text-[7rem] whitespace-nowrap opacity-10 -translate-y-1/2">
                Brendan Frisby
              </h1>
              <img
                className="absolute m-auto top-0 left-0 -translate-y-1/2 -translate-x-1/4 max-w-none w-[50rem] md:w-[75rem] dark:opacity-60"
                src="/assets/images/blur-ball-blue.webp"
              />
              <div className="relative z-10">
                <h1 className="bottom-0 m-auto text-5xl text-lightTextColor dark:text-white">
                  Brendan Frisby
                </h1>
                <span className="block mt-8 text-xl leading-10 text-lightTextColor dark:text-white">
                  I am a {new Date().getFullYear() - 1993}  year old highly skilled and versatile professional with a passion for technology. As a web developer and software engineer, I have a decent understanding of the latest technologies and programming languages, and use this knowledge to create innovative and effective solutions for clients. Additionally, as a security analyst and penetration tester, I have a strong understanding of the latest security threats and vulnerabilities and use this knowledge to help protect systems and data. Overall, my curiosity and passion for technology drives me to stay on the edge of the field.
                </span>
                <Link href="/resume">
                  <a
                    className={`inline-block mt-8 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Check out my Resume
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/assets/images/gallery-section-6.webp"
                className="w-full mx-auto shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
        <GallerySection />
        <SubHeader title="Why hire me?" />
        <SkillsSection />
        <SubHeader
          title="My Experience"
          caption="With a wild curiousity for all things tech, I found my passion with coding. I started a few years back but it wasn't until I attended General Assembly's Software Engineering Immserive that everything started to click. I've followed that up with the eJPT certification by eLearnSecurity for Penetration Testing. I have many free certifications from FreeCodeCamp and The Odin Project on various topics as well, while they don't hold much weight some helped immensely during my learning process(Front End Frameworks, Backend Development, Security with Helmet.js, and Solidity Smart Contracts are some that I've finished). I've developed a wide range of skills and plan to continue developing that over a lifetime. Next up the OSCP, CEH, and OSWP. Why? Because I love learning, I'm passionate about this craft."
        />
        <ExperienceSection />
        {/* <SubHeader
          title="Frisby,"
          caption="Brendan"
        /> */}
        {/* <TestimonialsSection /> */}
        <span className="relative z-10 block mx-auto mt-2 mb-16 text-xl text-center text-lightTextColor dark:text-white skew">
          {"My "}
          <Link href="https://www.linkedin.com/in/brendan-frisby/details/recommendations/">
            <a
              target="_blank"
              className="transition text-pink hover:underline underline-offset-8"
            >
              LinkedIn Testimonials
            </a>
          </Link>{" "}
        </span>
        {/*<SpotifySection />*/}
        <BlogSection />
      </Animatify>
    </div>
  );
}
