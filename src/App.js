import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sports-science" exact element={<Home />} />
          <Route path="/ergonomics" exact element={<Home />} />
          <Route path="/physilogy" exact element={<Home />} />
          <Route path="/biomechanics" exact element={<Home />} />
          <Route path="/phychology" exact element={<Home />} />
          <Route path="/scientific-gym" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
