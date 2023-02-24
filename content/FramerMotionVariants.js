export const FadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 1, staggerChildren: 0.1 },
  },
};

export const hamFastFadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const mobileNavItemSideways = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const popUp = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: "spring",
  },
};

export const opacityVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3 } },
};

export const fromRightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const fromRightVariantSpan = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "tween",
      ease: "easeInOut",
      delay: 2,
    },
  },
};

export const fromRightVariantStar = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 100,
      delay: 2,
    },
  },
};

export const fromBottomVariant = {
  hidden: { y: "100%", opacity: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: 1.3,
    },
  },
};

export const fromBottomVariantDescription = {
  hidden: { y: "100%", opacity: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: 1.6,
    },
  },
};

export const fromBottomVariantHome = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const fromTopVariant = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const popUpFromBottomForText = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

export const headingFromLeft = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 70,
    },
  },
};

export const svgContainer = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

export const svgItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: {
        type: "spring",
        stiffness: 100,
        mass: 5,
        damping: 4,
      },
      delay: 1,
    },
  },
};
