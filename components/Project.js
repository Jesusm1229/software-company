import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { BsGithub, BsStar } from "react-icons/bs";
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
  AnimatePresence,
  useAnimationControls,
} from "framer-motion";
import {
  FadeContainer,
  fromBottomVariant,
  fromRightVariantSpan,
  fromRightVariantStar,
  fromBottomVariantDescription,
} from "../content/FramerMotionVariants";

import styles from "../styles/Project.module.css";
import ViewMoreButton from "./Buttons/ViewMoreButton";
import { gsap } from "gsap/dist/gsap";
import { isMobile } from "react-device-detect";

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
  const [isHovering, setisHovering] = useState(false);

  const tl = useRef(null);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  /*   useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .from(".photo", { scale: 1.5 })
      .to(".mask", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.3,
        ease: "expo",
      })
      .to(".photo", { scale: 1, duration: 0.5 })
      .to(".mask", { scale: 0.95, duration: 0.4, delay: 0.05, ease: "expo" });
  }, []); */

  //Al entrar en botón
  /*  const onEnter = ({ currentTarget }) => {
    tl.current.play();
  }; */

  //Exiting button
  /* const onLeave = ({ currentTarget }) => {
    tl.current.reverse();
   
  }; */
  const variants = {
    initial: { opacity: 0.2 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const animation = useAnimationControls();
  const animationImg = useAnimationControls();

  async function sequence() {
    await animation.start({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: 0.4, ease: "anticipate" },
    });
    await animationImg.start({
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    animation.start({
      scale: 0.95,
      transition: { duration: 0.3, delay: 0.3, ease: "easeInOut" },
    });
    /* await animation.start({ rotate: 0 });
    animation.start({ scale: 1 }); */
  }

  async function sequenceReverse() {
    await animation.start({
      scale: 1,
      transition: { duration: 0.3, ease: "easeIn" },
    });
    await animationImg.start({
      scale: 1.5,
      transition: { duration: 0.2, ease: "easeIn" },
    });
    await animation.start({
      clipPath: "polygon(10% 30%, 90% 30%, 90% 70%, 10% 70%)",
      transition: { duration: 0.4, ease: "backInOut" },
    });

    /* await animation.start({ rotate: 0 });
    animation.start({ scale: 1 }); */
  }

  //If mobile expand the img
  useEffect(() => {
    if (isMobile) {
      /* sequence(); */
      console.log(isMobile);
    }
  }, []);

  return (
    <>
      <motion.div
        className={`color-[color:var(--accent)] relative my-1 flex  h-screen w-auto shrink snap-center items-center justify-center p-5`}
        ref={ref}
        style={{
          /*   rgb(117 190 218 / 0.5) */
          backgroundColor: isMobile
            ? isInView
              ? project.cover
              : "rgba(0,0,0,0)"
            : isInView
            ? project.background
            : "rgba(0,0,0,0)",
          transition: "all 1s cubic-bezier(.58,.04,.42,1.04) 1.6s",
          mixBlendMode: "",
        }}
        /**{
            clipPath: isHovering
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)",
          }}
          transition={{
            duration: 0.3,
            type: "spring",
          }</> */
        /*  style={{
          backgroundColor: "rgba(0,0,0,0)",
           transition: "all 1s cubic-bezier(.58,.04,.42,1.04) 0.6s", 
        }}
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          backgroundColor: isInView
            ? ["rgba(0,0,0,0)", "#faf", "rgba(0,0,0,0)", project.background]
            : "rgba(0,0,0,0)",
        }}
        transition={{
          delay: 2,
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }} */
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
        {/* MASK 
        m-5 overflow-hidden w-[80vw] h-[80vh]
        ${styles.mask}*/}

        {/** DIV que contiene al div Sólo se ve en la transición */}
        <motion.div
          className={`mask relative  h-full max-h-[90vh] w-full bg-cyan-900 shadow-inner  `}
          style={{
            /*   rgb(117 190 218 / 0.5) */
            backgroundColor: isMobile
              ? isInView
                ? "rgba(0,0,0,0)"
                : "rgba(0,0,0,0)"
              : isInView
              ? project.container
              : "rgba(0,0,0,0)",
          }}
        >
          {/* w-5/6 h-5/6 */}
          {/**Segundo DIV Este es el que se muestra  */}

          <AnimatePresence>
            {isInView && (
              <motion.div
                className={`${styles.mask} absolute inset-0 m-auto inline-block h-full max-h-[90vh] w-full overflow-hidden shadow-2xl  `}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                style={{
                  backgroundColor: project.cover,
                }}
                /*   initial={{
                  style={

                  }
                backgroundColor: "rgba(0,0,0,0)",
                /* clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)", 
              }} */
                variants={{
                  hidden: {
                    scale: 0.7,
                  },
                  visible: {
                    scale: 1,
                    transition: { ease: [0.22, 0.84, 0.13, 1.07], delay: 1.1 },
                  },
                }}
              >
                {/* /project ID */}
                <span
                  className="absolute h-screen w-screen"
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <AnimatedText
                    className={`invisible absolute top-[-25%] h-screen font-inter text-5xl font-bold tracking-tighter text-opacity-20 md:visible md:left-[calc(60%+8rem)] lg:left-[calc(65%+8rem)] lg:text-[calc(100vh+16rem)] xl:left-[calc(60%+8rem)]`}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 0.2,
                        transition: {
                          type: "tween",
                          ease: "easeInOut",
                          duration: 0.7,
                          delay: 1,
                        },
                      },
                    }}
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                    }}
                  >
                    {`${project.id}`}
                  </AnimatedText>
                </span>
                <AnimatePresence>
                  {isInView && (
                    <motion.div
                      className={`mask relative h-full  max-h-[90vh] w-full  content-center bg-transparent ${styles.mask} `}
                      initial="hidden"
                      whileInView="visible"
                      exit="hidden"
                      /*   initial={{
                backgroundColor: "rgba(0,0,0,0)",
                /* clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)", 
              }} */
                      variants={{
                        hidden: {
                          opacity: 1,
                          scaleY: 0.8,
                          transition: { delay: 0 },
                        },
                        visible: {
                          opacity: 1,

                          scaleY: 1,
                          transition: {
                            ease: [0.22, 0.84, 0.13, 1.07],
                            delay: 2.1,
                          },
                        },
                      }}
                      animate={animation}
                      style={{
                        clipPath: "polygon(10% 30%, 90% 30%, 90% 70%, 10% 70%)",
                      }}
                    >
                      <motion.div className="h-full w-full">
                        <Image
                          className="photo  h-full object-cover object-center brightness-90 lg:w-full  lg:object-center "
                          src={project.coverURL}
                          alt={project.name}
                          fill
                          initial={{ scale: 1.5 }}
                          animate={animationImg}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-y-0 left-0 mb-10 flex h-screen w-full max-w-xl flex-col justify-center gap-3 rounded-md  p-10 lg:max-w-xl lg:bg-transparent xl:max-w-4xl xl:py-20 xl:pl-24  2xl:max-w-6xl">
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <AnimatedHeading
              variants={fromBottomVariant}
              className={`${styles.head} font-barlow-500 py-2 text-4xl font-semibold  tracking-tighter text-neutral-900 dark:text-slate-100 md:text-7xl `}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              {project.name}
            </AnimatedHeading>
          </span>
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <AnimatedText
              className={`${styles.demotext} text-lg font-medium tracking-wider text-white lg:ml-8 lg:w-4/6 lg:text-2xl `}
              variants={fromBottomVariantDescription}
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              {project.description}
            </AnimatedText>
          </span>

          <motion.div className="flex h-fit w-fit items-center gap-4 lg:px-4">
            {project.star && (
              <>
                <motion.div
                  variants={fromRightVariantStar}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  <BsStar className="h-6 w-6 transition-all hover:scale-110 active:scale-90 lg:ml-8" />
                </motion.div>
                <AnimatedText
                  className={`${styles.demotext} text-base font-normal tracking-wider text-white lg:ml-1 lg:w-fit lg:text-lg lg:font-medium `}
                  variants={fromRightVariantStar}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  {project.star}
                </AnimatedText>
              </>
            )}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-1 lg:ml-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
              delay: 2.2,
            }}
          >
            {project.tools.map((tool, index) => {
              return (
                <motion.span
                  key={`${tool}-${index}`}
                  className="bg-darkPrimary px-2 py-1  text-xs text-gray-800 dark:bg-gray-100"
                  variants={fromRightVariantSpan}
                  initial="hidden"
                  whileInView={"visible"}
                >
                  {tool}
                </motion.span>
              );
            })}
          </motion.div>

          <motion.div
            className=" flex h-fit w-fit items-center gap-4 lg:px-4"
            variants={FadeContainer}
          >
            <motion.div
              onMouseEnter={sequence}
              onMouseLeave={sequenceReverse}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 2.3,
                },
              }}
              animate={isMobile ? setTimeout(sequence, 3600) : ""}
            >
              {project.previewURL && (
                <Link
                  href={project.previewURL}
                  title="Live Preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <ViewMoreButton colorCode={project.buttonColor} />
                </Link>
              )}
            </motion.div>
            <Link
              href={project.githubURL}
              title="Source Code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black dark:hover:text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 2.6,
                  },
                }}
              >
                <BsGithub className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* style={{ y }} */}
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
