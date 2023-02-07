import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import "../../styles/Base.module.css";
import { preloadFonts } from "../../utils/utils";
import { motion } from "framer-motion";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "../../content/FramerMotionVariants";
/* import { TweenMax } from "gsap/gsap-core";
 */ /* import { Intro } from "./intro"; */

export default function Circle({ setShowQR, showQR }) {
  /* const DOC = {
    circles: document.querySelector(".circles"),
    enterCtrl: document.querySelector(".enter"),
    enterBackground: document.querySelector(".enter__bg"),
  }; */

  //Text
  /* const DOCcircleText = [...document.querySelectorAll(".circles__text")];
   */
  //app para gsap
  const app = useRef();

  let ctxButton;
  let start;

  //Al entrar en botón
  const onEnter = ({ currentTarget }) => {
    ctxButton.kill();

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
  };

  //Exiting button
  const onLeave = ({ currentTarget }) => {
    //Button
    gsap.to(".enter__bg", {
      backgroundColor: "#dad4d1",
      scale: 1,
      ease: "elastic.out(1, 0.4)",
      duration: 2,
      opacity: 0.5,
    });

    ctxButton = gsap.context(() => {
      gsap.to(".enter__bg", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
      });
    }, app);

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
  };

  function enter() {
    start.kill();
  }

  useEffect(() => {
    start = gsap.context(() => {
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

        // use scoped selectors
        //gsap.to(".enter", { rotation: 360 });
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
      // use scoped selectors
      //gsap.to(".enter", { rotation: 360 });
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
      // need to set the transform origin in the center
      /* gsap.set(DOCcircleText, { transformOrigin: "50% 50%" }); */
      // hide on start
      /*  console.log([DOCcircleText]); */
      /*  gsap.set([DOCcircleText], {
        opacity: 0,
      }); */
      /*  gsap.to(DOC.enterBackground, {
        duration: 1.3,
        ease: "expo",
        scale: 1.4,
      }); */
      // or refs
      //gsap.to(circle.current, { rotation: 360 });
    }, app);

    ctxButton = gsap.context(() => {
      gsap.to(".enter__bg", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
      });
    }, app);

    return () => {
      ctx.revert();
      ctxButton.revert();
    };
  });

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={FadeContainer}
      ref={app}
      className="App body loading demo-3"
    >
      <div className="main">
        <svg
          className="circles"
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
          <text className="circles__text circles__text--1">
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-1"
              aria-label=""
              textLength="2830"
            >
              Let life begin I've cleansed all my sins&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--2">
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-2"
              aria-label=""
              textLength="2001"
            >
              Burn all the money absolve all the lies&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--3">
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-3"
              aria-label=""
              textLength="1341"
            >
              We are caged in simulations&nbsp;
            </textPath>
          </text>
          <text className="circles__text circles__text--4">
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-4"
              aria-label=""
              textLength="836"
            >
              But something has changed in us&nbsp;
            </textPath>
          </text>
        </svg>
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
        <button
          className="enter"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={() => setShowQR(!showQR)}
        >
          <div className="enter__bg" onClick={() => setShowQR(!showQR)}></div>
          <span className="enter__text" onClick={() => setShowQR(!showQR)}>
            CONTACT ME
          </span>
        </button>
      </div>
    </motion.div>
  );
}
