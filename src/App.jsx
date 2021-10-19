import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";

function App() {
  const { scrollYProgress } = useViewportScroll();
  // first value is where it starts from (scroll number)
  // second value is the same as the first one
  // third value is where the animation ends
  // all in all, first array are the positions, and the second one are sizes
  const scale = useTransform(scrollYProgress, [0.73, 0.73, 0.8], [4, 4, 0.5]); // Values from the second array: 1. size during coresponding value of the first array (position), until the second value
  const y = useTransform(scrollYProgress, [0.73, 0.73, 0.8], [0, 35, 35]);
  const rotate = useTransform(
    scrollYProgress,
    [0.73, 0.73, 0.8],
    [180, 180, 360]
  );

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <div className='iPhone'>
        <motion.img
          src='./iPhone.webp'
          alt=''
          style={{ scale: scale, y: y, rotate: 90 }}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
        />
      </div>

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
