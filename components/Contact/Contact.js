import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "./ContactForm"; // ======>> not created yet
import AnimatedText from "../FramerMotion/AnimatedText"; // ======>> not created yet

export default function Contact() {
  return (
    <div id="contact" className="!relative">
      {/* Get in touch top section */}
      <section className="w-full-width text-center pt-6  ">
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
          Feel free to send me a message anytime, from a business need to a
          simple greeting.
        </AnimatedText>
      </section>

      {/* Wrapper Container */}
      <section className="flex flex-col lg:flex-row w-full mx-auto px-5 lg:pb-10">
        {/* Left Contact form section */}
        <div className="w-full mx-auto mt-10">
          {/* <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-2xl font-bold w-full text-center my-2"
          >
            Connect with me
          </AnimatedHeading> */}

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
