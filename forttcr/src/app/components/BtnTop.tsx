'use client'
import React, { useState } from "react";
import styles from "./BtnTop.module.css";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function BtnTop() {
    const [visible, setVisible] = useState(false);

    function isVisible() {
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

    window.addEventListener('scroll', isVisible)
    return (
        <>
            <button onClick={scrolltoTop}
                className={styles.btntop}
                style={{display: visible ? 'inline': 'none'}} >
                <ArrowUp size={40} />
            </button>
        </>
    );
}