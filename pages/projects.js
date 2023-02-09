import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "../components/Project"; // ====> not created yet
import Metadata from "../components/MetaData";
import PageTop from "../components/PageTop";
import { getProjects } from "../lib/dataFetch"; // ====> not created yet
import AnimatedDiv from "../components/FramerMotion/AnimatedDiv";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import pageMeta from "../content/meta";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

import styles from "../styles/Project.module.css";

import { Mousewheel, Pagination } from "swiper";
import ViewMoreButton from "../components/Buttons/ViewMoreButton";

function useParallax(value, distance) {
  return useTransform(useMotionValue(value), [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      className={`snap-center h-screen flex justify-center items-center relative bg-[color:var(--background)] color-[color:var(--accent)] ${styles.section}`}
    >
      <div
        className={`relative m-5 overflow-hidden w-80 h-96 max-h-[90vh] bg-slate-300 `}
        ref={ref}
      >
        <img
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          src={`/${id}.jpg`}
          alt="A London skyscraper"
        />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Projects({ projects }) {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: divRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Metadata
        title={pageMeta.projects.title}
        description={pageMeta.projects.description}
        previewImage={pageMeta.projects.image}
        keywords={pageMeta.projects.keywords}
      />

      <div
        className={`snap-mandatory snap-y h-screen overflow-scroll m-0 p-0 bg-[color:var(--background)] color-[color:var(--accent)] ${styles.body}`}
        ref={divRef}
      >
        {[1, 2, 3, 4, 5].map((image) => (
          <Image id={image} />
        ))}
      </div>
      <motion.div
        className={`bg-[color:var(--accent)] ${styles.progress}`}
        style={{ scaleX }}
      />

      {/* max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto */}

      {/*    <div className="relative dark:bg-darkPrimary dark:text-gray-100 ">
        <section className={styles.velo_slides}>
          <section className="h-screen z-4">
            <div class={styles._bg}></div>
            <header class={styles._header}>
              <h3 class={styles._title}>
                <span class="oh">
                  <PageTop pageTitle="Projects" className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum maximus libero nisi, eu mollis massa elementum
                    vel. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. .{" "}
                    <span className="font-bold text-gray-600 dark:text-gray-200 ">
                      {projects.length}+
                    </span>{" "}
                    projects.
                  </PageTop>
                </span>
              </h3>

              <ViewMoreButton />
              <span class="velo-slide__btn">
                <a class="btn-draw btn--white" href="#">
                  <span class="btn-draw__text">
                    <span>View Work</span>
                  </span>
                </a>
              </span>
            </header>
          </section>
          <section class="w-full h-screen bg-blue-200">Section 2</section>
          <section class="w-full h-screen bg-green-200">Section 3</section>
          <section class="w-full h-screen bg-indigo-200">Section 4</section>
          <section class="w-full h-screen bg-yellow-200">Section 5</section>
        </section>
      </div> */}

      {/*   <section className=" bg-gradient-to-r from-cyan-500 to-blue-500 pageTop relative min-h-full w-full">
        <PageTop pageTitle="Projects" className="">
          I've been making various types of projects some of them were basics
          and some of them were complicated. So far I've made{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projects.length}
          </span>{" "}
          projects.
        </PageTop>
         <ViewMoreButton />
      </section>

      <section className=" relative min-h-full w-full">
        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 h-screen gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          <AnimatePresence>
            {projects &&
              projects.map((project, index) => {
                if (project.name === "" && project.githubURL === "")
                  return null;
                return <Project key={index} project={project} />;
              })}
          </AnimatePresence>
        </AnimatedDiv>
      </section> */}

      {/*       <section className="">
        <section class="w-full h-screen bg-blue-200">Section 1</section>
        <section class="w-full h-screen bg-blue-200">Section 2</section>
        <motion.div
          initial={{ zIndex: 1 }}
          whileHover={{ zIndex: 100 }}
          whileTap={{ zIndex: 100, scale: 5.2, opacity: 0.5 }}
          style={{ width: "100vw", height: "100vh", background: "purple" }}
        >
          3
        </motion.div>
        <section class="w-full h-screen bg-green-200">Section 3</section>
        <section class="w-full h-screen bg-indigo-200">Section 4</section>
        <section class="w-full h-screen bg-yellow-200">Section 5</section>
      </section> */}
    </>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}
