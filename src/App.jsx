import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import PizzaTypes from "./Components/PizzaTypes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <PizzaTypes />
      <Footer />
    </div>
  );
}

export default App;
