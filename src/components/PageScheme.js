import React, { useState } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import NewProduct from './NewProduct';
import CardCategories from './CardCategories';
import AboutCompany from './AboutCompany';
import ProductHighlights from './ProductHighlights';

import { WebpageContainer, HeadphonesBackground, ColoredSection } from './pageSchemeElements';

function PageScheme({headerComponent, headerImage, insideComponent, insideComponentColor, cardCategories, aboutCompany}) {

  return (
    <WebpageContainer
      style={{backgroundColor: insideComponentColor ? insideComponentColor : ""}}
    >
      <HeadphonesBackground
        style={headerImage ? {} : {backgroundImage: "none"}}
      >
        <Navbar></Navbar>
        {headerComponent}
      </HeadphonesBackground>

    <ColoredSection>
        {insideComponent}
        {cardCategories && <CardCategories/> }
        {aboutCompany && <AboutCompany/>}
    </ColoredSection>

    <ColoredSection style={{backgroundColor: "black"}}>
      <Footer></Footer>
    </ColoredSection>

    </WebpageContainer>
  );
}

export default PageScheme;
