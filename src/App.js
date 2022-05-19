import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import ProductCategories from './components/ProductCategories';
import AboutCompany from './components/AboutCompany';
import ProductHighlights from './components/ProductHighlights';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 10.313rem 0 10.313rem;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;

  h1 {
    line-height: 3.625rem;
    font-size: 3.5rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h2 {
    line-height: 2.75rem;
    font-size: 2.5rem;
    letter-spacing: 0.094rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h3 {
    line-height: 2.25rem;
    font-size: 2rem;
    letter-spacing: 0.072rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h4 {
    line-height: 2.375rem;
    font-size: 1.75rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h5 {
    line-height: 2.063rem;
    font-size: 1.5rem;
    letter-spacing: 0.106rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h6 {
    line-height: 1.5rem;
    font-size: 1.125rem;
    letter-spacing: 0.081rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    line-height: 1.563rem;
    font-size: 0.938rem;
    font-weight: 500;
  }
`

function App() {
  return (
    <Container>

      <Navbar></Navbar>
      <NewProduct></NewProduct>
      <ProductCategories></ProductCategories>
      <ProductHighlights></ProductHighlights>
      <AboutCompany></AboutCompany>
      <Footer></Footer>

    </Container>
  );
}

export default App;
