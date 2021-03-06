import { m } from "framer-motion";
import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaFileAlt } from "react-icons/fa";
import { useMobile } from "../hooks/useMobile";

const HomePage = () => {
  const isMobile = useMobile();

  return (
    <div className="homepage container">
      <div className="homepage-content">
        <m.h2 initial={{ x: "-20vw" }} animate={{ x: 0 }}>
          CODE MATTER.
        </m.h2>
        <m.div
          className="homepage-socials"
          initial={{ x: "20vw" }}
          animate={{ x: 0 }}
        >
          {/* <a href="/CV_ALEX_EN.pdf" download="CV-Alex-Caissy">
            <FaFileAlt size={50} />
          </a> */}
          <a href="https://www.linkedin.com/in/alex-caissy-264ba71b1">
            <FaLinkedinIn size={50} />
          </a>
          <a href="https://github.com/code-matter/code-matter">
            <FaGithub size={50} />
          </a>
        </m.div>
      </div>
      <m.hr initial={{ width: 0 }} animate={{ width: "100%" }} />
      <m.p
        animate={{ y: [-5, 0, -5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        CURRENTLY UNDER CONSTRUCTION
      </m.p>
    </div>
  );
};

export default HomePage;
