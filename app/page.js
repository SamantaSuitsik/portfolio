'use client'
import Title from './components/Title';
import "@/styles/globals.css";
import HeaderContainer from './components/HeaderContainer';
import SecondScreen from './components/SecondScreen';
import Video from './components/Video';
import styles from "@/styles/page.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.video}>
                <Video />

            </div>
            <HeaderContainer />
            <Title></Title>
            <SecondScreen />
        </div>
    );
};
