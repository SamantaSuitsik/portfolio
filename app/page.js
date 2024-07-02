'use client'
import Title from './components/Title';
import "@/styles/globals.css";
import HeaderContainer from './components/HeaderContainer';
import SecondScreen from './components/SecondScreen';
import Video from './components/Video';
import styles from "@/styles/page.module.css"
import Projects from './components/Projects';
import Works from './components/Works';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <HeaderContainer />
            <Title></Title>
            <SecondScreen />
            <Projects />
            <Works />
            <Footer />
        </div>
    );
};
