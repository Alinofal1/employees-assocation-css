import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Partners from "./components/Partners";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <News />
      <Footer />
    </div>
  );
}
