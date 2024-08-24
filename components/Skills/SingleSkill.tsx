import { Skill } from "@/types/skill";
import Image from "next/image";

const SingleSkill = ({ skill }: { skill: Skill }) => {
  const { icon, title, level } = skill;

  return (
    <div className="w-full flex items-center">
      <div className="w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <Image src={icon} alt="nextjs" width={50} height={50} />
      </div>
      <div className="ml-4">
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {level}
        </p>
      </div>
    </div>
  );
};

export default SingleSkill;
