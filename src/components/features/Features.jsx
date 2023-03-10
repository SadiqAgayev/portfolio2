import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { FaBars, FaGlobe, FaMobile } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b border-b-white px-6 mdl:px-10 lg:px-16"
    >
      <div className="flex justify-center text-center">
        <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
