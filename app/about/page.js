import Footer from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Picture from "../components/Picture";
import TextBox from "../components/about/TextBox";
import AboutLayout from "./layout";
import styles from "@/styles/page.module.css"

export default function About() {
  return (
    <>
    <AboutLayout />
    <HeaderContainer />
    <div className={styles.row}>

        <div className={styles.pic}>
          <Picture />
        </div>

        <div className={styles.text}>
          <TextBox />
        </div>

    </div>
    <Footer />
    </>
  );
}
