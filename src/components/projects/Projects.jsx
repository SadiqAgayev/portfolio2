import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard
          title="E-commerce Website"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectCard
          title="CHATTING APP"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectCard
          title="CHATTING APP"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectCard
          title="E-commerce Website"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum color sit amet consectetur adipisicing elit.
        Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
