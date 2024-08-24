import React from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "NullClass",
    duration: "Jan 2024 - present",
    description:
      "Developed and maintained Frontend and Backend Services for various projects,",
    skills: [
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "JavaScript",
      "NestJS",
      "Typescript",
      "MongoDB",
      "AWS",
      "Shadcn/UI",
    ],
    logo: "/images/n.png",
    projects: [
      {
        name: "NullClass - specializing in software solutions and services.",
        link: "https://www.nullclass.com/",
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <div id="experience" className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-orange-400 mb-4 text-center text-2xl font-bold sm:text-3xl">
        Experience
      </h1>
      <p className="mb-8 text-center text-lg sm:text-xl">
        My Work Experience as a Software Developer
      </p>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-800 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 mb-6 rounded-2xl border p-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl sm:p-6"
        >
          <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
            <img
              src={exp.logo}
              alt={exp.company}
              className="mb-4 h-12 w-12 sm:mb-0 sm:mr-4"
            />
            <div>
              <h2 className="text-orange-500 text-lg font-bold sm:text-xl">
                {exp.title}
              </h2>
              <p className="text-sm sm:text-base">{exp.company}</p>
              <p className="text-sm sm:text-base">{exp.duration}</p>
            </div>
          </div>
          <p className="mt-4 text-base sm:text-lg">{exp.description}</p>
          <div className="mt-4">
            <span className="text-orange-400 font-bold">Skills: </span>
            {exp.skills.map((skill, idx) => (
              <span key={idx} className="text-lime-300 ml-2">
                {skill}
                {idx < exp.skills.length - 1 && ", "}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-gray-200 text-lg font-semibold">Projects:</h3>
            <ul className="text-gray-300 mt-2 list-disc pl-5">
              {exp.projects.map((project, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
