import React, { useState } from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import { MdFormatQuote } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 15,
            marginTop: "15px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                fontWeight: "bold",
                background: "#ff014f",
                cursor: "pointer",
              }
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                fontWeight: "bold",
                background: "gray",
                cursor: "pointer",
              }
        }
      >
        {/* {i + 1} */}
      </div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-white px-6 mdl:px-10 lg:px-16"
    >
      <div className="flex justify-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-full lgl:h-[500px] flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col justify-center gap-8 p-8 rounded-lg">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg"
                  src={testimonial1}
                  alt="testimonial1"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <MdFormatQuote
                  className="w-[20%] lgl:w-[30%]"
                  style={{ color: "#ff014f" }}
                  size={100}
                />
                <div className="w-full h-[75%] px-[30px] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero aliquam doloribus quidem, necessitatibus officiis
                    repellendus natus harum asperiores recusandae quaerat
                    repellat sunt autem, nesciunt ut dignissimos cupiditate
                    corporis, doloremque nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full lgl:h-[500px] flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col justify-center gap-8 p-8 rounded-lg">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg"
                  src={testimonial2}
                  alt="testimonial1"
                />
                <div>
                  <p className="text-xs uppercase text-red-700 tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <MdFormatQuote
                  className="w-[20%] lgl:w-[30%]"
                  style={{ color: "#ff014f" }}
                  size={100}
                />
                <div className="w-full h-[75%] px-[30px] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero aliquam doloribus quidem, necessitatibus officiis
                    repellendus natus harum asperiores recusandae quaerat
                    repellat sunt autem, nesciunt ut dignissimos cupiditate
                    corporis, doloremque nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-full lgl:h-[500px] flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col md:flex-row lgl:flex-col justify-center gap-8 p-8 rounded-lg">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg"
                  src={testimonial3}
                  alt="testimonial1"
                />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <MdFormatQuote
                  className="w-[20%] lgl:w-[30%]"
                  style={{ color: "#ff014f" }}
                  size={100}
                />
                <div className="w-full h-[75%] px-[30px] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2023 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero aliquam doloribus quidem, necessitatibus officiis
                    repellendus natus harum asperiores recusandae quaerat
                    repellat sunt autem, nesciunt ut dignissimos cupiditate
                    corporis, doloremque nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
