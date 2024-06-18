import styles from "@/styles/header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.links}>
                <a className={styles.blog} href="/as">Blog</a>
                <a className={styles.about} href="/about">About</a>
            </div>
            <div className={styles.menu}>
                <img 
                src="/images/menu.svg"
                alt="menu button"/>
            </div>
        </>
    );
}