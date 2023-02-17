import { useEffect, useState } from "react";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

// Importing Components
import { Header, Footer } from "../components";

import { ScrollerMotion, useScrollerMotion } from "scroller-motion";
import { useMotionValue } from "framer-motion";

import { PageTransition /*, Analytics */ } from "../components";

import { PageTransition as Transition } from "next-page-transitions";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const setTheme = (theme) => {
    localStorage.theme = theme;
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
    changeTheme = () => {
      const prevTheme = localStorage.theme;
      setTheme(prevTheme === "dark" ? "light" : "dark");
    };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const theme = event.matches ? "dark" : "light";
        setTheme(theme);
      });

    setTheme(
      !("theme" in localStorage)
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : localStorage.theme
    ); // Set default theme
  }, []);

  return (
    <div>
      <Transition timeout={500} classNames="page-transition">
        <div className="h-fit w-full relative z-10">
          <PageTransition />
          <Header changeTheme={changeTheme} />
          <div className="scroll-animate h-fit w-full contain-paint -mt-20 md:-mt-16 pt-20 md:pt-16">
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </Transition>
      <style jsx global>{`
        .page-transition-enter-done .page-transition {
          height: 0%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-enter-active .page-transition {
          height: 100%;
          width: 100%;
          bottom: 0;
          transition: 500ms;
        }
        .page-transition-exit .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-exit-active .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
      `}</style>
      <script id="three-min-js" src="/assets/lib/three.min.js" async></script>
      <script
        id="fluid-background-js"
        src="/assets/lib/fluid-background.js"
        async
      ></script>
      <Analytics />
    </div>
  );
}

export default MyApp;


// Saved in case I find a way to add it with some top margin.
{/* <SubHeader
  className="mt-25"
  // This needs to be changed to a link, and look much better somehow COME BACK
  title="My Mission"
  caption="My mission is to follow my heart towards what I feel most connected and passionate about which is cyber security. My final goal is being far along in a red team, blue team, or similiar role. Going back to age 12 I was playing around with Kali/Parrot Linux, didn't know enough to do anything at all. The interest was there but it would be years before I really persued learning. Now days I know how to many things like web development, mobile app development, penetration testing networks/apps, python automation scripts, and my goal is to master the ones I've found to be most fulfilling. I've never aimed to be average, and the amount of time/dedication I put towards my passion is intentionally massive. I'm very humbled and grateful to of found my niche. There is a lifetime of learning to come and I just hope in some way I can make a positive impact with tech."
/> */}
