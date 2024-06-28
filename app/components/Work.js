import styles from "@/styles/work.module.css"

export default function Work({company, title, time}) {

    return (
        <div>
            <h2>{company}</h2>
            <div className={styles.row}>
                <span>{title}</span>
                <span>{time}</span>
            </div>
            <div className={styles.box}></div>
        </div>
    );
}