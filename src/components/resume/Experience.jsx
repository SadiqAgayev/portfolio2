import React from "react";
import ResumeCard from "./ResumeCard";

const descriptions = {
  job1: {
    title: "Lorem Ipsum",
    subTitle: "Frontend Developer ( 02.2018 - Present )",
    result: "present",
    des: [
      "Optimization of functionalities on existing sites",
      "Participation in writing sites from scratch",
      "Testing the website for usability",
    ],
  },
  job2: {
    title: "Lorem Ipsum",
    subTitle: "Freelance ( 2018 - Present )",
    result: "present",
    des: [
      "HTML, CSS, Bootstrap, Tailwind, JS",
      "React, React Hooks, Redux, Redux Toolkit",
      "Git & GitHub",
    ],
  },
};

const Experience = () => {
  return (
    <div>
      <div className="flex items-center flex-col pt-12 pb-6 font-titleFont">
        <p className="text-sm text-red-700 tracking-[4px]">
          2020 - Present
        </p>
        <h2 className="text-4xl font-bold mt-1">Experience</h2>
      </div>
      <div className="flex gap-x-20">
        {Object.keys(descriptions).length ? (
          <div className="w-full mt-14 border-opacity-30 flex gap-20">
            {Object.values(descriptions).map((value) => (
              <div className="w-full border-l-[6px] border-l-white">
                <ResumeCard
                  direction="right"
                  title={value.title}
                  subTitle={value.subTitle}
                  result={value.result}
                  des={value.des}
                  exp={true}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Experience;
