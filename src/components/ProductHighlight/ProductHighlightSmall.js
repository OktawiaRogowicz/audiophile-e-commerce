import styled from "styled-components";
import SeeProductButton from "../buttons/SeeProduct";

import imageDesktop from "../../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-speaker-zx7.jpg";
import imageTablet from "../../audiophile-ecommerce-website/starter-code/assets/home/tablet/image-speaker-zx7.jpg";

const Container = styled.div`
    display: flex;
    height: 20rem;
    width: 100%;
    flex-direction: row;

    box-sizing: border-box;
    padding: 5rem;

    background-image: url("${imageDesktop}");
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 5px;

    @media (max-width: 768px) {
        background-image: url("${imageTablet}");
    }
`

const HalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        margin-top: 0;
    }
`

function ProductHighlightSmall({productName}) {
    return(
        <Container>
            <HalfContainer>
            </HalfContainer>
            <HalfContainer>
                <h3>{productName}</h3>
                <SeeProductButton version="white"></SeeProductButton>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightSmall;