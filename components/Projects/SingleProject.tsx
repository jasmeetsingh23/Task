import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, image,live, github } = project;
  return (
    <div className="p-6 bg-white shadow-one dark:bg-dark/40 overflow-hidden rounded-2xl text-center hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div
        className="wow fadeInUp relative overflow-hidden"
        data-wow-delay=".1s"
      >
        <div className="relative block h-64 w-full">
          <Image src={image} alt="image" fill className="rounded-3xl border-2" />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-2xl mb-4">
            {title}
          </h3>
          <div className="flex justify-center space-x-6">
            <Link
              href={github} // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 hover:bg-blue-600 text-black dark:text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 border-2 w-32"
            >
              GitHub
            </Link>
            <Link
              href={live} // Replace with your Live link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-black dark:text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 border-2 w-32"
            >
              Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
