import "../styles/globals.css";
import "../styles/Base.module.css";
import { DarkModeProvider } from "../context/darkModeContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../layout/Layout";
// import function to register Swiper custom elements

/* Progressbar Configurations */
NProgress.configure({
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js";

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;
