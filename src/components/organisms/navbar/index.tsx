import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentPath = useMemo(() => {
    console.log("Location:", location);
    return location.pathname.split("/")[1] || "home";
  }, [location.pathname]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const logoVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="burger" onClick={toggleMenu}>
        <motion.div
          className="line"
          animate={isOpen ? { rotate: 45, y: 0, x: 0 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="line"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="line"
          animate={isOpen ? { rotate: -45, y: 0, x: 0 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        className="menu"
      >
        <motion.div
          className="logo-container"
          animate={isOpen ? "open" : "closed"}
          variants={logoVariants}
          transition={{ delay: 0.8 }}
        >
          <img src={logo} alt="" />
        </motion.div>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={currentPath === "new-landing3" ? "selected" : ""}
          >
            <Link to="/new-landing3" onClick={toggleMenu}>
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={currentPath === "about" ? "selected" : ""}
          >
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={currentPath === "contact" ? "selected" : ""}
          >
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Menu;
