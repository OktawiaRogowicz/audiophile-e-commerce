import React, { useState } from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import NewProduct from './NewProduct';
import ProductCategories from './ProductCategories';
import AboutCompany from './AboutCompany';
import ProductHighlights from './ProductHighlights';

import { WebpageContainer, HeadphonesBackground, ColoredSection } from './webpageElements';
import Webpage from './Webpage';

import image from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-hero.jpg";

function Home() {

  return (
    <Webpage
        headerComponent={<NewProduct />}
        headerImage={image}
        insideComponent={<ProductHighlights />}
    />
  );
}

export default Home;
