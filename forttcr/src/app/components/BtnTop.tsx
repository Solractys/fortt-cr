'use client'
import React, { useState } from "react";
import styles from "./BtnTop.module.css";
import { ArrowUp } from "lucide-react";

export function BtnTop() {
    const [visible, setVisible] = useState(false);

    const isVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 20) {
            setVisible(true);
        } else if (scrolled <= 20) {
            setVisible(false);
        }
    };

    function scrolltoTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    React.useEffect(() => {
        window.addEventListener('scroll', isVisible);
    }, []);

    return (
        <>
            <button onClick={scrolltoTop}
                className={styles.btntop}
                style={{display: visible ? 'inline': 'none'}} >
                <ArrowUp size={40} style={{color: "black"}}/>
            </button>
        </>
    );
}