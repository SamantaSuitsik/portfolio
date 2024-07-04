"use client";
import styles from "@/styles/header.module.css"
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
    const navLinks = [
        { title: "Blog", href: "/blog" },
        { title: "About", href: "/about" }
    ];

    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        },
    
    }

    return (
        <>
            <div className={styles.container}>
                <Logo />
                <div className={styles.links}>
                    <a className={styles.blog} href="/blog">Blog</a>
                    <a className={styles.about} href="/about">About</a>
                </div>
                <div onClick={toggleMenu} className={styles.menu}>
                    <img 
                    src="/images/menu.svg"
                    alt="menu button"/>
                </div>
            </div>
            <AnimatePresence>
                {
                    open && (
                    <motion.div 
                    variants={menuVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.menuscreen}>
                        <div className={styles.outerwrapper}>
                            <div className={styles.container}>
                                <Logo />
                                <p 
                                className={styles.menu}
                                onClick={toggleMenu}
                                >Close</p>
                            </div>
                            <motion.div 
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className={styles.mobilelinks}>
                                {
                                    navLinks.map((link, index) => {
                                        return (
                                            <div className={styles.linkwrapper}>
                                                <MobileNavLink 
                                                    key={index} 
                                                    title={link.title} 
                                                    href={link.href} />
                                            </div>
                                        );
                                    })
                                }
                            </motion.div>
                        </div>
                    </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}

function MobileNavLink({title, href}) {
const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        }
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0, 0.55, 0.45, 1],
        }
    }
}

    return (
        <motion.div variants={mobileLinkVars}>
            <Link 
            className={styles.mobilelinktext} href={href}>
            {title}
            </Link>
        </motion.div>
    );
}