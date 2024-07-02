import styles from "@/styles/work.module.css"

export default function Work({company, title, time}) {

    return (
        <div>
            <h2 className={styles.h2}>{company}</h2>
            <div className={styles.row}>
                <p>{title}</p>
                <p>{time}</p>
            </div>
            <div className="squiggle"></div>
        </div>
    );
}