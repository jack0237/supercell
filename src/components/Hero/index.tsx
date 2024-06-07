import React from 'react';
import './hero.css'
import Sup from '../../resource/images/hey.png'
import  HomeScroll  from '../../components/HomeScroll/index.tsx';

import { motion } from "framer-motion"



 function Hero() {
  return (
    <>
      <div className='hero' >

        <h1>supercell</h1>
        <img className='hero-img' src={Sup} alt="supercell" />

        {/* <div className='hero-buttons'>
          <div className='hero-button-title'>
            <span className='hero-button' >
              <img src={Vector} alt="arrow" />
            </span>
            <p>All Games</p>
          </div>
          <span className='hero-button rt' >
            <img src={Vector} alt="arrow" />
          </span>
        </div> */}

        
          <HomeScroll/>
       
      </div>
    </>
  );
}

export default Hero