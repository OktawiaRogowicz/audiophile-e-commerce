import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { ColoredSection, WebpageContainer } from "./webpageElements";
import Webpage from "./Webpage";
import Products from "./Products";

const usePathname = () => {
    const location = useLocation();
    return location.pathname.slice(1);
  }

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 3rem;

    color: white;
`

function Headline({categoryName}) {
    return(
        <Container>
            <h2>{categoryName}</h2>
        </Container>
    );
}

function Category() {

    const categoryName = usePathname();

    return(
        <Webpage
            headerComponent={<Headline categoryName={categoryName}/>}
            insideComponent={<Products categoryName={categoryName}/>}
        />
    );
}

export default Category;