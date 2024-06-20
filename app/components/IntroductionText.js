import styles from "@/styles/introductiontext.module.css"
export default function IntroductionText() {

    return (
        <div className={styles.container}>
            <div className={styles.textbox}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo mauris, bibendum vel congue nec, euismod sit amet purus.
                </p>
            </div>
        </div>
    );
}