import React, { useEffect, useRef, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import "./style.module.css";
import { gsap } from "gsap/dist/gsap";

export default function ViewMoreButton({ link }) {
  /*  const DOC = {
    button: document.querySelector(".button"),
    background: document.querySelector(".backgroundHover"),
    firstWord: document.querySelectorAll(".button span"),
    secondWord: document.querySelectorAll(".button i"),
  }; */

  const onEnter = ({ currentTarget }) => {
    // Timeline
    var tl = gsap.context(() => {
      gsap
        .timeline()
        .to(".button span", {
          duration: 0.3,
          color: "rgb(55,178,230)",
          rotationX: 360,
          stagger: {
            each: 0.3,
            ease: "easeOut",
          },
        })
        .to(".button i", {
          duration: 0.3,
          color: "rgb(55,178,230)",
          rotationX: 360,
          stagger: {
            ease: "easeOut",
            each: 0.3,
          },
        })
        .to(".button ", {
          borderColor: "rgb(255,255,255,0)",
          duration: 0.3,
          ease: "easeOut",
          opacity: 1,
        })
        .to(".backgroundHover", {
          ease: "easeOut",
          opacity: 1,
          duration: 0.25,
          scaleX: "0%",
          transformOrigin: "left center",
        });
    });
    /*  var tl = new TimelineMax({ paused: true });
    tl.staggerTo(
      firstWord,
      1,
      { color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut },
      0.03,
      "#start"
    );
    tl.staggerTo(
      secondWord,
      1,
      { color: "rgb(55,178,230)", rotationX: 360, ease: Expo.easeOut },
      0.03,
      "#start"
    );
    tl.to(
      button,
      0.3,
      { "border-color": "rgb(255,255,255,0)", ease: Quad.easeOut },
      "#start"
    );
    tl.from(
      background,
      0.25,
      { scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut },
      "#start"
    ); */
  };

  //Exiting button
  const onLeave = ({ currentTarget }) => {
    gsap.to(".button ", {
      borderColor: "rgb(255,255,255,0)",
      duration: 0.3,
      ease: "easeOut",
      opacity: 1,
    });
    //Button
    /* gsap.to(".enter__bg", {
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
    }, app); */
    //Circle-Text
  };
  return (
    <a
      href="#"
      className="button border border-gray-400 outline-none active:scale-95 transition-transform flex items-center gap-2 px-5 py-2 text-white font-bold text-center no-underline uppercase relative  h-12 w-48"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span>V</span>
      <span>i</span>
      <span>e</span>
      <span>w</span>
      <i>W</i>
      <i>o</i>
      <i>r</i>
      <i>k</i>
      <b class="backgroundHover"></b>
    </a>
  );
}
