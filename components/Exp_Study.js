import Link from "next/link";
import Image from "next/image";
import { FadeContainer, popUp } from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";
import { HiOutlineQrcode } from "react-icons/hi";
import useSWR from "swr"; // not installed yet

// Not create yet
import fetcher from "../lib/fetcher";
import socialMedia from "../content/socialMedia";

export default function Exp_Study() {
  return (
    <>
      <section className="print:hidden xs:px-20">
        {" "}
        {/* /* text-gray-600 dark:text-gray-400/50 font-inter mb-20  */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-20 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
        >
          <section className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4 capitalize">
              <div>somethi</div>

              {/* {navigationRoutes.slice(0, 4).map((text, index) => {
                return {
                   <FooterLink key={index} id={index} route={text} text={text} /> 
                };
              })} */}
        {/*    </div>
            <div className="flex flex-col gap-4 capitalize">
              <div>otro</div> */}
        {/* {navigationRoutes
                .slice(4, navigationRoutes.length)
                .map((route, index) => {
                  let text = route;
                  if (route === "rss") text = "RSS";
                    return <FooterLink key={index} route={route} text={text} />; 
                })} */}
        {/*  </div>
            <div className="flex flex-col gap-4 capitalize">
              <div>tercerp</div> */}
        {/* {socialMedia.slice(0, 4).map((platform, index) => {
                return (
                  <Link key={index} href={platform.url} passHref>
                    <motion.a
                      className="hover:text-black dark:hover:text-white w-fit"
                      variants={popUp}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={platform.url}
                    >
                      {platform.title}
                    </motion.a>
                  </Link>
                );
              })} */}
        {/* </div>
          </section>
        </motion.div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 py-5 container mx-auto px-5">
            <div class="relative">
              <div
                class="border-r-4 border-black absolute h-full top-0"
                style={{ left: "9px" }}
              ></div>
              <ul class="list-none m-0 p-0">
                <li class="mb-5  ">
                  <div class="flex group items-center ">
                    <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                      <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div class="flex-1 ml-4 z-10 font-medium">
                      <div class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                        <h3 class="mb-3 font-bold text-white text-2xl">
                          Personal Portfolio April Fools
                        </h3>
                        <p class="pb-4 text-sm text-gray-100">
                          University of DVI (1997 - 2001)
                        </p>
                        <hr />
                        <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                          The education should be very interactual. Ut tincidunt
                          est ac dolor aliquam sodales. Phasellus sed mauris
                          hendrerit, laoreet sem in, lobortis mauris hendrerit
                          ante.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="mb-5  ">
                  <div class="flex group items-center ">
                    <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                      <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div class="flex-1 ml-4 z-10 font-medium">
                      <div class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                        <h3 class="mb-3 font-bold text-white text-2xl">
                          Personal Portfolio April Fools
                        </h3>
                        <p class="pb-4 text-sm text-gray-100">
                          University of DVI (1997 - 2001)
                        </p>
                        <hr />
                        <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                          The education should be very interactual. Ut tincidunt
                          est ac dolor aliquam sodales. Phasellus sed mauris
                          hendrerit, laoreet sem in, lobortis mauris hendrerit
                          ante.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 py-5 container mx-auto px-5">
            <div class="relative">
              <div
                class="border-r-4 border-black absolute h-full top-0"
                style={{ left: "9px" }}
              ></div>
              <ul class="list-none m-0 p-0">
                <li class="mb-5  ">
                  <div class="flex group items-center ">
                    <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                      <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div class="flex-1 ml-4 z-10 font-medium">
                      <div class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                        <h3 class="mb-3 font-bold text-white text-2xl">
                          Personal Portfolio April Fools
                        </h3>
                        <p class="pb-4 text-sm text-gray-100">
                          University of DVI (1997 - 2001)
                        </p>
                        <hr />
                        <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                          The education should be very interactual. Ut tincidunt
                          est ac dolor aliquam sodales. Phasellus sed mauris
                          hendrerit, laoreet sem in, lobortis mauris hendrerit
                          ante.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="mb-5  ">
                  <div class="flex group items-center ">
                    <div class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                      <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div class="flex-1 ml-4 z-10 font-medium">
                      <div class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                        <h3 class="mb-3 font-bold text-white text-2xl">
                          Personal Portfolio April Fools
                        </h3>
                        <p class="pb-4 text-sm text-gray-100">
                          University of DVI (1997 - 2001)
                        </p>
                        <hr />
                        <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                          The education should be very interactual. Ut tincidunt
                          est ac dolor aliquam sodales. Phasellus sed mauris
                          hendrerit, laoreet sem in, lobortis mauris hendrerit
                          ante.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          {/*  <div
          onClick={() => setShowQR(!showQR)}
          className="bg-gray-700 text-white p-4 rounded-full cursor-pointer transition-all active:scale-90 hover:scale-105"
        >
          <HiOutlineQrcode className="w-6 h-6 " />
        </div> */}
        </div>
      </section>
    </>
  );
}
