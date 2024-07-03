import styles from "@/styles/blog/post.module.css"

export default function Post({title, date}) {
    return (
        <>
            <div className={styles.container}>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </>
    );
}