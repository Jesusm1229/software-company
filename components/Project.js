import React, { useRef, useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";
import Link from "next/link";
import OgImage from "../components/OgImage"; // =========> not created yet
import {
  fromLeftVariant,
  opacityVariant,
} from "../content/FramerMotionVariants"; // ===> not created yet
import AnimatedHeading from "./FramerMotion/AnimatedHeading";
import AnimatedText from "./FramerMotion/AnimatedText";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
} from "framer-motion";

import styles from "../styles/Project.module.css";
import ViewMoreButton from "./Buttons/ViewMoreButton";
import { gsap } from "gsap/dist/gsap";

function useParallax(value, distance) {
  const x = useMotionValue(value);
  return useTransform(x.get(), [0, 1], [-distance, distance]);
}

export default function Project({ project }) {
  /*  const background = `${hueA}`;
  const previus = `${hueB}`; */

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const isInView = useInView(ref);

  const tl = useRef(null);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .from(".photo", { scale: 2 })
      .to(
        ".mask",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        0
      )
      .to(".mask", { scale: 0.95, duration: 0.15 });
  }, []);

  //Al entrar en botón
  const onEnter = ({ currentTarget }) => {
    tl.current.play();
  };

  //Exiting button
  const onLeave = ({ currentTarget }) => {
    tl.current.reverse();
    //Button
    /* gsap.to(".enter__bg", {
      backgroundColor: "#dad4d1",
      scale: 1,
      ease: "elastic.out(1, 0.4)",
      duration: 2,
      opacity: 0.5,
    }); */
  };

  return (
    <>
      <motion.div
        className={`snap-center  h-screen shrink  flex justify-center items-center m-5 p-5 relative color-[color:var(--accent)]`}
        ref={ref}
        style={{
          backgroundColor: isInView ? project.background : "rgba(0,0,0,0)",
          transition: "all 1s cubic-bezier(.58,.04,.42,1.04) 0.8s",
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
        {/* MASK */}
        <div
          className={`mask relative m-5 overflow-hidden w-96 h-96 max-h-[90vh] bg-slate-300 ${styles.mask}`}
        >
          <img
            className="photo absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src={project.coverURL}
            alt="A London skyscraper"
          />
        </div>
        <ViewMoreButton />

        {/* style={{ y }} */}
        <motion.h1
          className="absolute text-5xl lg:text-6xl font-montserrat h-32 tracking-tighter left-[calc(50%+8rem)]"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >{`#00${project.id}`}</motion.h1>
      </motion.div>
    </>

    /*<div className="card">
      <OgImage
        src={project.coverURL}
        alt={project.name}
        darkSrc={project.darkCoverURL}
      />

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize text-neutral-900 dark:text-neutral-200">
          {project.name}
        </h1>
        <p className="text-sm text-gray-400 dark:text-neutral-400 truncate-2">
          {project.description}
        </p>

        <div className="flex items-center gap-1 flex-wrap">
          {project.tools.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="bg-gray-100 dark:bg-darkPrimary text-gray-500 rounded px-2 py-1 text-xs"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="mt-auto p-2 w-fit flex items-center gap-4">
          <Link
            href={project.githubURL}
            title="Source Code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:hover:text-white"
          >
            <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
          </Link>

          {project.previewURL && (
            <Link
              href={project.previewURL}
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </div>*/

    /*  <div className="velo-slide">
      <section class="velo-slide">
        <span class="velo-slider__hint">
          <span>
            <span>Check Them Bldgs</span>
          </span>
        </span>
        <div class="velo-slide__bg">
          <span class="border">
            <span></span>
          </span>
          <figure
            class="velo-slide__figure"
            style="background-image: url(https://source.unsplash.com/VsBl5PwVZpY/2000x1200)"
          ></figure>
        </div>

        <header class="velo-slide__header">
          <h3 class="velo-slide__title">
            <span class="oh">
              <span>The Name Is</span>
            </span>
            <span class="oh">
              <span>Stephen Scaff</span>
            </span>
          </h3>
          <p class="velo-slide__text">
            <span class="oh">
              <span>
                I'm a Creative Developer currently building web things at the
                Seattle Branding + Interactive firm, Urban Influence.
              </span>
            </span>
          </p>
          <span class="velo-slide__btn">
            <a class="btn-draw btn--white" href="#">
              <span class="btn-draw__text">
                <span>View Work</span>
              </span>
            </a>
          </span>
        </header>
      </section>
    </div> */
  );
}
