import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <div className="flex items-center flex-col pt-12 pb-6 font-titleFont">
        <p className="text-sm text-red-700 tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-4xl font-bold mt-1">Professional Skills</h2>
      </div>
      <div className="mt-14 w-full flex gap-20">
        <div className="w-1/3 flex flex-col gap-y-7">
          <div>
            <p className="text-md tracking-tight uppercase font-medium">html</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">css</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              bootstrap
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              tailwind
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">git</p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-y-7">
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              javascript
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              react
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              bootstrap
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              redux
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              redux toolkit
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-y-7">
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              material ui
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              ant design
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              formik
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              chakra ui
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
          <div>
            <p className="text-md tracking-tight uppercase font-medium">
              PrimeReact
            </p>
            <span className="w-full h-2 inline-flex rounded-md mt-2">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0"></span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
