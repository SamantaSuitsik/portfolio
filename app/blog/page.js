import Footer from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import styles from "@/styles/page.module.css"
import Posts from "../components/blog/Posts";

export default function Blog() {
  return (
    <>
        <HeaderContainer />
        <Posts />
        <Footer />
    
    </>
  );
}
