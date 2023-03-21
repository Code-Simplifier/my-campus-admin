import React from "react";
import { motion } from "framer-motion";
import { mont, raj, raj_bold, rubik, rubik_bold } from "@/styles/fonts";
import { fadeIn, staggerChild, staggerParent } from "./modules/Varients";
import { FaRupeeSign } from "react-icons/fa";
import Image from "next/image";
import Card from "./modules/Card";

function Features() {
  return (
    <div id="features" className="h-fit mb-40">
      <motion.div
        style={{ fontFamily: raj.style.fontFamily }}
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", 0.3)}
        className="uppercase text-black tracking-wider text-center text-[50px] mb-4"
      >
        <span>features</span>
      </motion.div>
      <motion.div
        variants={staggerParent(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 place-items-center lg:grid-cols-6 mx-5 gap-4"
      >
        <Card
          title={"admission management"}
          props={
            <Image
              src={"/graduated.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"fee management"}
          props={
            <Image
              src={"/rupee.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Mentoring"}
          props={
            <Image
              src={"/mentorship.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Attendance"}
          props={
            <Image
              src={"/immigration.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Time table"}
          props={
            <Image
              src={"/worksheet.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Examination"}
          props={
            <Image
              src={"/exam.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Library"}
          props={
            <Image
              src={"/bookshelf.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"HR Module"}
          props={
            <Image
              src={"/target.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"User Authentication"}
          props={
            <Image
              src={"/permission.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"report & analysis"}
          props={
            <Image
              src={"/report.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Activity"}
          props={
            <Image
              src={"/mobile.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
        <Card
          title={"Notification"}
          props={
            <Image
              src={"/notification.png"}
              width={180}
              height={200}
              className="border-b border-slate-500 pb-2"
            />
          }
        />
      </motion.div>
    </div>
  );
}

export default Features;
