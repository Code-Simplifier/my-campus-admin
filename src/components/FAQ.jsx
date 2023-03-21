import React from "react";

import Accordation from "./modules/Accordation";
import { motion } from "framer-motion";
import { raj } from "@/styles/fonts";
import { staggerParent, fadeIn } from "./modules/Varients";

function FAQ() {
  return (
    <div className="mx-10 ">
      <motion.div
        style={{ fontFamily: raj.style.fontFamily }}
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", 0.3)}
        className="uppercase text-black tracking-wider text-center text-[50px] mb-4"
        id="faq"
      >
        <span>frequently asked questions</span>
      </motion.div>
      <motion.div
        variants={staggerParent(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-y-4"
      >
        <Accordation
          question={"What is My Campus Admin?"}
          answer={
            "My Campus Admin is a comprehensive ERP software designed specifically for higher education institutions in India. It helps streamline campus operations and facilitates efficient management of student enrollment, fee management, attendance, examinations, library, HR, and more."
          }
        />
        <Accordation
          question={
            "Is My Campus Admin customizable to my institution's needs?"
          }
          answer={
            "Yes, My Campus Admin is fully customizable to meet your institution's specific needs and requirements. Our team can work with you to tailor the software to your campus operations and provide ongoing support to ensure optimal performance."
          }
        />
        <Accordation
          question={"How does My Campus Admin benefit my institution?"}
          answer={
            "My Campus Admin offers a wide range of benefits to educational institutions, including improved efficiency, enhanced transparency, and better student engagement. With our software, you can automate processes, reduce manual errors, and provide a seamless experience for students, faculty, and staff."
          }
        />
        <Accordation
          question={"Is My Campus Admin user-friendly?"}
          answer={
            "Yes, My Campus Admin is designed to be user-friendly and intuitive, with a clean and simple interface. We also provide training and support to ensure that users can navigate the software with ease."
          }
        />
        <Accordation
          question={"Can My Campus Admin integrate with other software?"}
          answer={
            "Yes, My Campus Admin can integrate with other software and applications, such as accounting software, learning management systems, and student information systems. Our team can work with you to ensure seamless integration and optimize performance."
          }
        />
        <Accordation
          question={"How secure is My Campus Admin?"}
          answer={
            "My Campus Admin is built with robust security features to ensure the safety and confidentiality of your data. We use industry-standard encryption, access controls, and other security measures to protect your information from unauthorized access, theft, or loss."
          }
        />
        <Accordation
          question={"What kind of training is provided with My Campus Admin?"}
          answer={
            "We provide comprehensive training to all users of My Campus Admin, including administrators, faculty, staff, and students. This includes online tutorials, user manuals, and live support sessions to ensure that everyone is familiar with the software and can use it effectively."
          }
        />
        <Accordation
          question={"How does My Campus Admin help with student engagement?"}
          answer={
            "My Campus Admin provides a platform for students to engage with their campus and stay informed about important events and activities. With features like attendance tracking, online library access, and personalized notifications, students can stay connected with their campus and access important resources easily."
          }
        />
        <Accordation
          question={
            "Is My Campus Admin suitable for all types of educational institutions?"
          }
          answer={
            "Yes, My Campus Admin is designed to meet the needs of all types of higher education institutions, including colleges, universities, and vocational schools. We can customize the software to fit the unique requirements of your institution and provide ongoing support to ensure optimal performance."
          }
        />
        <Accordation
          question={"What kind of support does My Campus Admin offer?"}
          answer={
            "My Campus Admin offers comprehensive support, including training, implementation, and ongoing maintenance. Our team is available to answer your questions and provide assistance whenever you need it. We also provide regular updates and enhancements to ensure that our software remains up-to-date and optimized for your needs."
          }
        />
        <Accordation
          question={"Can My Campus Admin be accessed remotely?"}
          answer={
            "es, My Campus Admin is a web-based software that can be accessed from anywhere with an internet connection. This allows students, faculty, and staff to access the software and perform tasks from any location, making it easier to manage campus operations."
          }
        />
        <Accordation
          question={"How does My Campus Admin handle student data privacy?"}
          answer={
            "My Campus Admin takes data privacy seriously and complies with all relevant data protection regulations. We use best practices for data security, including encryption, backups, and access controls, to protect student data from unauthorized access or breaches."
          }
        />
      </motion.div>
    </div>
  );
}

export default FAQ;
