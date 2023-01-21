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
  TestimonialsSection,
  SEO, BlogSection,
} from "../components";
import projectData from "../project-data";
import SpotifySection from "../components/SpotifySection";

export default function Home() {
  return (
    <div className="w-full h-fit ">
      <SEO
        title="Home / Brendan"
        desc=""
        img="https://Brendan-2.vercel.app/assets/images/seo/home.webp"
      />
      <HomeHeroSection />
      <Animatify>
        <GallerySection />
        <SubHeader
          title="Featured Projects"
          caption="Listed below are some of my projects, the ones I'm comfortable enough to share with others. Many React, React-Native, AWS/Firebase, MERN, or similiar builds. I have now moved more towards coding in Python but I enjoy all types of projects. I'd like to leave my mark on the world somehow. New Python projects will be added soon."
        />
        <div className="grid grid-cols-1 gap-24">
          {projectData.map((props, index) => {
            if (props.showOnHome)
              return <ProjectCards key={`project-card-${index}`} {...props} />;
          })}
        </div>
        <span className="relative z-10 block mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white skew">
          Do I have more?{" "}
          <Link href="/projects">
            <a className="transition text-pink hover:underline underline-offset-8">
              View Them All Here
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
          title="Some recources of mine..."
          caption="My Notion page of random informatoin security related. 
          alwayspwnable.notion.site/My-Hacking-Wiki-1229080c93984d988dfce80eab1bf74b"
        />
        <TestimonialsSection />
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
