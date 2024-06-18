import styles from "@/styles/secondscreen.module.css"
import Box from "@/app/components/Box"

export default function SecondScreen() {

    return ( 
        <>
        
            <div className={styles.container}>
                <img
                className={styles.transition}
                src="/images/backgroundblue.png" />
                <div className={styles.blureffect}></div>
                <img 
                className={styles.background} 
                src="/images/cuteblue.jpg" 
                alt="Abstract picture of lightblue blobs."/>
                <div className={styles.wrapper}>
                    <Box />
                </div>
            </div>

        </>
    );
}