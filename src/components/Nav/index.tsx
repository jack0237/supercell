import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './nav.css';
import Logo from '../../resource/images/Logo.png';
import Menu from '../../resource/images/Menu.png';

interface NavProps {
  children?: ReactNode;
}

export function Nav({ children }: NavProps) {
  const navItems = ["Games", "About Us", "Menu"];

  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <motion.img
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: 0.2
          }}
          src={Logo}
          alt="Logo"
        />
        <motion.input
          type="search"
          name="search"
          placeholder="Search Game…"
          aria-label="Search through site content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: 0.4
          }}
        />
      </div>

      <ul className='nav-links'>
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 1,
              delay: index * 0.2 + 0.6  // Progressive delay
            }}
          >
            {item === "Menu" ? (
              <>
                {item} <img src={Menu} alt="menu" />
              </>
            ) : (
              item
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
