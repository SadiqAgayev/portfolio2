import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div>
      <div className="flex items-center flex-col pt-12 pb-6 font-titleFont">
        <p className="text-sm text-red-700 tracking-[4px]">2007-2024</p>
        <h2 className="text-4xl font-bold mt-1">Education Quality</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-14 border-r-[3px] border-r-white bg-opacity-20 flex flex-col gap-10">
          <ResumeCard
            direction="left"
            title="Lorem Ipsum University"
            subTitle="Master ( 2020 - 2022 )"
            result="present"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <div className="h-[200px]"></div>
          <ResumeCard
            direction="left"
            title="Lorem Ipsum Course"
            subTitle="Frontend Developer ( 2018 - 2019 )"
            result="95+"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
        <div className="w-1/2 mt-14 border-l-[3px] border-l-white bg-opacity-20 flex flex-col gap-10">
          <div className="h-[200px]"></div>
          <ResumeCard
            direction="right"
            title="Lorem Ipsum University"
            subTitle="Bachelor ( 2016 - 2020 )"
            result="90"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <div className="h-[200px]"></div>
          <ResumeCard
            direction="right"
            title="Lorem Ipsum High School"
            subTitle="High School ( 2013 - 2016 )"
            result="4.8"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
