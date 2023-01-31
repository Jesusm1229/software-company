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
import utilities from "../content/utilitiesData";
import { updateConditionalTypeNode } from "typescript";

export default function Exp_Study() {
  return (
    <>
      <section className="print:hidden xs:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/*   Loading columns */}
          {utilities.data.map((utility, index) => (
            <Experience_StudySection key={index} utility={utility} />
          ))}
        </div>
      </section>
    </>
  );
}

function Experience_StudySection({ utility }) {
  return (
    <div className="col-span-1 py-5 container mx-auto px-5">
      <h3 class="mb-3 font-bold text-gray-100 text-2xl">{utility.title}</h3>
      <div class="relative">
        <div
          class="border-r-4 border-r-cyan-200 opacity-50 absolute h-full top-0"
          style={{ left: "9px" }}
        ></div>
        <ul class="list-none m-0 p-0">
          {utility.data.map((item) => {
            return (
              <li class="mb-5  ">
                <div class="flex group items-center ">
                  <div class="bg-sky-200 opacity-90 z-10 rounded-full border-4 border-slate-900  h-5 w-5" />
                  <div class="flex-1  ml-4 z-10 font-medium">
                    <div class=" order-1 space-y-2  rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                      <h3 class="mb-3 text-gray-200 font-bold text-xl">
                        {item.name}
                      </h3>
                      <p className=" pb-2 text-sm text-gray-200 uppercase">
                        {item.type}
                        {" - "} {item.period}
                      </p>
                      <hr className="" />
                      <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
