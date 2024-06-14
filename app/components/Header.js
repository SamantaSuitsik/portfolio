import styles from "@/styles/header.module.css"

export default function Header() {
    return (
        <div className={styles.navbar}>
            <a className={styles.home} href="/">Home</a>

            <div className={styles.links}>
                <a className={styles.link} href="/as">Blog</a>
                <a className={styles.link} href="/about">About</a>
            </div>
        </div>
    );
}