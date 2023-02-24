import React, { useEffect, useRef, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "../../styles/Button.module.css";
import { gsap } from "gsap/dist/gsap";

export default function ViewMoreButton({ colorCode, link }) {
  return (
    <button
      className={`border-[none]; relative z-[1] float-left m-[1em] block min-w-[150px] max-w-[250px] px-[2em] py-[1em] align-middle uppercase
      tracking-[2px] text-inherit before:bg-rose-600 hover:border-white
       ${styles.button} ${styles.button__ujarak} ${styles.button__border_thick}`}
      onClick={() => window.open(link, "_self")}
    >
      View Work
    </button>
  );
}
