import styles from "@/styles/project.module.css"

export default function Project({name, desc}) {
    
    return (
        <div className={styles.container}>
                <h2>{name}</h2>
                <p>{desc}</p>
        <div className={styles.box}></div>
        </div>
    );
}