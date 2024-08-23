import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import CategoriesData from './Pages/Products/CategoriesData';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Subcategory from './Pages/Subcategory/Subcategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pukhya" exact element={<Home />} />
          <Route path="/pukhya/about" exact element={<About />} />
          {CategoriesData.map((item) => (
            <Route path={item.link} exact element={<Products heading={item.Category} />} key={item.id} />
          ))}
          <Route path="/pukhya/productdetail/:pathName" exact element={<ProductDetail />} />
          <Route path="/pukhya/:pathName" exact element={<Subcategory />} />
          <Route path="/pukhya/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
