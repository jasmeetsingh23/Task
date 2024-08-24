"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleSkill";
import skillsData from "./skillsData";
import React, { useState, useEffect } from "react";

const Skills = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [experienceYears, setExperienceYears] = useState(currentYear - 2020); // Assuming you started in 2020

  useEffect(() => {
    // Calculate the years of experience dynamically
    const calculateExperience = () => {
      const newYear = new Date().getFullYear();
      setExperienceYears(newYear - 2020); // Assuming you started in 2020
      setCurrentYear(newYear);
    };

    // Update the experience on January 1st each year
    const interval = setInterval(() => {
      const today = new Date();
      if (today.getMonth() === 0 && today.getDate() === 1) {
        calculateExperience();
      }
    }, 1000 * 60 * 60 * 24); // Check every day

    // Initial calculation
    calculateExperience();

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section id="skills" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Skills" center />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skillsData.map((skill) => (
                <div key={skill.id}>
                  <SingleFeature skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
