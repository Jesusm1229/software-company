import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FadeContainer,
  headingFromLeft,
  fromBottomVariant,
  fromTopVariant,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import { homeProfileImage } from "../utils/utils"; // not created yet
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import Metadata from "../components/MetaData";
import pageMeta from "../content/meta";
import AnimatedHeading from "../components/FramerMotion/AnimatedHeading";
import { getPinnedSkills } from "../lib/dataFetch";

// Page Components START----------
/* import BlogsSection from "../components/Home/BlogsSection";
import SkillSection from "../components/SkillSection"; */
// Page Components END------------
import Contact from "../components/Contact";

import getRSS from "../lib/generateRSS";
import MDXContent from "../lib/MDXContent";
import generateSitemap from "../lib/sitemap";

import VantaHero from "../components/Home/VantaHero";

import Circle from "../components/Circle/Circle";
import QRCodeContainer from "../components/QRCodeContainer";

export default function Home({ blogs, skills }) {
  const [showQR, setShowQR] = useState(false);
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      <div className="relative w-screen h-screen dark:bg-dark Primary dark:text-gray-100">
        <VantaHero>
          <div className="flex justify-center items-center h-full w-full bg-none relative">
            <Circle showQR={showQR} setShowQR={setShowQR} />
          </div>
          {/*  <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={FadeContainer}
              viewport={{ once: true }}
              className="grid place-content-center py-20  min-h-screen"
            >
              <div className="w-full relative mx-auto flex flex-col items-center gap-10">
                 <motion.div
              variants={popUp}
              className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                 src={homeProfileImage} 
                className="rounded-full shadow filter saturate-0"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </motion.div> 

                <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
                  <div className="flex flex-col gap-1">
                    <motion.h1
                      variants={opacityVariant}
                      className="text-9xl lg:text-9xl font-bold font-montserrat"
                    >
                      JESUS MEDINA
                    </motion.h1>
                     <motion.p
                      variants={opacityVariant}
                      className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
                    >
                      React Developer, Competitive Programmer
                    </motion.p> 
                  </div>

                   <motion.p
                    variants={opacityVariant}
                    className=" text-slate-500 dark:text-gray-300 font-medium text-sm md:text-base text-center"
                  >
                    I am currently pursuing my Bachelor Degree in Computer
                    Science. I can code in Python, C, C++, etc.
                  </motion.p> 
                </div>

                 <motion.div
                  className="rounded-md overflow-hidden"
                  variants={popUp}
                >
                  <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                    <button
                      className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                      onClick={() => window.open("/resume")}
                    >
                      <FiDownload />
                      <p>Resume</p>
                    </button>
                  </Ripples>
                </motion.div> 
              </div>
            </motion.section>
          </div> */}
        </VantaHero>
        {/*<div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
          <SkillSection skills={skills} />
          <BlogsSection blogs={blogs} />
          <Contact /> 
        </div>*/}
      </div>
      <QRCodeContainer showQR={showQR} setShowQR={setShowQR} />
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = new MDXContent("posts").getAllPosts().slice(0, 3);
  const skills = getPinnedSkills();
  await getRSS();
  await generateSitemap();

  return {
    props: { blogs, skills },
  };
}
