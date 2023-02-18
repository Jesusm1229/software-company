import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import { HomeHeading } from "../../pages";
import AnimatedText from "../FramerMotion/AnimatedText";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="px-5 sm:px-20 sm:mx-20 text-md sm:text-base">
      <HomeHeading title="About Me" />
      <AnimatedText
        className="text-slate-500 dark:text-slate-400 font-medium"
        variants={popUpFromBottomForText}
      >
        Section not used{" "}
        <Link href="link to profile" passHref>
          <a className="text-purple-600 underline">Dev.to</a>
        </Link>{" "}
        Text not used
      </AnimatedText>
    </section>
  );
}
