'use client'
import Title from './components/Title';
import "@/styles/globals.css";
import HeaderContainer from './components/HeaderContainer';

export default function Home() {
    return (
        <div className="container">
            <HeaderContainer />
            <Title></Title>
        </div>
    );
};
