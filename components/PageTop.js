import {
  fromRightVariant,
  opacityVariant,
} from "../content/FramerMotionVariants"; // ===> not created yet
import AnimatedHeading from "./FramerMotion/AnimatedHeading";
import AnimatedText from "./FramerMotion/AnimatedText";

export default function PageTop({ pageTitle, headingClass, children }) {
  return (
    <div className=" max-w-xl w-full h-screen justify-center  flex flex-col gap-3 py-5 select-none mb-10">
      <AnimatedHeading
        variants={fromRightVariant}
        className={`text-7xl  md:text-5xl font-bold text-neutral-900 dark:text-neutral-200 ${headingClass}`}
      >
        {pageTitle}
      </AnimatedHeading>
      <AnimatedText
        variants={opacityVariant}
        className="font-medium text-lg lg:text-2xl text-gray-400 tracking-wider"
      >
        {children}
      </AnimatedText>
    </div>
  );
}
