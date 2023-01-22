import Link from "next/link";
import Head from "next/head";
import {
  Animatify,
  HomeHeroSection,
  GallerySection,
  SubHeader,
  ProjectCards,
  ExperienceSection,
  SkillsSection,
  // TestimonialsSection,
  SEO, BlogSection,
} from "../components";
import projectData from "../project-data";
// import SpotifySection from "../components/SpotifySection";

export default function Home() {
  return (
    <div className="w-full h-fit ">
      <SEO
        title="Home / Brendan"
        desc=""
        img="assets/images/profile.webp"
      />
      <HomeHeroSection />
      <Animatify>
        <GallerySection />
        <SubHeader
          title="Featured Projects"
          caption="Listed below are some of my projects. Most React, React-Native, Next.js, AWS/Firebase, MERN, or similiar builds. Recently I've been coding more in Python. I'd like to leave my mark on the world somehow and I think tech is my best avenue to accomplish that. I will add some new Python projects soon."
        />
        <div className="grid grid-cols-1 gap-24">
          {projectData.map((props, index) => {
            if (props.showOnHome)
              return <ProjectCards key={`project-card-${index}`} {...props} />;
          })}
        </div>
        <span className="relative z-10 block mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white skew">
          All my projects{" "}
          <Link href="/projects">
            <a className="transition text-pink hover:underline underline-offset-8">
              can be viewed here
            </a>
          </Link>
        </span>
        <SubHeader
          title="My Experience"
          caption="With a passion for technology and a diverse background in customer service and personal development, I bring a unique perspective to creating innovative and user-friendly digital solutions."
        />
        <ExperienceSection />
        <span className="relative z-10 block mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white skew">
          {/* {"There's more, "} */}
          <Link href="https://linkedin.com/in/brendan-frisby">
            <a
              target="_blank"
              className="transition text-indigo hover:underline underline-offset-8"
            >
              Add me on Linkedin.
            </a>
          </Link>
        </span>
        <SubHeader title="Why hire me?" />
        <SkillsSection />
        <span className="relative z-10 block px-10 mx-auto my-16 text-xl text-center text-lightTextColor dark:text-black md:px-32">
          {/* {"Give a Like and Follow"} */}
          <Link href="https://linkedin.com/in/brendan-frisby">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              LinkedIn
            </a>
          </Link>
          {/* , do it! */}
          {"and"}
          {/* {" Also here's my "} */}
          <Link href="https://github.com/bfrisbyh92">
            <a
              className="transition text-pink hover:underline underline-offset-8"
              target="_blank"
            >
              GitHub
            </a>
          </Link>{" "}
        </span>
        <SubHeader
          // This needs to be changed to a link, and look much better somehow COME BACK
          title="My Mission"
          caption="My missoin is to follow my heart towards what I feel most connected and passionate about which is tech and offensive security. Long term, I dream of being a Penetration Tester, Security Analyst, or Red Teamer. Going back 10 years I was playing around with Kali Linux, didn't know enough to do anything but I tried. Now days I do know how to many things, and my goal is to master them all. I've never aimed to be average in any sense, and the amount of time/dedication I put towards my passion is massive. I'm very humbled and grateful to of found my niche. There is a lifetime of learning to come and I just hope in some way I can make a positive impact with tech."
        />
        {/* <TestimonialsSection /> */}
        <span className="relative z-10 block mx-auto mt-2 mb-16 text-xl text-center text-lightTextColor dark:text-white skew">
          {"Linkedin Recommendations"}
          <Link href="https://www.linkedin.com/in/Brendan/details/recommendations/">
            <a
              target="_blank"
              className="transition text-pink hover:underline underline-offset-8"
            >
              {" "}here.
            </a>
          </Link>{" "}
        </span>
        {/*<SpotifySection />*/}
        <BlogSection />
      </Animatify>
    </div>
  );
}
