import React from "react";
import { motion } from "framer-motion";
import { staggerChild } from "./Varients";
import { mont } from "@/styles/fonts";

function Card({ title, props }) {
  return (
    <motion.div
      variants={staggerChild(0.5)}
      whileHover={{ scale: 1.07 }}
      viewport={{ once: true }}
      className="card"
    >
      {props}
      <span
        className="capitalize"
        style={{ fontFamily: mont.style.fontFamily }}
      >
        {title}
      </span>
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        className="cardButton"
      >
        details
      </motion.button>
    </motion.div>
  );
}

export default Card;
