import styles from "@/styles/title.module.css"
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroductionText from "./IntroductionText";
import Picture from "./Picture";

export default function Title() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const newY = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <>
            <motion.div ref={container} className={styles.container}>
                <motion.div className={styles.title-container}>
                    <div className={styles.title}>
                        <div className={styles.oneLine}>
                            <span className={styles.software}>Soft</span>
                            <span className={styles.software}>ware</span>
                        </div>
                        <span className={styles.dev}>dev</span>
                        <span className={styles.dev}>eloper</span>
                    </div>
                </motion.div>
            </motion.div>
        </>
        
    );
}