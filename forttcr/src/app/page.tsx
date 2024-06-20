import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Cases from "./components/Cases";
import Whoiam from "./components/Whoiam";
import Link from "next/link";


export default function Home() {
    return (
        <><Navbar /><MainContent /><Cases/><Whoiam/></>
  );
};
