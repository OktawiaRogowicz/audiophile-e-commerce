import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";
import image from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-hero.jpg";

const Container = styled.div`
    height: 39.5rem;
    display: flex;  
    flex-direction: row;

    box-sizing: border-box;
    padding: 0 9rem 0 9rem;

    background-color: transparent;
`

const HalfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;

    h6 {
        opacity: 0.5;
        margin: 0;
    }

    p {
        color: var(--grey);
        max-width: 23rem;
        margin: 2rem 0 3rem 0;
    }
`

function NewProduct() {
    return(
        <Container>
            <HalfContainer>
                <div>
                    <h6 id="overline">New product</h6>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <SeeProductButton version="orange"></SeeProductButton>
                </div>
            </HalfContainer>
            <HalfContainer>
                {/* <img src={image}></img> */}
            </HalfContainer>
        </Container>
    );
}

export default NewProduct;