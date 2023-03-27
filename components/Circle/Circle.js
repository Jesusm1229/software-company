import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import "../../styles/Base.module.css";
import { preloadFonts } from "../../utils/utils";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FadeContainer,
  headingFromLeft,
  fromBottomVariantHome,
  fromTopVariant,
  opacityVariant,
  popUp,
  svgContainer,
  svgItem,
} from "../../content/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimatedHeading";
import PageTop from "../PageTop";
import { isMobile } from "react-device-detect";
/* import { TweenMax } from "gsap/gsap-core";
 */ /* import { Intro } from "./intro"; */

export default function Circle({ setShowQR, showQR }) {
  const [isVisible, setVisible] = useState(false);
  /* const DOC = {
    circles: document.querySelector(".circles"),
    enterCtrl: document.querySelector(".enter"),
    enterBackground: document.querySelector(".enter__bg"),
  }; */

  //Text
  /* const DOCcircleText = [...document.querySelectorAll(".circles__text")];
   */

  //app para gsap
  const app = useRef(null);
  const ctxButton = useRef(null);
  const start = useRef(null);

  const isInView = useInView(app);
  //Al entrar en botón
  /* const onEnter = ({ currentTarget }) => {
    gsap.to(".enter__bg", {
      backgroundColor: "#dad4d1",
      scale: 1.2,
      ease: "expo",
      opacity: 1,
    });

    //Rotación de los text
    gsap.to(".circles__text", {
      duration: 0.5,
      ease: "expo",
      rotation: "+=180",
      scale: 0.5,
      opacity: 0.2,
      stagger: {
        amount: 0,
      },
    });

    gsap.to(".circles__text--1", {
      rotation: "+=360",
      duration: 60,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--2", {
      rotation: "+=360",
      duration: 40,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--3", {
      rotation: "+=360",
      duration: 30,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--4", {
      rotation: "+=360",
      duration: 20,
      ease: "back",
      repeat: -1,
    });
  }; */

  //Exiting button
  /* const onLeave = ({ currentTarget }) => {
    //Button
    gsap.to(".enter__bg", {
      backgroundColor: "#dad4d1",
      scale: 1,
      ease: "elastic.out(1, 0.4)",
      duration: 2,
      opacity: 0.5,
    });

    gsap.to(".enter__bg", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
    });

    //Circle-Text
    gsap.to(".circles__text", {
      duration: 1.5,
      ease: "elastic.out(1, 0.4)",
      scale: 1,
      rotation: "+=360",
      opacity: 1,
      stagger: {
        amount: 0,
      },
    });
    gsap.to(".circles__text--1", {
      rotation: "+=360",
      duration: 60,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--2", {
      rotation: "+=360",
      duration: 40,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--3", {
      rotation: "+=360",
      duration: 30,
      ease: "back",
      repeat: -1,
    });
    gsap.to(".circles__text--4", {
      rotation: "+=360",
      duration: 20,
      ease: "back",
      repeat: -1,
    });
  }; */

  /* function enter() {
    start.kill();
  } */

  //Animación de inicio
  /*  useEffect(() => {
    start.current = gsap.context(() => {
      gsap
        .timeline()
        .set(".circles__text", { transformOrigin: "50% 50%" })
        .set([".circles__text", ".enter"], { opacity: 0 })
        .set(".enter", { pointerEvents: "none" })
        .to(".circles__text", {
          duration: 3,
          ease: "expo.inOut",
          rotation: 90,
          stagger: {
            amount: 0.4,
          },
        })
        .to([".circles__text"], {
          duration: 3,
          ease: "expo.inOut",
          startAt: { opacity: 0, scale: 0.8 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.4,
          },
        })
        .to([".enter"], {
          duration: 1.5,
          ease: "expo.inOut",
          startAt: { opacity: 0, scale: 0.8 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.3,
          },
        })
        .set(".enter", { pointerEvents: "auto" })

        
        .to(".circles__text--1", {
          rotation: "+=360",
          duration: 60,
          ease: "none",
          repeat: -1,
        })
        .to(".circles__text--2", {
          rotation: "+=360",
          duration: 40,
          ease: "none",
          repeat: -1,
        })
        .to(".circles__text--3", {
          rotation: "+=360",
          duration: 30,
          ease: "none",
          repeat: -1,
        })
        .to(".circles__text--4", {
          rotation: "+=360",
          duration: 20,
          ease: "none",
          repeat: -1,
        });
    });

    const ctx = gsap.context(() => {
      gsap.set(".circles__text", { transformOrigin: "50% 50%" });
      
      gsap.to(".circles__text--1", {
        rotation: "+=360",
        duration: 60,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".circles__text--2", {
        rotation: "+=360",
        duration: 40,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".circles__text--3", {
        rotation: "+=360",
        duration: 30,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".circles__text--4", {
        rotation: "+=360",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      
    }, app);

    ctxButton.current = gsap.context(() => {
      gsap.to(".enter__bg", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
      });
    }, app);

    return () => {
      ctx.revert();
    };
  });
 */

  //If mobile the visible state will be true by default
  useEffect(() => {
    if (isMobile) setVisible(true);
  }, []);

  //Adding extra fonts
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //script index
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./index.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className=" absolute  inset-0 m-auto flex  h-screen w-screen flex-col justify-center space-y-40 text-center"
            exit={{ opacity: 0, scale: 0 }}
          >
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <AnimatedHeading
                variants={fromBottomVariantHome}
                className={`py-6 text-center text-7xl font-bold text-neutral-900 dark:text-neutral-200 lg:text-9xl `}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                JESÚS MEDINA
              </AnimatedHeading>
            </span>
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <AnimatedHeading
                variants={fromTopVariant}
                className={`py-6 text-center text-6xl font-bold text-neutral-900 dark:text-neutral-200 lg:text-9xl `}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                SOFTWARE DEVELOPER
              </AnimatedHeading>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeContainer}
        ref={app}
        className="App body loading demo-3 fixed"
      >
        <div className="fixed relative inset-0 h-full w-full items-center justify-items-center">
          <motion.svg
            className="circles pointer-events-none fixed top-[calc(50%_-_var(--dim)_/_2_)] left-[calc(50%_-_var(--dim)_/_2_)] h-[var(--dim)] w-[var(--dim)]"
            width="100%"
            height="100%"
            viewBox="0 0 1400 1400"
          >
            <def>
              <path
                id="circle-1"
                d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
              />
              <path
                id="circle-2"
                d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
              />
              <path
                id="circle-3"
                d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
              />
              <path
                id="circle-4"
                d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
              />
            </def>
            <motion.text
              className="circles__text--1 origin-[700px_700px] fill-[var(--color-text-circle-1)] text-[25vmin] text-[clamp(170px,25vmin,180px)] font-[number:var(--font-weight-circle-1)] uppercase will-change-[transform,opacity]"
              style={{
                origin: "50%",
              }}
              animate={{
                rotate: 360,
                transition: { ease: "linear", duration: 60, repeat: Infinity },
              }}
              initial="hidden"
              whileInView="visible"
              custom={isVisible}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (isVisible) => ({
                  opacity: isVisible ? 0.5 : 1,
                  scale: isVisible ? 0.5 : 1,
                  transition: {
                    scale: {
                      type: "tween",
                      ease: "easeInOut",
                      /* stiffness: 100,
                      mass: 5,
                      damping: 4, */
                    },
                  },
                }),
              }}
            >
              <textPath
                className="circles__text-path"
                xlinkHref="#circle-1"
                aria-label=""
                textLength="2830"
              >
                Something incredible is waiting •&nbsp;
              </textPath>
            </motion.text>
            <motion.text
              className="circles__text circles__text--2"
              style={{ origin: "50%" }}
              animate={{
                rotate: 360,
                transition: { ease: "linear", duration: 40, repeat: Infinity },
              }}
              initial="hidden"
              whileInView="visible"
              custom={isVisible}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (isVisible) => ({
                  opacity: isVisible ? 0.5 : 1,
                  scale: isVisible ? 0.5 : 1,
                  transition: {
                    scale: {
                      type: "tween",
                      ease: "easeInOut",
                      /* stiffness: 100,
                      mass: 5,
                      damping: 4, */
                    },
                    delay: 0.1,
                  },
                }),
              }}
            >
              <textPath
                className="circles__text-path"
                xlinkHref="#circle-2"
                aria-label=""
                textLength="2001"
              >
                Engineering • Solutions • Creative Design •&nbsp;
              </textPath>
            </motion.text>
            <motion.text
              className="circles__text circles__text--3"
              style={{ origin: "50%" }}
              animate={{
                rotate: 360,
                transition: { ease: "linear", duration: 30, repeat: Infinity },
              }}
              initial="hidden"
              whileInView="visible"
              custom={isVisible}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (isVisible) => ({
                  opacity: isVisible ? 0.5 : 1,
                  scale: isVisible ? 0.5 : 1,
                  transition: {
                    scale: {
                      type: "tween",
                      ease: "easeInOut",
                      /* stiffness: 100,
                      mass: 5,
                      damping: 4, */
                    },
                    delay: 0.2,
                  },
                }),
              }}
            >
              <textPath
                className="circles__text-path"
                xlinkHref="#circle-3"
                aria-label=""
                textLength="1341"
              >
                Digital ○ Web ○ App ○&nbsp;
              </textPath>
            </motion.text>
            <motion.text
              className="circles__text circles__text--4"
              style={{ origin: "50%" }}
              animate={{
                rotate: 360,
                transition: { ease: "linear", duration: 20, repeat: Infinity },
              }}
              initial="hidden"
              whileInView="visible"
              custom={isVisible}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (isVisible) => ({
                  opacity: isVisible ? 0.5 : 1,
                  scale: isVisible ? 0.5 : 1,
                  transition: {
                    scale: {
                      type: "tween",
                      ease: "easeInOut",
                      /* stiffness: 100,
                      mass: 5,
                      damping: 4, */
                    },
                    delay: 0.3,
                  },
                }),
              }}
            >
              <textPath
                className="circles__text-path"
                xlinkHref="#circle-4"
                aria-label=""
                textLength="836"
              >
                Inmersive experiences -&nbsp;
              </textPath>
            </motion.text>
          </motion.svg>
          {/*   <div className="frame">
          <h1 className="frame__title">Circular Text Effect</h1>
          <nav className="frame__links">
            <a href="http://tympanus.net/Tutorials/InfiniteCircularGallery/">
              Previous demo
            </a>
            <a href="https://tympanus.net/codrops/?p=53487">Article</a>
            <a href="https://github.com/codrops/CircularTextEffect/">GitHub</a>
          </nav>
          <nav className="frame__demos">
            <a href="index.html" className="frame__demo">
              demo 1
            </a>
            <a href="index2.html" className="frame__demo">
              demo 2
            </a>
            <a href="index3.html" className="frame__demo frame__demo--current">
              demo 3
            </a>
          </nav>
        </div>
        <div className="content">
          <p>
            We are a creative agency that focuses on human-centric design and
            ergonomic workplace innovations.
          </p>
        </div> */}

          <motion.div
            className="absolute"
            onMouseEnter={() => {
              /* onEnter; */
              setVisible(true);
            }}
            onMouseLeave={() => {
              /* onLeave; */
              setVisible(false);
            }}
            onClick={() => setShowQR(!showQR)}
            /*  animate={{
              scale: [1, 1.1, 1],
              transition: { ease: "linear", duration: 2, repeat: Infinity },
            }} */
            whileHover={{
              scale: [null, 1.3],
              duration: 0.3,
              transition: { type: "spring" },
            }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: [1, 1.1, 1],
                transition: {
                  scale: {
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                    /* stiffness: 100,
                      mass: 5,
                      damping: 4, */
                  },
                  delay: 0.4,
                },
              },
            }}
          >
            <button
              className="enter border-0; absolute m-auto block h-[var(--dim-button)] w-[var(--dim-button)]   cursor-pointer cursor-pointer  p-0 font-medium font-medium text-[color:var(--color-text-button)]
          "
            >
              <div
                className="enter__bg top-0; absolute left-0 h-full w-full rounded-[50%] "
                onClick={() => setShowQR(!showQR)}
              ></div>
              <span
                className="enter__text relative"
                onClick={() => setShowQR(!showQR)}
              >
                CONTACT ME
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
