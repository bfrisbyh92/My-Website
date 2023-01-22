import { SubHeader, Animatify, SEO } from "../../components";
import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkyravz");
  if (state.succeeded) {
    return <ThankYouMessage />;
  }
  return (
    <div className="h-fit w-full">
      <SEO
        title="Contact / Brendan"
        desc="Feel free to reach out for any reason."
        img="assets/images/profile.webp"
      />
      <Animatify>
        <SubHeader
          title="Contact Me"
          caption="Feel free to reach out for any reason. I'm always looking to connect with people who have similiar interests. Also always looking for work, leads, freelance jobs, reccommendations for content to cover, opportunity to collaborate, etc. Open door Policy so please reach out!"
        />
        <div className="px-10 md:px-32 relative z-10">
          <div className="max-w-screen-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-lightBgSecondaryColor dark:bg-bgSecondaryColor p-12 rounded-xl"
            >
              <label
                htmlFor="email"
                className="block text-lightTextColor dark:text-white text-3xl"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full text-lightTextColor dark:text-white text-xl p-6 outline-none bg-transparent border-2 border-bgColor dark:border-white my-6 rounded-xl"
                placeholder="For e.g. example@gmail.com"
                spellCheck={false}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="block text-lightTextColor dark:text-white text-xl bg-white dark:bg-bgColor px-12 py-6 mb-6 rounded-xl"
              />
              <label
                htmlFor="message"
                className="block text-lightTextColor dark:text-white text-3xl"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type a message for e.g. Would you want to collaborate on a project?"
                className="h-96 block w-full text-lightTextColor dark:text-white text-xl p-6 outline-none bg-transparent border-2 border-bgColor dark:border-white my-6 rounded-xl"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="block text-lightTextColor dark:text-white text-xl bg-white dark:bg-bgColor px-12 py-6 mb-6 rounded-xl"
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-white text-xl border-bgColor dark:border-white border-2 bg-bgColor dark:bg-transparent dark:border-white rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="text-center">
          <Link href="mailto:contact@bfrisbyh92@gmail.com">
            <a target="_blank">
              <div className="mt-12 md:m-auto ">
                <h1 className="text-border text-[10vw] md:text-[7rem] whitespace-nowrap transition hover:scale-105">
                  contact@bfrisbyh92@gmail.com
                </h1>
              </div>
            </a>
          </Link>
        </div>
      </Animatify>
    </div>
  );
}

function ThankYouMessage() {
  return (
    <div className="h-fit w-full">
      <SubHeader
        title="Contact Me"
        caption="Feel free to reach out for any reason. I'm always looking to connect with people who have similiar interests. Also always looking for work, leads, freelance jobs, reccommendations for content to cover, opportunity to collaborate, etc. Open door Policy so please reach out!"
      />
      <div className="px-10 md:px-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-bgSecondaryColor p-12 text-center">
            <h1 className="text-white text-6xl ">
              Thank <span className="text-border">you!</span>
            </h1>
            <div className="text-xl text-white mt-6 max-w-prose mx-auto">
              {
                "I've received your message, Thank you and I will get back to you and quickly as I can."
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
