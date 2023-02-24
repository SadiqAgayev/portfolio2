import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div>
      <div className="flex items-center flex-col pt-12 pb-6 font-titleFont">
        <p className="text-sm text-red-700 tracking-[4px]">2007-2024</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-1">Education Quality</h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mt-14 border-r-[3px] border-r-white border-opacity-80 flex flex-col gap-10">
          <ResumeCard
            direction="left"
            title="Azerbaijan Technical University"
            subTitle="Master ( 2022 - 2024 )"
            result="present"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <div className="h-[200px] hidden lg:block"></div>
          <ResumeCard
            direction="left"
            title="Private Tutor's Course"
            subTitle="Frontend Developer ( 2019 - 2020 )"
            result="95+"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
        <div className="w-full lg:w-1/2 mt-14 border-l-[3px] border-l-white border-opacity-80 flex flex-col gap-10">
          <div className="h-[200px] hidden lg:block"></div>
          <ResumeCard
            direction="right"
            title="Baku Engineering University"
            subTitle="Bachelor ( 2018 - 2022 )"
            result="90"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <div className="h-[200px] hidden lg:block"></div>
          <ResumeCard
            direction="right"
            title="Zarifa Aliyeva High School"
            subTitle="High School ( 2015 - 2018 )"
            result="4.8"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
