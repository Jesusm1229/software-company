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

export default function About({ about }) {
  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        previewImage={pageMeta.about.image}
        keywords={pageMeta.about.keywords}
      />

      <section className="pageTop">
        <AnimatedDiv
          variants={opacityVariant}
          className={` blog-container prose-sm  3xl:prose-lg`}
        >
          {/* <MDXRemote
            {...about.content}
            frontmatter={about.meta}
            components={MDXComponents}
          /> */}
          <PageTop pageTitle="Jesús Medina" className></PageTop>
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
                    className="relative w-54 h-54 xs:w-54 xs:h-54  flex justify-start items-center rounded-full p-3 "
                  >
                    {/*  /* A component that I created to handle images. It is not important for this
                  question.  */}
                    <Image
                      src={homeProfileImage}
                      className="-ml-40 rounded-full shadow filter saturate-0"
                      width={333}
                      height={333}
                      alt="cover Profile Image"
                      quality={75}
                      priority={true}
                    />

                    <div className="flex flex-row-reverse h-full min-h-screen">
                      <svg className="-ml-20">
                        <ellipse
                          rx="150"
                          ry="150"
                          cx="50%"
                          cy="50%"
                          fill="white"
                          stroke="blue"
                          stroke-width="3"
                        />
                      </svg>
                      <svg className="-ml-20">
                        <ellipse
                          rx="150"
                          ry="170"
                          cx="50%"
                          cy="50%"
                          fill="white"
                          stroke="green"
                          stroke-width="3"
                        />
                      </svg>
                      <svg className="-ml-20">
                        <ellipse
                          rx="150"
                          ry="190"
                          cx="50%"
                          cy="50%"
                          fill="white"
                          stroke="red"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                  <motion.h1
                    variants={opacityVariant}
                    className="text-9xl lg:text-9xl font-bold font-montserrat"
                  >
                    JESUS MEDINA
                  </motion.h1>

                  <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
                    <div className="flex flex-col gap-1">
                      <motion.h1
                        variants={opacityVariant}
                        className="text-9xl lg:text-9xl font-bold font-montserrat"
                      >
                        JESUS MEDINA
                      </motion.h1>
                      <motion.p
                        variants={opacityVariant}
                        className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
                      >
                        React Developer, Competitive Programmer
                      </motion.p>
                    </div>

                    <motion.p
                      variants={opacityVariant}
                      className=" text-slate-500 dark:text-gray-300 font-medium text-sm md:text-base text-center"
                    >
                      I am currently pursuing my Bachelor Degree in Computer
                      Science. I can code in Python, C, C++, etc.
                    </motion.p>
                  </div>

                  <motion.div
                    className="rounded-md overflow-hidden"
                    variants={popUp}
                  >
                    <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                      <button
                        className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                        onClick={() => window.open("/resume")}
                      >
                        <FiDownload />
                        <p>Resume</p>
                      </button>
                    </Ripples>
                  </motion.div>
                </div>
              </motion.section>
            </div>
          </div>
        </AnimatedDiv>
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
