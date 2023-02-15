import React, { useEffect, useRef, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./style.module.css";
import { gsap } from "gsap/dist/gsap";

export default function ViewMoreButton({ colorCode, link }) {
  return (
    <button
      className={`float-left min-w-[150px] max-w-[250px] block text-inherit align-middle relative z-[1] m-[1em] px-[2em] py-[1em] border-[none];
      before:bg-rose-600 hover:border-white tracking-[2px] uppercase
       ${styles.button} ${styles.button__ujarak} ${styles.button__border_thick}`}
      onClick={() => window.open(link, "_self")}
    >
      View Work
    </button>
  );
}
