import { SubHeader, ProjectCards, Animatify, SEO, BlogSection } from "../../components";
import projectData from "../../project-data";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit w-full">
      <SEO
        title="Projects / Brendan"
        desc="Listed below are some of my projects. Most React, React-Native, Next.js, AWS/Firebase, MERN, or similiar builds. Recently I've been coding more in Python. I'd like to leave my mark on the world somehow and I think tech is my best avenue to accomplish that. I will add some new Python projects soon."
        img="assets/images/profile.webp"
      />
      <SubHeader
        title="My Projects"
        caption="Listed below are some of my projects. Most React, React-Native, Next.js, AWS/Firebase, MERN, or similiar builds. Recently I've been coding more in Python. I'd like to leave my mark on the world somehow and I think tech is my best avenue to accomplish that. I will add some new Python projects soon."
      />
      <div className="grid grid-cols-1 gap-24">
        <Animatify>
          {projectData.map((props, index) => (
            <ProjectCards key={`project-card-${index}`} {...props} />
          ))}
        </Animatify>
      </div>
      <Animatify>
        <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
          {"Give a like an follow, here is "}
          <Link href="https://github.com/bfrisbyh92">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              my Github.
            </a>
          </Link>
        </span>
      </Animatify>
      <BlogSection />

    </div>
  );
}
