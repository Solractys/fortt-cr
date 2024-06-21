import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Cases from "./components/Cases";
import Whoiam from "./components/Whoiam";
import Link from "next/link";
import KnowUs from "./components/KnowUs";
import AskSection from "./components/AskSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <><Navbar /><MainContent /><Cases /><Whoiam /><KnowUs /><AskSection /><Footer /></>
  );
};
