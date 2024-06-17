import styles from "@/styles/secondscreen.module.css"

export default function SecondScreen() {

    return (
        <div className={styles.container}>
            <div className={styles.blureffectupward}></div>
            <img
            className={styles.transition}
            src="backgroundblue.png" />
            <div className={styles.blureffect}></div>
            <img 
            className={styles.background} 
            src="cuteblue.jpg" 
            alt="Abstract picture of lightblue blobs."/>

        </div>
    );
}