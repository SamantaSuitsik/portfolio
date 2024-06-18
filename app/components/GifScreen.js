import styles from "@/styles/gifscreen.module.css"

export default function GifScreen() {

    return (

        <div className={styles.imagecontainer}>
            <img 
            className={styles.codepic} 
            src="/images/croppedcodegif.gif" 
            alt="Abstract picture of code"/>
            <img 
            className={styles.purple}
            src="/images/purple.png"></img>
        </div>
    );

}