import React from "react";
import styles from "./BtnBack.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BtnBack(){
    return(
        <>
        <button className={styles.btnback}>
            <Link className={styles.linkback} href={"/"}><ArrowLeft size={30}/></Link>
        </button>
        </>
    );
}