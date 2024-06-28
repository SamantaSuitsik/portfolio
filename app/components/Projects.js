import styles from "@/styles/projects.module.css"
import Project from "./Project";

export default function Projects() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titlecontainer}>
                    <h1 className={styles.h1}>Projects.</h1>
                </div>
                <ul className={styles.ul}>   
                    <Project name="Study timer" desc="Simple study timer that times your studies and keeps them for future."/>
                    <Project name="Delivery service" desc="API for a food delivery app that calculates the delivery fee based on the current weather and location." />
                </ul>
            </div>
        </>
    );
}