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
import Brands from './Pages/Brands/Brands';
import Gallery from './Pages/Gallery/Gallery';

function App() {

  const title = "Pukhya"
  const description = "Pukhya description"
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pukhya" exact element={<Home title={title} descriptions={description} />} />
          <Route path="/pukhya/about" exact element={<About title={title} descriptions={description} />} />
          {CategoriesData.map((item) => (
            <Route path={item.link} exact element={<Products heading={item.Category} title={title} descriptions={description} />} key={item.id} />
          ))}
          <Route path="/pukhya/productdetail/:pathName" exact element={<ProductDetail title={title} descriptions={description} />} />
          <Route path="/pukhya/:pathName" exact element={<Subcategory title={title} descriptions={description} />} />
          <Route path="/pukhya/associated-brands" exact element={<Brands title={title} descriptions={description} />} />
          <Route path="/pukhya/gallery" exact element={<Gallery title={title} descriptions={description} />} />
          <Route path="/pukhya/contact" exact element={<Contact title={title} descriptions={description} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
