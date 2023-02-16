import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import { getGithubContributions } from "github-contributions-counter";
import commaNumber from "comma-number";

// I have Github's actions commented out for now, because I know it works 
// and there is no point in me hitting that API 10000x on reload.

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from "next/link";

import { BsCodeSlash } from "react-icons/bs";
import { VscSymbolInterface } from "react-icons/vsc";
import { GiRobotGolem } from "react-icons/gi";
import { GoTools } from "react-icons/go";

export default function SkillsSection() {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const [followers, setFollowers] = useState(0),
    [publicRepos, setPublicRepos] = useState(0),
    [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const getGithubData = async () => {
      const githubProfile = await octokit.request("GET /users/{username}", {
        username: "bfrisbyh92",
      });
      getGithubContributions({
        username: "bfrisbyh92",
        token: process.env.GITHUB_ACCESS_TOKEN,
      }).then((res) => {
        setTotalContributions(
          res.data.data.user.contributionsCollection.contributionCalendar
            .totalContributions
        );
      });
      setFollowers(githubProfile.data.followers);
      setPublicRepos(githubProfile.data.public_repos);
    };
    getGithubData();
  }, []);

  return (
    <div className="px-10 md:px-32 relative z-10 mb-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="flex justify-center flex-col gap-6">
          <div className="text-xl text-lightTextColor dark:text-white leading-8">
            {
              "As a versatile developer with experience in mobile app development, web development, and penetration testing, I bring a unique combination of skills to the table. My background in customer service and personal development allows me to create user-friendly and innovative solutions, while my expertise in penetration testing ensures that the final product is secure and scalable. Whether it's a website, mobile app, or other digital product, I am dedicated to delivering high-quality, secure, and innovative solutions that exceed expectations."
            }
          </div>
          <div className="flex flex-row justify-center items-center gap-3 h-full">
            <GithubStats
              number={commaNumber(totalContributions + 3)}
              desc="Commits made last year on Github*"
            />
            <div className="h-24 w-2 bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor rounded-lg"></div>
            <GithubStats
              number={commaNumber(followers)}
              desc="Total Followers on Github*"
            />
            <div className="h-24 w-2 bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor rounded-lg"></div>
            <GithubStats
              number={commaNumber(publicRepos)}
              desc="Public Repositories on Github*"
            />
          </div>
          <div className="text-sm text-lightTextColor dark:text-white mt-2 md:mt-0">
            *Data above is current and being pulled from the Github API*{" "}
          </div>
          <div>
            {/* <div className="text-3xl text-lightTextColor dark:text-white">
              {"Book a 30-min private event with me."}
            </div>
            <Link href={"https://calendly.com/frisby/30min"}>
              <a
                target="_blank"
                className={`inline-block mt-6 w-full md:w-fit text-center md:text-left md:mr-4 px-10 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
              >
                Schedule event
              </a>
            </Link> */}
          </div>
        </div>
        <div className="h-full w-full bg-lightBgSecondaryColor dark:bg-bgSecondaryColor rounded-xl overflow-hidden pb-6">
          <AliceCarousel
            infinite
            autoWidth
            autoHeight
            mouseTracking
            ssrSilentMode
            touchTracking
            disableButtonsControls
          >
            <Skill
              logo={<BsCodeSlash />}
              title="Web Development"
              desc="I'm familiar with HTML, CSS and JavaScript. I also am experienced in libraries like Node, Vue, Next, React, React Native, Flutter, Electron, Firebase, Google Cloud APIs, Blockly, SocketIO, Express, Tailwind, Material UI, and it's always growing. The technology used is far less important than the fact that I can quickly pickup any stack or tool when needed and implement the ideas proposed."
            />
            <Skill
              logo={<VscSymbolInterface />}
              title="Penetration Testing"
              desc="I am a skilled in Information Gathering, Vulnerability Scanning, Exploitation, Post-Exploitation, and Reporting. I am Famililar with all the latest and best tools. I can also accomplish all the same tasks as common tools within my own Python code. I can identify vulnerabilities and misconfigurations in any digital presence and provide a hacker's perspective on blind spots. I am deeply passionate about this field and committed to ethical hacking and security."
            />
            <Skill
              logo={<GiRobotGolem />}
              title="UI/UX"
              desc="I usually will use Figma to get a rough idea of the final product. I typically spend more time planning to code, and preparing than I do actual coding. I'll push the limits on UI's with animation libraries. I'm comfortable using Material-UI, Bootstap, Ant-Design or any framework that helps a quick production. I can also create without them. SCSS and SASS I find extremely helpful. I'm huge on reading the docs before implementing so when I get to the coding portion of a UI, I know things are stacked in my favor as tech tends to change quickly.  "
            />
            <Skill
              logo={<GoTools />}
              title="Other Tools and Softwares"
              desc="I have developed a comprehensive understanding of the digital landscape and continually expand my knowledge on a daily basis. I am excited to continue growing and evolving my skills in the future. I'm curious by nature and have used many different types of tools, sometimes only to compare them against eachother. Flutter/Expo, React/Next.js, AWS/Firebase, OSWAP/Burp, GoBuster/Dirb/DirSearch are some examples "
            />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

function GithubStats({ number, desc }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <div className="text-5xl text-border">{number}</div>
      <div className="text-md text-lightTextColor dark:text-white text-center">
        {desc}
      </div>
    </div>
  );
}

function Skill({ logo, title, desc }) {
  const Logo = () => logo;
  return (
    <div className="skill text-left p-6 h-full w-full select-none cursor-grab active:cursor-grabbing">
      <div className="rounded-xl p-4 text-3xl text-lightTextColor dark:text-white mb-2 bg-white dark:bg-bgColor flex justify-start items-center gap-4 shadow-2xl">
        <Logo />
        <span className="">{title}</span>
      </div>
      <div className="px-4 py-2 text-xl text-lightTextColor dark:text-white leading-10">
        {desc}
      </div>
    </div>
  );
}
