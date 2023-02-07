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
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "../styles/Project.module.css";

import { Mousewheel, Pagination } from "swiper";

export default function Projects({ projects }) {
  return (
    <>
      <Metadata
        title={pageMeta.projects.title}
        description={pageMeta.projects.description}
        previewImage={pageMeta.projects.image}
        keywords={pageMeta.projects.keywords}
      />
      {/* max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto */}

      <div className="relative dark:bg-darkPrimary dark:text-gray-100 ">
        <section className={styles.velo_slides}>
          <section class={styles.velo_slide}>
            <div class={styles._bg}>
              <span class="border">
                <span></span>
              </span>
            </div>
            <header class={styles._header}>
              <h3 class={styles._title}>
                <span class="oh">
                  <PageTop pageTitle="Projects" className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum maximus libero nisi, eu mollis massa elementum
                    vel. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Vestibulum lobortis, libero sit amet cursus porttitor,
                    ex odio ullamcorper nunc, sit amet ornare lectus leo in
                    elit. Aenean urna mauris, ornare iaculis lacus nec, faucibus
                    lacinia eros. Phasellus rutrum tortor elit, lobortis
                    sagittis metus tempus sit amet. Fusce sed faucibus tortor.
                    Curabitur vel lectus viverra, consequat dui lobortis, congue
                    tellus.{" "}
                    <span className="font-bold text-gray-600 dark:text-gray-200 ">
                      {projects.length}+
                    </span>{" "}
                    projects.
                  </PageTop>
                </span>
              </h3>

              <span class="velo-slide__btn">
                <a class="btn-draw btn--white" href="#">
                  <span class="btn-draw__text">
                    <span>View Work</span>
                  </span>
                </a>
              </span>
            </header>
            Section 1
          </section>
          <section class="w-full h-screen bg-blue-200">Section 2</section>
          <section class="w-full h-screen bg-green-200">Section 3</section>
          <section class="w-full h-screen bg-indigo-200">Section 4</section>
          <section class="w-full h-screen bg-yellow-200">Section 5</section>
        </section>
      </div>

      {/*       <section className="pageTop">
         <PageTop pageTitle="Projects">
          I've been making various types of projects some of them were basics
          and some of them were complicated. So far I've made{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projects.length}
          </span>{" "}
          projects.
        </PageTop> 

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
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
