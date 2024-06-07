import React from 'react';
import './scroll.css'
import { items } from '../../resource/utils/data.ts'
import Vector from '../../resource/images/Vector.png'
import { motion } from "framer-motion"





function HomeScroll() {

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



  return (
    <>
      <div className='hero-buttons'>
        <div className='hero-button-title'>
          <span className='hero-button' onClick={scrollLeft} >
            <img src={Vector} alt="arrow" />
          </span>
          <p>All Games</p>
        </div>
        <span className='hero-button rt' onClick={scrollRight} >
          <img src={Vector} alt="arrow" />
        </span>
      </div>


      <div className="scroll-container">
        <div className="horizontal-scroll">
          <ul className="scroll-list">
            {items.map(item => (
              <li key={item.id} className="scroll-item">
                <img src={item.imageUrl} alt={item.title} className="item-image" />
                <h3 className="item-title">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>




  );
}

export default HomeScroll