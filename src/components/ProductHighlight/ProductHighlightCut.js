import styled from "styled-components";
import SeeProductButton from "../buttons/SeeProduct";
import { NavLink } from "react-router-dom";

import imageDesktop from "../../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-earphones-yx1.jpg";
import imageTablet from "../../audiophile-ecommerce-website/starter-code/assets/home/tablet/image-earphones-yx1.jpg";

const Container = styled.div`
    display: flex;
    height: 20rem;
    max-width: 100%;
    flex-direction: row;

    box-sizing: border-box;

    @media (max-width: 425px){
        height: fit-content;
        flex-direction: column;
    }
`

const HalfContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;

    background-color: var(--grey);
    border-radius: 0.313rem;

    img {
        height: 100%;
        content: url("${imageDesktop}");
        border-radius: 0.313rem;
        object-fit: cover;

        @media (max-width: 768px){
            content: url("${imageTablet}");
        }

    }

    h3 {
        margin-top: 0;
    }

    &:first-child {
        margin-right: 1rem;

        @media (max-width: 425px){
            margin-bottom: 2rem;
        }
    }

    &:last-child {
        box-sizing: border-box;
        padding: 5rem;
        margin-left: 1rem;

        @media (max-width: 768px) {
            margin-left: 0.05rem;
            padding: 2.5rem;
        }
    }
`

function ProductHighlightCut({productName}) {
    return(
        <Container>
            <HalfContainer id="image">
                <img/>
            </HalfContainer>
            <HalfContainer>
                <h3>{productName}</h3>
                <NavLink to="/speakers">
                    <SeeProductButton version="white"></SeeProductButton>
                </NavLink>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightCut;