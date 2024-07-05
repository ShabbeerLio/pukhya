import './App.css';
import About from './Component/About/About';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/walls&dreams/" exact element={<Home />} />
        </Routes>
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;
