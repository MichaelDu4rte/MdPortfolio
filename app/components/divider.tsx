"use client";

import { motion } from "framer-motion";
import React from "react";

function Dividir() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-purple-200 my-24 h-16 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
}

export default Dividir;
