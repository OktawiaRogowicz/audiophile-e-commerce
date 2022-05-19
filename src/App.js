import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import ProductCategories from './components/ProductCategories';
import AboutCompany from './components/AboutCompany';
import ProductHighlights from './components/ProductHighlights';
import styled from "styled-components";

import image from "./audiophile-ecommerce-website/starter-code/assets/home/desktop/image-hero.jpg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
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
  
  button {
    line-height: 1.563rem;
    font-size: 0.813rem;
    letter-spacing: 0.063rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  #overline {
    line-height: 1.188rem;
    font-size: 0.875rem;
    letter-spacing: 0.625rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`

const ColoredSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10.313rem 0 10.313rem;

  & > div {
    margin: 10rem 0 10rem 0;
  }
`

const HeadphonesBackground = styled(ColoredSection)`
  width: 100%;
  height: fit-content;
  min-width: fit-content;
  min-height: fit-content;
  background-image: url("${image}");
  background-repeat: no-repeat;
  background-size: cover;
`

function App() {
  return (
    <Container>

      <HeadphonesBackground>
        <Navbar></Navbar>
        <NewProduct></NewProduct>
      </HeadphonesBackground>

    <ColoredSection>
      <ProductCategories></ProductCategories>
      <ProductHighlights></ProductHighlights>
      <AboutCompany></AboutCompany>
    </ColoredSection>

    <ColoredSection style={{backgroundColor: "black"}}>
      <Footer></Footer>
    </ColoredSection>

    </Container>
  );
}

export default App;
