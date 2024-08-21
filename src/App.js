import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pukhya" exact element={<Home />} />
          <Route path="/pukhya/about" exact element={<About />} />
          <Route path="/pukhya/products" exact element={<Products />} />
          <Route path="/pukhya/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
