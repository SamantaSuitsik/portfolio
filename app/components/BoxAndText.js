import styles from "@/styles/boxandtext.module.css"
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BoxAndText() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const large = useTransform(scrollYProgress, [0, 1], [0, -350]);
    const small = useTransform(scrollYProgress, [0, 1], [0, -50]);
    

    return (
        <>
            <motion.div ref={container} className={styles.container}>
                    <motion.img 
                    style={{y: large}}
                    className={styles.cloud}
                    src="/images/lump2.png"
                    alt="A little moving white lump."/>

                    <p className={styles.paragraph}>
                        Asi ei ole selles, kas saab või ei saa, vaid selles, kas sa skeemitad välja või ei.
                    </p>
            </motion.div>
        </>
    );
}