import React, { useState } from 'react';
import './scroll.css';
import { items } from '../../resource/utils/data.ts';
import Vector from '../../resource/images/Vector.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function HomeScroll() {
  const [isListVisible, setIsListVisible] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const scrollLeft = () => {
    const container = document.querySelector('.horizontal-scroll');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector('.horizontal-scroll');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const letterAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8 }
  };

  // Trigger animation when the list is fully visible
  if (inView && !isListVisible) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.5 }
    });
    setIsListVisible(true);
  }

  return (
    <>
      <div className='hero-buttons'>
        <div className='hero-button-title'>
          <span className='hero-button' onClick={scrollLeft}>
            <img src={Vector} alt="arrow" />
          </span>
          <p>All Games</p>
        </div>
        <span className='hero-button rt' onClick={scrollRight}>
          <img src={Vector} alt="arrow" />
        </span>
      </div>

      <div className="scroll-container">
        <div className="horizontal-scroll">
          <motion.ul
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            className="scroll-list"
          >
            {items.map((item, index) => (
              <motion.li key={item.id} className="scroll-item"
                initial={letterAnimation.initial}
                animate={letterAnimation.animate}
                transition={{ ...letterAnimation.transition, delay: index * 0.4 }}
              >
                <img src={item.imageUrl} alt={item.title} className="item-image" />
                <h3 className="item-title">{item.title}</h3>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
}

export default HomeScroll;
