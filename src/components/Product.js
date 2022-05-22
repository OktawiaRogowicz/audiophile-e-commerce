import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Webpage from "./Webpage";
import productsData from "../audiophile-ecommerce-website/starter-code/data.json";
import SeeProductButton from "./buttons/SeeProduct";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const HalfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        align-self: center;
        height: 100%;
        border-radius: 10px;
    }
`

const TextContainer = styled.div`
    width: 80%;

    h2 {
        margin: 0;
    }

    #desc {
        color: var(--light_black);
        margin: 2.5rem 0 2.5rem 0;
    }

`

function Product({id, slug, name, image, category, description, isNew}) {

    const isInverted = id % 2;
    const link = "/" + category + "/" + id;

    return(
        <Container>
            <HalfContainer style={isInverted ? {order: "2"} : {order: "1"}}>
            <img className="img-fluid" 
                src={`${process.env.PUBLIC_URL}${image.desktop.slice(1)}`} 
                alt="logo"/>
            </HalfContainer>
            <HalfContainer style={isInverted ? {order: "1"} : {order: "2"}}>
                <TextContainer style={isInverted ? {alignSelf: "flex-start"} : {alignSelf: "flex-end"}}>
                    {isNew ? <p><span>New product</span></p> : ""}
                    <h2>{name}</h2>
                    <p id="desc">{description}</p>
                    <NavLink to={link}>
                        <SeeProductButton version="orange"/>
                    </NavLink>
                </TextContainer>
            </HalfContainer>
        </Container>
    );
}

export default Product;