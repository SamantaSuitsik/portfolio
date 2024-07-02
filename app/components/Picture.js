import styles from "@/styles/about/picture.module.css"

export default function Picture() {

    return (
        <>  
            <img 
            className={styles.pic}
            src="/images/snap.jpg"
            alt="Picture of me."/>
        </>
        
    );
}