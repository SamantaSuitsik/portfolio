import styles from "@/styles/title.module.css"
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Title() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const newY = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <>
            <motion.div ref={container} className={styles.container}>
                <motion.div style={{y: newY}} className={styles.title-container}>
                    <div className={styles.title}>
                        <div className={styles.oneLine}>
                            <h1 className={styles.software}>Software</h1>
                            <h1 className={styles.dash}>-</h1>
                        </div>
                        <h1 className={styles.dev}>developer</h1>
                    </div>
                </motion.div>
            
                <div className="image-container">
                    <img style={{y: newY}} className={styles.picture}
                    src="codepic.png" 
                    alt="Abstract picture of code"/>
                </div>
                <div className="image-container">
                    <img className={styles.picture}
                    src="codepic.png" 
                    alt="Abstract picture of code"/>
                </div>
                <div className="image-container">
                    <img className={styles.picture}
                    src="codepic.png" 
                    alt="Abstract picture of code"/>
                </div>
            </motion.div>
            
        </>
        
    );
}