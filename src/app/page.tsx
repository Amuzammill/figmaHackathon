
import Herosection from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Brand from "./components/brand";
import Club from "./components/club";
import Desktop from "./components/desktop";
import Ceramics from "./components/ceramics";

export default function Home() {
  return (
    <div>
    <Navbar/>
    
    <Herosection/>
    <Brand/>
    <Ceramics/>
    <Club/>
    <Desktop/>
    <Footer/>
    </div>
  );
}
