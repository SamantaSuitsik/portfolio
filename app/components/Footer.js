import styles from "@/styles/footer.module.css"

export default function Footer() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.innercontainer}>
                    <h3 className={styles.h3}>Stay in touch.</h3>
                    <div className="squiggle"></div>
                    <div className={styles.row}>

                        <div className={styles.links}>
                            <p>Github</p>
                            <p>Twitter</p>
                            <p>minu@gmail.com</p>
                        </div>

                        <div className={styles.filler}>
                            <p>Designed and developed by Samanta Suitsik</p>
                            <p>Estonia 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}