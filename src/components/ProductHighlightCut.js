import styled from "styled-components";
import image from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-earphones-yx1.jpg";
import SeeProductButton from "./buttons/SeeProduct";

const Container = styled.div`
    display: flex;
    height: 20rem;
    width: 100%;
    flex-direction: row;

    box-sizing: border-box;
`

const HalfContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--grey);
    border-radius: 0.313rem;

    img {
        border-radius: 0.313rem;
        object-fit: cover;
    }

    h2 {
        margin-top: 0;
    }

    &:first-child {
        margin-right: 1rem;
    }

    &:last-child {
        box-sizing: border-box;
        padding: 5rem;
        margin-left: 1rem;
    }
`

function ProductHighlightCut({productName}) {
    return(
        <Container>
            <HalfContainer id="image">
                <img src={image}></img>
            </HalfContainer>
            <HalfContainer>
                <h2>{productName}</h2>
                <SeeProductButton version="white"></SeeProductButton>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightCut;