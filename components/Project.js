import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";
import Link from "next/link";
import OgImage from "../components/OgImage"; // =========> not created yet

export default function Project({ project }) {
  return (
    /*   <div className="card">
      <OgImage
        src={project.coverURL}
        alt={project.name}
        darkSrc={project.darkCoverURL}
      />

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize text-neutral-900 dark:text-neutral-200">
          {project.name}
        </h1>
        <p className="text-sm text-gray-400 dark:text-neutral-400 truncate-2">
          {project.description}
        </p>

        <div className="flex items-center gap-1 flex-wrap">
          {project.tools.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="bg-gray-100 dark:bg-darkPrimary text-gray-500 rounded px-2 py-1 text-xs"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="mt-auto p-2 w-fit flex items-center gap-4">
          <Link
            href={project.githubURL}
            title="Source Code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:hover:text-white"
          >
            <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
          </Link>

          {project.previewURL && (
            <Link
              href={project.previewURL}
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </div> */

    /*  <div className="velo-slide">
      <section class="velo-slide">
        <span class="velo-slider__hint">
          <span>
            <span>Check Them Bldgs</span>
          </span>
        </span>
        <div class="velo-slide__bg">
          <span class="border">
            <span></span>
          </span>
          <figure
            class="velo-slide__figure"
            style="background-image: url(https://source.unsplash.com/VsBl5PwVZpY/2000x1200)"
          ></figure>
        </div>

        <header class="velo-slide__header">
          <h3 class="velo-slide__title">
            <span class="oh">
              <span>The Name Is</span>
            </span>
            <span class="oh">
              <span>Stephen Scaff</span>
            </span>
          </h3>
          <p class="velo-slide__text">
            <span class="oh">
              <span>
                I'm a Creative Developer currently building web things at the
                Seattle Branding + Interactive firm, Urban Influence.
              </span>
            </span>
          </p>
          <span class="velo-slide__btn">
            <a class="btn-draw btn--white" href="#">
              <span class="btn-draw__text">
                <span>View Work</span>
              </span>
            </a>
          </span>
        </header>
      </section>
    </div> */

    <div className="card">
      {/*  <OgImage
        src={project.coverURL}
        alt={project.name}
        darkSrc={project.darkCoverURL}
      /> */}

      <div className="flex flex-col justify-start gap-3">
        <h1 className="font-bold capitalize text-neutral-900 dark:text-neutral-200">
          {project.name}
        </h1>
        <p className="text-sm text-gray-400 dark:text-neutral-400 truncate-2">
          {project.description}
        </p>

        <div className="flex items-center gap-1 flex-wrap">
          {project.tools.map((tool, index) => {
            return (
              <span
                key={`${tool}-${index}`}
                className="bg-gray-100 dark:bg-darkPrimary text-gray-500 rounded px-2 py-1 text-xs"
              >
                {tool}
              </span>
            );
          })}
        </div>

        <div className="mt-auto p-2 w-fit flex items-center gap-4">
          <Link
            href={project.githubURL}
            title="Source Code on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:hover:text-white"
          >
            <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
          </Link>

          {project.previewURL && (
            <Link
              href={project.previewURL}
              title="Live Preview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
