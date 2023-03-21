import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { staggerChild } from "./Varients";

function Accordation({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        variants={staggerChild(0.3)}
        viewport={{ once: true }}
        onClick={() => setShow(!show)}
        className="bg-white border-2 rounded-xl"
      >
        <motion.div layout="position" className="accHeader">
          <span>{question}</span>
          {show ? <BsChevronUp /> : <BsChevronDown />}
        </motion.div>
        {show && (
          <motion.div className="p-4 border-t">
            <p>{answer}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Accordation;
