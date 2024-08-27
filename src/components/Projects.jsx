import React from "react";
import { PROJECTS } from "../constants";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects.</h1>
      <div className="">
      <section className="mt-12 mx-auto max-w-screen-xl">
        <div className="mb-12 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:justify-center">
          {PROJECTS.map((project, key) => (
            <article
              className="max-w-md shadow-xl hover:animate-pulse rounded-md border hover:shadow-purple-500/50 duration-300 hover:shadow-2xl"
              key={key}
            >
              <a href={project.image}>
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-64 rounded-t-md"
                />
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl mb-5">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 mb-3">
                    {project.description}
                  </p>
                </div>
              </a>
              <div className="ml-4 mr-4 mb-5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-wrap text-truncate leading-8 mr-2 mb-5 mt-5 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="ml-4 mr-4 mb-5">
                <button className="px-2.5 py-2.5 text-purple-600 duration-150 bg-purple-50 rounded-lg hover:bg-purple-100 active:bg-purple-200">
                  <a title="GitHub" href={project.repo_url}>
                    <FaCode />
                  </a>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* 
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="w-full max-w-xl lh:w-3/4">
              <h6 className="mb-2 font-semibold ">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-5 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))} */}
        </div>
    </div>
  );
}
