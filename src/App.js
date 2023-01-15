import About from "./componenets/About";
import AllInOne from "./componenets/AllInOne";
import Hero from "./componenets/hero";
import Navbar from "./componenets/navbar";
import Pricing from "./componenets/Pricing";
import Support from "./componenets/Support";
import Footer from "./componenets/footer";



function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Support/>
     <AllInOne/>
     <Pricing/>
     <Footer/>
    </div>
  );
}

export default App;
