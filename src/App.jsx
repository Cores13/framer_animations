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
  const scale = useTransform(scrollYProgress, [0.65, 0.65, 0.755], [4, 4, 0.6]);
  // const scale = useTransform(scrollYProgress, [0, -1], [2, 1]);
  const y = useTransform(scrollYProgress, [0, -0.5, -1.5], [0, 0.5, 0.5]);

  useEffect(() => {
    console.log(scale);
  }, [scale, scrollYProgress]);

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
      <motion.div className='iPhone' style={{ scale: scale, y: y }}>
        <img
          src='./iPhone.webp'
          alt=''
          className='iPhone'
          style={{ scale: scale, y: y }}
        />
      </motion.div>

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
