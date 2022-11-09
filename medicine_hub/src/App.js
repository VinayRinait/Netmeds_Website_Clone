import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

import Navbar2 from "./component/Navbar2";
import Carousel from "./component/ImageSliders/Carousel";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Carousel />
      <Home />
    </>
  );
}

export default App;
