import styled from "styled-components";
import image from "../../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-speaker-zx7.jpg";
import SeeProductButton from "../buttons/SeeProduct";

const Container = styled.div`
    display: flex;
    height: 20rem;
    width: 100%;
    flex-direction: row;

    box-sizing: border-box;
    padding: 5rem;

    background-image: url("${image}");
    background-repeat: no-repeat;
    background-size: cover;
`

const HalfContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin-top: 0;
    }
`

function ProductHighlightSmall({productName}) {
    return(
        <Container>
            <HalfContainer>
            </HalfContainer>
            <HalfContainer>
                <h2>{productName}</h2>
                <SeeProductButton version="white"></SeeProductButton>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightSmall;