import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center backdrop-blur-md justify-center z-[999]">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>
      <div className="bg-white w-5/6 dark:bg-primary/20 dark:bg-opacity-20 bg-opacity-80 p-4 md:p-8 rounded-3xl z-10 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 mr-4 mt-2 text-2xl transition"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <div className="flex flex-col md:flex-row justify-center mb-4 p-2">
  <div className="md:w-1/3 md:mr-4">
    <Image src={project.image} alt={project.title} height={160} width={256} className="rounded-lg" />
  </div>
  <div className="md:w-2/3 mt-2">
    <h1 className=' text-2xl font-bold'>About Project</h1>
    <p className="text-sm md:text-lg text-gray-700 mt-2 h-20 md:h-24 overflow-auto thin-scrollbar">{project.description.desc}</p>
    <h1 className=' text-xl mt-4 font-bold'>Techologies Used</h1>
    <div className="flex flex-wrap mt-2 h-20 md:h-24 overflow-auto thin-scrollbar">
  {project.description.lang.split(',').map((segment, index) => (
    <span className="bg-white text-black text-sm md:text-lg rounded-full px-2 py-1 m-1 h-8" key={index}>
      {segment.trim()}
    </span>
  ))}
</div>

  </div>
</div>

        <div className="flex justify-center mt-4 space-x-4">
          <Link href={project.github} target="_blank" passHref>
            <div className="bg-gray-200 text-gray-800 hover:bg-gray-300 border border-gray-300 hover:border-gray-400 py-2 px-4 rounded-full transition duration-300 ease-in-out w-20 sm:w-32 text-center">
              GitHub
            </div>
          </Link>
          <Link href={project.live} target="_blank" passHref>
            <div className="bg-green-200 text-green-800 hover:bg-green-300 border border-green-300 hover:border-green-400 py-2 px-4 rounded-full transition duration-300 ease-in-out w-20 md:w-32 text-center">
              Live
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
