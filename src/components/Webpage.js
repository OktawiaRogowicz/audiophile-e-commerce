import React, { useState } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import NewProduct from './NewProduct';
import ProductCategories from './ProductCategories';
import AboutCompany from './AboutCompany';
import ProductHighlights from './ProductHighlights';

import { WebpageContainer, HeadphonesBackground, ColoredSection } from './webpageElements';

function Webpage({headerComponent, headerImage, insideComponent}) {

  return (
    <WebpageContainer>
      <HeadphonesBackground image={headerImage}>
        <Navbar></Navbar>
        {headerComponent}
      </HeadphonesBackground>

    <ColoredSection>
        {insideComponent}
      <ProductCategories></ProductCategories>
      <AboutCompany></AboutCompany>
    </ColoredSection>

    <ColoredSection style={{backgroundColor: "black"}}>
      <Footer></Footer>
    </ColoredSection>

    </WebpageContainer>
  );
}

export default Webpage;
