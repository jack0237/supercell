import React from 'react';
import { ReactNode } from 'react';
import './nav.css'
import Logo from '../../resource/images/Logo.png'
import Menu from '../../resource/images/Menu.png'

interface NavProps {
  children: ReactNode;
}

export function Nav({ children }: NavProps) {
  return (

    <nav className='nav' >
      <div className='nav-logo'>
        <img src={Logo} alt="Logo" />
        <input type="search" name="search" id="" placeholder="Search Game…" aria-label="Search through site content" />
      </div>

      
        <ul className='nav-links' >
          <li>Games</li>
          <li>About Us</li>
          <li>Menu <img src={Menu} alt="logo" /> </li>
        </ul>
      
    </nav>

  );
}
