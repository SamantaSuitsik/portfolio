import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "@/styles/box.module.css"

const max = 350;
const min = 30;

const Box = ({ width, color }) => (

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    style={{
      height: '20px',
      width: width,
      borderRadius: '9px',
      backgroundColor: color,
      marginBottom: '0.3cm'
    }}
    
  />
);

export default function BoxContainer() {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxes(prev => {
        const newBox = {
            id: Date.now(),
            width: `${getRandomInt(min, max)}px`,
            color: getRandomColor()
        };

        if (prev.length >= 5) {
          return [...prev.slice(1), newBox];
        }
        return [...prev, newBox];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function getRandomColor() {
    const colors = ["lightskyblue", "lavender", "plum", "", "darkseagreen", "darksalmon"]
    const valitud = colors[getRandomInt(0, colors.length)];
    console.log("valitud "  + valitud);
    return valitud;
  }

  return (
    <div className={styles.container}>
        <div className={styles.blocks}>
        <AnimatePresence>
            {boxes.map(box => (
            <Box key={box.id} width={box.width} color={box.color} />
            ))}
        </AnimatePresence>
        </div>
    </div>
  );
};

