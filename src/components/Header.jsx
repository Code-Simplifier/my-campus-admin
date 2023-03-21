import React from "react";
import { rubik, raj_bold, mont } from "@/styles/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "./modules/Varients";
import { FcPrivacy, FcContacts } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import Popup from "reactjs-popup";

function Header() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      viewport={{ once: true }}
      initial="hidden"
      animate="show"
      className="text-center m-5 lg:mx-8 uppercase tracking-widest text-2xl lg:text-[50px] flex flex-row-reverse items-center justify-between"
      style={{ fontFamily: rubik.style.fontFamily }}
      id="home"
    >
      <Popup
        modal
        trigger={
          <motion.div
            variants={fadeIn("left", 0.5)}
            viewport={{ once: true }}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer text-xl lg:text-4xl"
          >
            <FcPrivacy />
          </motion.div>
        }
      >
        {(close) => (
          <div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="modal-clamp bg-slate-200 text-black p-2 rounded-lg"
            >
              <div
                style={{ fontFamily: rubik.style.fontFamily }}
                className="text-3xl tracking-wider uppercase mt-4 flex justify-between"
              >
                <h1>Privacy Policy</h1>
                <RxCross2
                  onClick={close}
                  color="grey"
                  className="cursor-pointer"
                />
              </div>
              <div
                style={{ fontFamily: mont.style.fontFamily }}
                className="text-justify py-3 tracking-tight"
              >
                At My Campus Admin, we take data privacy seriously and are
                committed to protecting the personal information of our users.
                This privacy policy outlines the types of personal information
                we collect, how we use it, and how we protect it.
              </div>
              <div
                style={{ fontFamily: mont.style.fontFamily }}
                className="text-justify flex flex-col py-3 tracking-tight"
              >
                <span className="flowGrad uppercase tracking-wide text-center text-xl mb-2">
                  Information collected
                </span>
                <ul style={{ listStyle: "disc" }}>
                  <li>Name, email address, and other contact information.</li>
                  <li>
                    Student ID, enrollment status, and academic information.
                  </li>
                  <li>
                    Financial information related to fee payment and
                    transactions.
                  </li>
                </ul>
              </div>
              <div
                style={{ fontFamily: mont.style.fontFamily }}
                className="text-justify flex flex-col py-3 tracking-tight"
              >
                <span className="flowGrad uppercase tracking-wide text-center text-xl mb-2">
                  information usage
                </span>
                <ul style={{ listStyle: "disc" }}>
                  <li>To provide and improve our services to users.</li>
                  <li>
                    To communicate with users about account information,
                    software updates, and other important news.
                  </li>
                  <li>
                    To personalize the user experience and provide relevant
                    content and recommendations.
                  </li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>
              </div>
              <div
                style={{ fontFamily: mont.style.fontFamily }}
                className="text-justify flex flex-col py-3 tracking-tight"
              >
                <span className="flowGrad uppercase tracking-wide text-center text-xl mb-2">
                  information encryption
                </span>
                <ul style={{ listStyle: "disc" }}>
                  <li>
                    Encryption of sensitive information during transmission.
                  </li>
                  <li>Access controls and restricted user permissions.</li>
                  <li>
                    Regular security audits and vulnerability assessments.
                  </li>
                  <li>Disaster recovery and backup procedures.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </Popup>

      <div>
        My campus <span className="flowGrad">admin</span>
      </div>
    </motion.div>
  );
}

export default Header;
