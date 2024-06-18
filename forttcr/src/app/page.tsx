import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Cases from "./components/Cases";

export default function Home() {
    return (
        <><Navbar /><MainContent /><Cases/></>
  );
};
