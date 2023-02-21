import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import "react-toastify/dist/ReactToastify.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import ContactForm from "./ContactForm"; // ======>> not created yet
import AnimatedText from "../FramerMotion/AnimatedText"; // ======>> not created yet
import socialMedia from "../../content/socialMedia";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkedinIcon } from "react-share";

export default function Contact() {
  return (
    <div id="contact" className="!relative">
      {/* Get in touch top section */}
      <section className="w-full-width text-center pt-2  ">
        <AnimatedHeading
          variants={popUpFromBottomForText}
          className="font-bold text-4xl"
        >
          Get in touch
        </AnimatedHeading>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="px-4 py-2 font-medium text-slate-600"
        >
          Feel free to send me a message anytime through LinkedIn or a direct
          mail.
        </AnimatedText>
      </section>

      {/* Wrapper Container */}
      <section className="flex flex-col lg:flex-row w-full mx-auto px-5 lg:pb-10 ">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-5">
          {/* <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-2xl font-bold w-full text-center my-2"
          >
            Connect with me
          </AnimatedHeading> */}
          <div className="text-lg font-normal w-full flex items-center justify-center justify-items-center content-center place-content-center my-1">
            {socialMedia.slice(1, 2).map((platform, index) => {
              return (
                <Link key={index} href={platform.url} passHref>
                  <motion.a
                    className=""
                    target="_blank"
                    rel="noopener noreferrer"
                    href={platform.url}
                  >
                    <BsLinkedin className="w-10 h-10 hover:scale-110 active:scale-90 transition-all " />
                  </motion.a>
                </Link>
              );
            })}
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
