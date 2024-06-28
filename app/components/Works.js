import styles from "@/styles/projects.module.css"
import Work from "./Work";

export default function Works() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titlecontainer}>
                    <h1 className={styles.h1}>Work.</h1>
                </div>
                <ul className={styles.ul}>
                    <Work company="Siivi Sai" title="Counter waiter" time="Summer of 2022"/>
                    <Work company="Britney OÜ" title="Counter waiter" time="Summer of 2021"/>
                </ul>
            </div>
        
        </>
    );
}