import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";
import { Slider } from "./Components/Slider";
import { url } from "inspector";

type TSelected = {
  id: any;
  subtitle: any;
  title: any;
} | null;

function App() {
  const { scrollYProgress } = useViewportScroll();
  // first value is where it starts from (scroll number)
  // second value is the same as the first one
  // third value is where the animation ends
  // all in all, first array are the positions, and the second one are sizes
  const scale = useTransform(scrollYProgress, [0.64, 0.64, 0.74], [4, 4, 0.5]); // Values from the second array: 1. size during coresponding value of the first array (position), until the second value
  const y = useTransform(scrollYProgress, [0.64, 0.64, 0.74], [0, 255, 255]);
  const rotate = useTransform(
    scrollYProgress,
    [0.73, 0.73, 0.8],
    [180, 180, 360]
  );

  const [selected, setSelected] = useState<TSelected>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const items = [
    { id: 1, title: "one", subtitle: "one" },
    { id: 2, title: "two", subtitle: "two" },
    { id: 3, title: "three", subtitle: "three" },
    { id: 4, title: "three", subtitle: "three" },
    { id: 5, title: "three", subtitle: "three" },
    { id: 6, title: "three", subtitle: "three" },
  ];

  return (
    <div className='App'>
      <AnimatePresence>
        {visible && (
          <motion.header
            className='App-header'
            transition={{ duration: 1 }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}>
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
          </motion.header>
        )}
      </AnimatePresence>
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

      <div className='cardsDiv'>
        <AnimateSharedLayout type='crossfade'>
          {items.map((item: any) => (
            <motion.div
              className='card'
              animate={{ opacity: 1 }}
              layoutId={item.id}
              onClick={() => setSelected(item)}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}

          <AnimatePresence>
            {selected && (
              <motion.div
                className='cardSelectedWrapper'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <motion.div layoutId={selected.id} className='cardSelected'>
                  <motion.h5>{selected.subtitle}</motion.h5>
                  <motion.h2>{selected.title}</motion.h2>
                  <motion.button onClick={() => setSelected(null)} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
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
      <Slider />
    </div>
  );
}

export default App;
