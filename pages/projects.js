import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "../components/Project";
import Metadata from "../components/MetaData";
import PageTop from "../components/PageTop";
import { getProjects } from "../lib/dataFetch";
import AnimatedDiv from "../components/FramerMotion/AnimatedDiv";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import pageMeta from "../content/meta";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
} from "framer-motion";

import styles from "../styles/Project.module.css";

import ViewMoreButton from "../components/Buttons/ViewMoreButton";

function useParallax(value, distance) {
  const x = useMotionValue(value);
  return useTransform(x.get(), [0, 1], [-distance, distance]);
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Image({ id, hueA, hueB }) {
  const background = `${hueA}`;
  const previus = `${hueB}`;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <>
      <motion.div
        className={`color-[color:var(--accent)]  relative m-5  flex h-screen shrink snap-center items-center justify-center p-5`}
        ref={ref}
        style={{
          backgroundColor: isInView ? background : "rgba(0,0,0,0)",
          transition: "all 1.5s cubic-bezier(.58,.04,.42,1.04) 1.3s",
        }}
        /* animate={{ backgroundColor: background }} */
        /* whileInView={{ backgroundColor: background }}
        initial={{ backgroundColor: previus }} */
        /* viewport={{ once: true }} */
        /* viewport={{ root: ref }} */
        /*   exit={{
          opacity: 0,
          backgroundColor: "#dadada",
          transition: {
            backgroundColor: { delay: 0 },
            opacity: { delay: 0.1 },
          },
        }} */
        /* transition={{
          duration: 0.7,
          delay: 1.5,
          repeat: Infinity,
        repeatType: "reverse", 
        }} */
      >
        <div
          className={`relative h-96 max-h-[90vh] w-80 overflow-hidden bg-slate-300 object-none `}
        >
          <img
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full overflow-hidden object-none"
            src={`/${id}.jpg`}
            alt="A London skyscraper"
          />
        </div>
        {/* style={{ y }} */}
        <motion.h1 className="absolute left-[calc(50%+8rem)] h-32 font-montserrat text-5xl tracking-tighter lg:text-6xl">{`#00${id}`}</motion.h1>
      </motion.div>
    </>
  );
}

export default function Projects({ projects }) {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: divRef,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    /* It's a shorthand for `data-animate` and it's used to animate the element. */
    damping: 30,
    restDelta: 0.001,
  });

  /* const items = [
    [1, "#0af", "rgba(0,0,0,0)"],
    [2, "#fa0", "rgba(0,0,0,0)"],
    [3, "#85df5e", "rgba(0,0,0,0)"],
    [4, "#fa0", "rgba(0,0,0,0)"],
    [5, "#0af", "rgba(0,0,0,0)"],
  ]; */

  return (
    <>
      <Metadata
        title={pageMeta.projects.title}
        description={pageMeta.projects.description}
        previewImage={pageMeta.projects.image}
        keywords={pageMeta.projects.keywords}
      />

      {/* bg-[color:var(--background)] ${styles.body}*/}
      <motion.div
        className={`relative h-screen  min-h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll text-[color:var(--accent)] `}
        ref={divRef}
      >
        <section className="pageTop relative min-h-full w-full snap-center">
          <PageTop pageTitle="Projects" className="">
            Let me introduce you to some of the projects I have completed so
            far. They combine simple and complex concepts. Now, you'll see{" "}
            <span className="font-bold text-gray-600 dark:text-gray-200">
              {projects.length}
            </span>{" "}
            of them.
          </PageTop>
        </section>
        {projects &&
          projects
            .slice(0)
            .reverse()
            .map((project, index) => {
              if (project.name === "" && project.githubURL === "") return null;
              return <Project key={index} project={project} />;
            })}

        {/* {items.map(([image, hueA, hueB]) => (
          <Image id={image} hueA={hueA} hueB={hueB} />
        ))} */}
        <motion.div
          className={`invisible bg-[color:var(--accent)] md:visible ${styles.progress}`}
          style={{ scaleX }}
        />
      </motion.div>

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
