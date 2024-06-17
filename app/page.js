'use client'
import Header from './components/Header'
import Title from './components/Title';
import "@/styles/globals.css";
import BoxContainer from './components/CodeBoxContainer';

export default function Home() {
    return (
        <div className="container">
            <Header></Header>
            <Title></Title>
        </div>
    );
};
