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
  popUp,
} from "../content/FramerMotionVariants";
import { homeProfileImage } from "../utils/utils"; // not created yet
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";

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

  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        previewImage={pageMeta.about.image}
        keywords={pageMeta.about.keywords}
      />

      <section className="pageTop">
        <div className="relative dark:bg-dark Primary dark:text-gray-100">
          <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={FadeContainer}
              viewport={{ once: true }}
              className="grid place-content-center min-h-screen"
            >
              <div className="w-full relative mx-auto flex flex-col items-start gap-10">
                <motion.div
                  variants={popUp}
                  className="relative w-3/5 h-screen xs:w-screen xs:h-screen flex justify-center items-center rounded-full p-3 "
                >
                  {/*  /* A component that I created to handle images. It is not important for this
                  question.  */}

                  <div className="flex flex-col gap-10">
                    <div className="relative flex flex-row-reverse h-full ">
                      <Image
                        src={homeProfileImage}
                        className=" rounded-full shadow filter saturate-0"
                        width={333}
                        height={333}
                        alt="cover Profile Image"
                        quality={75}
                        priority={true}
                      />
                      <svg className="-mr-28">
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
                      </svg>
                      <svg className="-mr-20">
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
                      </svg>
                      <svg className="-mr-28">
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
                      </svg>
                      <div className="asbsolute flex flex-col gap-1 bottom-0 left-0 h-16 w-16 -mt-50">
                        <motion.h1
                          variants={opacityVariant}
                          className="w-full absolute text-5xl lg:text-6xl font-bold font-sarina bottom-0 left-0 h-32"
                        >
                          JESUS MEDINA
                        </motion.h1>
                      </div>
                    </div>
                    <motion.p
                      variants={opacityVariant}
                      className="pt-6 font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                    >
                      React Developer, Competitive Programmer
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>

        {/*  <Support /> */}
      </section>
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
