import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const resumeTabs = ["Education", "Professional Skills", "Experience"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resume" className="w-full py-20 border-b border-b-white px-6 mdl:px-10 lg:px-16">
      <div className="flex justify-center text-center">
        <Title title="3+ years of experience" des="My Resume" />
      </div>
      <div>
        <ul className="w-full bg-white bg-opacity-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {resumeTabs.map((li, i) => (
            <li
              key={i}
              className={`${i === activeTab ? "border-red-700 border rounded-sm" : "border border-transparent"} resumLi`}
              onClick={() => {
                setActiveTab(i);
              }}
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
      {[<Education />, <Skills />, <Experience />].map(
        (tab, i) => i === activeTab && tab
      )}
    </section>
  );
};

export default Resume;
