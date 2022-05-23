import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import PageScheme from "./PageScheme";
import productsData from "../audiophile-ecommerce-website/starter-code/data.json";
import SeeProductButton from "./buttons/SeeProduct";
import { NavLink } from "react-router-dom";
import { ProductContainer, ProductHalfContainer, ProductInput, ProductTextContainer } from "./productElements";

function Product({index, ver, id, slug, name, image, category, description, isNew, price}) {

    const isInverted = index % 2;
    const link = "/" + category + "/" + id;

    function addToCart() {
        
    }

    return(
        <ProductContainer>
            <ProductHalfContainer style={isInverted ? {order: "2"} : {order: "1"}}>
                <img className="img-fluid" 
                    src={`${process.env.PUBLIC_URL}${image.desktop.slice(1)}`} 
                    alt="logo"/>
            </ProductHalfContainer>
            <ProductHalfContainer style={isInverted ? {order: "1"} : {order: "2"}}>
                <ProductTextContainer style={isInverted ? {alignSelf: "flex-start"} : {alignSelf: "flex-end"}}>
                    {isNew ? <p><span>New product</span></p> : ""}
                    <h2>{name}</h2>
                    <p id="desc">{description}</p>
                    {ver === "seeProduct" ? 
                        <NavLink to={link}>
                            <SeeProductButton version="orange" buttonText="See product"/>
                        </NavLink>
                        :
                        <div>
                            <h6>$ {price.toLocaleString('en', {useGrouping:true})}</h6>
                            <ProductInput type="number" value="1"/>
                            <SeeProductButton
                                version="orange"
                                buttonText="Add to cart"
                                onClick={addToCart}/>
                        </div>
                    }
                </ProductTextContainer>
            </ProductHalfContainer>
        </ProductContainer>
    );
}

export default Product;