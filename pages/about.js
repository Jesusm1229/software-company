import { useEffect, useRef } from "react";
import MDXComponents from "../components/MDXComponents";
import MetaData from "../components/MetaData";
import PageTop from "../components/PageTop";
/* import Support from "../components/Support"; */
import MDXContent from "../lib/MDXContent";
import { MDXRemote } from "next-mdx-remote";
import styles from "../styles/Blog.module.css";
import AnimatedDiv from "../components/FramerMotion/AnimatedDiv";
import pageMeta from "../content/meta";
import { motion } from "framer-motion";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  fromRightVariant,
  popUp,
} from "../content/FramerMotionVariants";
import { homeProfileImage } from "../utils/utils"; // not created yet
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import Exp_Study from "../components/Exp_Study";

export default function About({ about }) {
  const app = useRef();
  useEffect(() => {
    let ctxButton = gsap.context(() => {
      gsap.to(".enter__bg", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
      });
    }, app);
    return () => {};
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        previewImage={pageMeta.about.image}
        keywords={pageMeta.about.keywords}
      />

      <section className="pageTop pt-10 pb-2 md:py-2">
        <div className=" bg-darkPrimary text-gray-100">
          <div className="relative max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={FadeContainer}
              viewport={{ once: true }}
              className="grid place-content-center h-min md:min-h-screen"
            >
              <div className="w-full relative mx-auto flex flex-col items-center md:gap-10">
                <motion.div
                  /*  variants={popUp} */
                  className="relative w-4/5 h-min xs:w-screen  flex justify-center items-center rounded-full p-3 "
                >
                  <div className="flex flex-col gap-10">
                    <motion.div
                      className="relative flex flex-row-reverse h-full "
                      initial="hidden"
                      animate="visible"
                      variants={list}
                    >
                      <motion.div variants={item}>
                        <Image
                          src={homeProfileImage}
                          className="rounded-full shadow filter saturate-0 w-full"
                          width={333}
                          height={333}
                          alt="cover Profile Image"
                          quality={75}
                          priority={true}
                        />
                      </motion.div>
                      <motion.svg
                        className="hidden -mr-28 lg:block"
                        variants={item}
                      >
                        <ellipse
                          opacity="0.5"
                          rx="140"
                          ry="150"
                          cx="50%"
                          cy="50%"
                          fill="#0081B4"
                          /* stroke="blue" */
                          stroke-width="3"
                        />
                      </motion.svg>
                      <motion.svg
                        className=" hidden -mr-20 md:flex"
                        variants={item}
                      >
                        <ellipse
                          opacity="0.3"
                          rx="120"
                          ry="120"
                          cx="50%"
                          cy="50%"
                          fill="#2DCDDF"
                          /*  stroke="green" */
                          stroke-width="3"
                        />
                      </motion.svg>
                      <motion.svg
                        className="hidden -mr-28 lg:block"
                        variants={item}
                      >
                        <ellipse
                          opacity="0.3"
                          rx="100"
                          ry="100"
                          cx="50%"
                          cy="50%"
                          fill="#86E5FF"
                          /* stroke="red" */
                          stroke-width="3"
                        />
                      </motion.svg>
                      <div className="asbsolute flex flex-col gap-1 bottom-0 left-0 h-16 w-16 -mt-50">
                        <motion.h1
                          variants={fromRightVariant}
                          className="w-full absolute text-5xl lg:text-9xl font-holland bottom-0 left-0 h-32"
                        >
                          Jesús Medina
                        </motion.h1>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="w-full flex flex-col p-5 gap-3 select-none items-center text-center justify-center">
                  <div className="flex flex-col gap-1">
                    {/* <motion.h1
                      variants={opacityVariant}
                      className="text-5xl lg:text-6xl font-bold font-sarina"
                    >
                     Jesus Medina
                    </motion.h1> */}
                    <motion.p
                      variants={opacityVariant}
                      className="font-semibold text-xl md:text-sm lg:text-3xl text-white"
                    >
                      Computer Engineer & Enthusiastic Developer
                    </motion.p>
                  </div>

                  <motion.p
                    variants={opacityVariant}
                    className=" text-gray-300 font-medium text-sm md:text-base lg:w-8/12 lg:text-xl text-center"
                  >
                    I build dedicated solutions that serves you in the best way.
                    My knowledge extends from the design of the models involving
                    the system to the final layer of interface that meets the
                    user.
                  </motion.p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      {/*  <Support /> */}

      <div className="pt-5 lg:pt-20 w-full">
        <Exp_Study />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { post: about } = await new MDXContent("static_pages").getPostFromSlug(
    "about"
  );

  return {
    props: {
      about,
    },
  };
}
