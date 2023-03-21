import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChild, staggerParent } from "./modules/Varients";
import { mont_bold } from "@/styles/fonts";

import Image from "next/image";

function Home() {
  return (
    <div
      style={{ fontFamily: mont_bold.style.fontFamily }}
      className="mt-20 grid grid-cols-1 lg:grid-cols-2 mx-2 place-items-center mb-60 h-fit"
    >
      <motion.div
        variants={fadeIn("right", 2)}
        initial="hidden"
        animate="show"
        className="mx-5"
      >
        <Image src={"/hero2.png"} width={570} height={200} />
      </motion.div>
      <motion.div
        variants={staggerParent(0.8)}
        initial="hidden"
        animate="show"
        className="text-center text-[40px] mt-10 lg:mt-0 lg:text-[60px]"
      >
        <motion.div variants={staggerChild(0.5)}>
          An Online <span className="flowGrad">Solution</span>
        </motion.div>
        <motion.div variants={staggerChild(0.5)}>
          for <span className="flowGrad">Resource</span> Planning
        </motion.div>
        <motion.div variants={staggerChild(0.5)}>
          and <span className="flowGrad">Student</span> Management.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
