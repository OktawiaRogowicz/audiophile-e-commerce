import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import ProductCategories from './components/ProductCategories';
import AboutCompany from './components/AboutCompany';
import ProductHighlights from './components/ProductHighlights';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <NewProduct></NewProduct>
      <ProductCategories></ProductCategories>
      <ProductHighlights></ProductHighlights>

    <AboutCompany></AboutCompany>
    <Footer></Footer>

    </div>
  );
}

export default App;
