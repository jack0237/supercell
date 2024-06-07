import React from 'react';
import { ReactNode } from 'react';
import './hero.css'
import Sup from '../../resource/images/hey.png'
import Vector from '../../resource/images/Vector.png'
import { HomeScroll } from '../../components/HomeScroll/index.tsx';

interface HeroProps {
  children: ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <>
      <div className='hero' >

        <h1>supercell</h1>
        <img className='hero-img' src={Sup} alt="supercell" />

        <div className='hero-buttons'>
          <div className='hero-button-title'>
            <span className='hero-button' >
              <img src={Vector} alt="arrow" />
            </span>
            <p>All Games</p>
          </div>
          <span className='hero-button rt' >
            <img src={Vector} alt="arrow" />
          </span>
        </div>

        <>
          <HomeScroll>
            {children}
          </HomeScroll>
        </>
      </div>
    </>
  );
}
