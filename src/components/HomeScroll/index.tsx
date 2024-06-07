import React from 'react';
import { ReactNode } from 'react';

interface HomeScrollProps {
  children: ReactNode;
}

export function HomeScroll({ children }: HomeScrollProps) {
  return (
    <>
      <p>HomeScroll</p>
      {children}
    </>
  );
}
