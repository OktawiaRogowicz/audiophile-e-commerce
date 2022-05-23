import React, { useState } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import NewProduct from './NewProduct';
import ProductCategories from './CardCategories';
import AboutCompany from './AboutCompany';
import ProductHighlights from './ProductHighlights';

import { WebpageContainer, HeadphonesBackground, ColoredSection } from './pageSchemeElements';
import PageScheme from './PageScheme';

import image from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-hero.jpg";

function HomePage() {

  return (
    <PageScheme
        headerComponent={<NewProduct />}
        headerImage={image}
        insideComponent={<ProductHighlights />}
        cardCategories={true}
        aboutCompany={true}
    />
  );
}

export default HomePage;
