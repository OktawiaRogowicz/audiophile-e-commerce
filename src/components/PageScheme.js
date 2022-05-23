import React, { useState } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import NewProduct from './NewProduct';
import CardCategories from './CardCategories';
import AboutCompany from './AboutCompany';
import ProductHighlights from './ProductHighlights';

import { WebpageContainer, HeadphonesBackground, ColoredSection } from './pageSchemeElements';

function PageScheme({headerComponent, headerImage, insideComponent}) {

  return (
    <WebpageContainer>
      <HeadphonesBackground image={headerImage}>
        <Navbar></Navbar>
        {headerComponent}
      </HeadphonesBackground>

    <ColoredSection>
        {insideComponent}
      <CardCategories></CardCategories>
      <AboutCompany></AboutCompany>
    </ColoredSection>

    <ColoredSection style={{backgroundColor: "black"}}>
      <Footer></Footer>
    </ColoredSection>

    </WebpageContainer>
  );
}

export default PageScheme;
