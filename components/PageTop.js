import {
  fromRightVariant,
  opacityVariant,
} from "../content/FramerMotionVariants"; // ===> not created yet
import AnimatedHeading from "./FramerMotion/AnimatedHeading";
import AnimatedText from "./FramerMotion/AnimatedText";

export default function PageTop({ pageTitle, headingClass, children }) {
  return (
    <div className="mr-1 mb-10 flex h-screen w-full  max-w-xl select-none flex-col justify-center gap-3 py-5">
      <AnimatedHeading
        variants={fromRightVariant}
        className={`text-5xl  font-bold text-neutral-900 dark:text-neutral-200 lg:text-7xl ${headingClass}`}
      >
        {pageTitle}
      </AnimatedHeading>
      <AnimatedText
        variants={opacityVariant}
        className="text-lg font-medium tracking-wider text-gray-400 lg:text-2xl"
      >
        {children}
      </AnimatedText>
    </div>
  );
}
