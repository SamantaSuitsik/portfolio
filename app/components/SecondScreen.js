import styles from "@/styles/secondscreen.module.css"
import BoxAndText from "@/app/components/BoxAndText";

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
                    <BoxAndText />
                </div>
            </div>

        </>
    );
}