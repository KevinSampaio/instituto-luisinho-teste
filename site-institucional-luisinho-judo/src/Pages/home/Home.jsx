import Header from "../../componentes/head";
import Hero from "../../componentes/hero";
import SecondarySection from "../../componentes/secondarySection";
import Footer from "../../componentes/footer";
import AboutLuis from "../../componentes/aboutLuis";
import Teachers from "../../componentes/teachers";
import NowParticipate from "../../componentes/comoParticipar";
import "../../componentes/aboutLuis";
import "../home/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="headerDiv">
        <Header />
      </div>
      <div className='fullContainerPage'>
        <Hero />
        <SecondarySection id="secondary-section" />
        <AboutLuis />
        <Teachers />
        <NowParticipate />
        <Footer />
      </div>
    </>
  );
}
