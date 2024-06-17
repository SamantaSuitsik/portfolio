import styles from "@/styles/gifscreen.module.css"

export default function GifScreen() {

    return (

        <div className={styles.imagecontainer}>
            <img 
            className={styles.codepic} 
            src="croppedcodegif.gif" 
            alt="Abstract picture of code"/>
            <img 
            className={styles.purple}
            src="purple.png"></img>
        </div>
    );

}