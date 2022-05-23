import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import PageScheme from "./PageScheme";

import image from "../audiophile-ecommerce-website/starter-code/assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import { NavLink, useParams } from "react-router-dom";

import projectElements from "../audiophile-ecommerce-website/starter-code/data.json";
import Product from "./Product";

const Container = styled.div`
    width: 100%;
    position: relative;

    a {
        width: 5rem;
        position: absolute;
        top: -50px;
        text-decoration: none;
        color: grey;
    }
`

const FeaturesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;

    margin: 10rem 0 10rem 0;
`

const HalfContainer = styled.div`

    &:first-child {
        width: 60%;
    }

    &:last-child {
        width: 30%;
    }

    p {
        white-space: pre-line;
        color: grey;
    }

    b {
        margin-left: 0;
        margin-right: 1rem;
    }
`

const ImagesContainer = styled.div`
    height: 37rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`

const ImagesHalfContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    img {
        border-radius: 10px;
    }

    img + img {
       margin-top: 2rem;
    }

    img:last-child:first-child {
        margin-left: 2rem;
    }
`

function ProductDesc({id}) {

    const element = projectElements.find(el => el.id === parseInt(id));
    const link = "/" + element.category

    return(
        <Container>
            <NavLink to={link}>
                <a><p>Go Back</p></a>
            </NavLink>
            <Product
                id = {element.id}
                slug = {element.slug}
                name = {element.name}
                image = {element.image}
                category = {element.category}
                description = {element.description}
                isNew = {element.new}
                price = {element.price}
            />
            <FeaturesContainer>
                <HalfContainer>
                    <h5>Features</h5>
                    <p>{element.features}</p>
                </HalfContainer>
                <HalfContainer>
                    <h5>In the box</h5>
                    {element.includes.map((el, index) => {
                        return (
                            <p key={index} style={{margin: "0.5rem 0 0.5rem"}}>
                                <b style={{color: "var(--orange)"}}>{el.quantity}x</b> {el.item}
                            </p>
                        );}
                    )}
                </HalfContainer>
            </FeaturesContainer>
            <ImagesContainer>
                <ImagesHalfContainer>
                    <img src={`${process.env.PUBLIC_URL}${element.gallery.first.desktop.slice(1)}`} ></img>
                    <img src={`${process.env.PUBLIC_URL}${element.gallery.second.desktop.slice(1)}`} ></img>
                </ImagesHalfContainer>
                <ImagesHalfContainer>
                    <img src={`${process.env.PUBLIC_URL}${element.gallery.third.desktop.slice(1)}`} ></img>
                </ImagesHalfContainer>
            </ImagesContainer>
        </Container>
    );
}

function DetailedProductPage() {

    const {id} = useParams();

    return(
        <PageScheme
            insideComponent={<ProductDesc id={id}/>}
            cardCategories={true}
            aboutCompany={true}
        />
    );
}

export default DetailedProductPage;