import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <hr />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="footer-bottom flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center p-6"
      >
        <div>
          <div className="footer-bottom-left">
          © 2025 Amardeep Prajapti. All rights reserved.
        </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom-right flex gap-6"
        >
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
