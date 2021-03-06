import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import productsData from "../audiophile-ecommerce-website/starter-code/data.json";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;

    & > div:not(:first-child):not(:last-child) {
        margin: 10rem 0 10rem 0;
    }

    & > div:last-child:nth-child(2) {
        margin: 0rem 0 10rem 0;
    }
`

function Products({categoryName}) {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    });

    return(
        <Container>
            {productsData.filter(el => el.category === categoryName).map((element, index) => {
                return (
                    <Product
                        index = {index}
                        ver = "seeProduct"
                        id = {element.id}
                        slug = {element.slug}
                        name = {element.name}
                        image = {element.image}
                        category = {element.category}
                        description = {element.description}
                        isNew = {element.new}
                    />
                );
            })}
        </Container>
    );
}

export default Products;