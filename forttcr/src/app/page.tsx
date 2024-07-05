import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Projetos from "./components/Projetos";
import Whoiam from "./components/Whoiam";
import KnowUs from "./components/KnowUs";
import AskSection from "./components/AskSection";
import Footer from "./components/Footer";
import { BtnTop } from "./components/BtnTop";


export default function Home() {
  return (
    <><Navbar /><MainContent /><Projetos/><Whoiam /><KnowUs /><AskSection /><Footer /> <BtnTop/> </>
  );
};
