import React from "react";
import Title from "../layouts/Title";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black px-6 mdl:px-10 lg:px-16"
    >
      <div className="flex justify-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col gap-6 lgl:flex-row justify-between">
          <LeftContact />
          <RightContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
