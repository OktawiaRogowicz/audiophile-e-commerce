import styled from "styled-components";

import imageDesktop from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-hero.jpg";
import imageTablet from "../audiophile-ecommerce-website/starter-code/assets/home/tablet/image-header.jpg";
import imageMobile from "../audiophile-ecommerce-website/starter-code/assets/home/mobile/image-header.jpg";

export const WebpageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  z-index: 1;

  h1 {
    line-height: 3.625rem;
    font-size: 3.5rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-weight: 700;
    
    @media (max-width: 425px) {
      line-height: 2.75rem;
      font-size: 2.5rem;
      letter-spacing: 0.094rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  h2 {
    line-height: 2.75rem;
    font-size: 2.5rem;
    letter-spacing: 0.094rem;
    text-transform: uppercase;
    font-weight: 700;

    @media (max-width: 425px) {
      line-height: 2.25rem;
      font-size: 2rem;
      letter-spacing: 0.072rem;
      text-transform: uppercase;
      font-weight: 700;
    }
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

    span {
      line-height: 1.188rem;
      font-size: 0.875rem;
      letter-spacing: 0.625rem;
      text-transform: uppercase;
      font-weight: 400;
      color: var(--orange);
    }
  }
  
  button {
    line-height: 1.563rem;
    font-size: 0.813rem;
    letter-spacing: 0.063rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const ColoredSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10.313rem 0 10.313rem;

  @media (max-width: 768px) {
    padding: 0 2rem 0 2rem;
  }

  &:not(:first-child):not(:last-child) > div {
    margin: 10rem 0 10rem 0;
  }
`

export const HeadphonesBackground = styled(ColoredSection)`
  width: 100%;
  height: fit-content;
  min-width: fit-content;
  min-height: fit-content;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("${imageDesktop}"); 

  @media (max-width: 768px) {
    background-image: url("${imageTablet}"); 
  }

  @media (max-width: 425px) {
    background-image: url("${imageMobile}"); 
  }
`