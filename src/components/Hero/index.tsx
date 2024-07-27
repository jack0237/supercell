import React from 'react';
import './hero.css';
import Sup from '../../resource/images/hey.png';
import HomeScroll from '../../components/HomeScroll/index.tsx';
import { motion } from "framer-motion";

const letterAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 }
};

const imageAnimation = {
  initial: { x: -250, opacity: 1 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 50, damping: 15, duration: 5, delay: 0.6 }
};

function Hero() {
  const title = "supercell";
  return (
    <div className='hero'>
      <h1>
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={letterAnimation.initial}
            animate={letterAnimation.animate}
            transition={{ ...letterAnimation.transition, delay: index * 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <motion.img
        className='hero-img'
        src={Sup}
        alt="supercell"
        initial={imageAnimation.initial}
        animate={imageAnimation.animate}
        transition={imageAnimation.transition}
      />
      <HomeScroll />
    </div>
  );
}

export default Hero;
