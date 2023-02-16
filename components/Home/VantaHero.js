import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import styles from "../../styles/Home.module.css";

export default function VantaHero({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x0,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="min-h-screen w-screen ">
      <div
        className="flex justify-center items-center h-screen bg-black px-0 py-40"
        ref={vantaRef}
      >
        {children}
      </div>
    </div>
  );
}
