export const navigationRoutes = [
  "home",
  "about",
  /* "stats",
  "utilities",
  "blogs", */
  /* "certificates", */
  "projects",
  /* "newsletter",
  "rss", */
];

export const DEFAULT_IMAGE_URL = "https://imgur.com/5dYYce8.png";
export const AvatarImage = "https://imgur.com/VAXEwKT.png";
//export const homeProfileImage = "https://imgur.com/VAXEwKT.png";

// Preload fonts
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export { preloadFonts, randomNumber };
