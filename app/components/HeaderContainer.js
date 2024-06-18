import Logo from "./Logo";
import Header from "./Header";
import styles from "@/styles/headercontainer.module.css"

export default function HeaderContainer() {

    return (
        <div className={styles.container}>
            <Logo />
            <Header />
        </div>
        
    );
}