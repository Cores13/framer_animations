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
  const scale = useTransform(scrollYProgress, [0, 0.2], [4, 0.6]);
  // const scale = useTransform(scrollYProgress, [0, -1], [3, 1]);
  const y = useTransform(scrollYProgress, [0, -1.5, -2.5], [0, 1.5, 1.5]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    console.log(scrollYProgress);
    console.log(scale);
    console.log(y);
  }, [scrollYProgress, y, scale]);

  useEffect(() => {
    scale.onChange((v) => setIsComplete(v >= 1));
  }, [scale]);

  return (
    <div className='App'>
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
