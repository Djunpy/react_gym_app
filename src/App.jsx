import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Community } from "./components/Community";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Price } from "./components/Price";
import { Workout } from "./components/Workout";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="App container mx-auto bg-page overflow-hidden relative">
            <Header />
            <Banner />
            <About />
            <Workout />
            <Price />
            <Community />
            <Faq />
            <Footer />
            <div className="h-[40000px]"></div>
        </div>
    );
}

export default App;
