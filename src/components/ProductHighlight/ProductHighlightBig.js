import styled from "styled-components";
import SeeProductButton from "../buttons/SeeProduct";

import circles from "../../audiophile-ecommerce-website/starter-code/assets/home/desktop/pattern-circles.svg";
import imagezx9Desktop from "../../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-speaker-zx9.png";
import imagezx9Tablet from "../../audiophile-ecommerce-website/starter-code/assets/home/tablet/image-speaker-zx9.png";

const Container = styled.div`
    height: 35rem;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    position: relative;

    box-sizing: border-box;
    padding: 0 3rem 0 3rem;

    border-radius: 0.313rem;
    background-color: var(--orange);

    @media (max-width: 768px) {
        height: 45rem;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin: 0;
        color: var(--white);

        @media (max-width: 768px) {
            margin: 2rem 0 2rem;
        }
    }

    p {
        color: var(--grey);
        margin: 2rem 0 2rem 0;
    }

`

const HalfContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #zx9{
        content: url("${imagezx9Desktop}");
        max-width: 23rem;
        position: absolute;
        bottom: -1rem;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        z-index: 1;

        @media (max-width: 768px) {
            content: url("${imagezx9Tablet}");
            max-width: 12rem;
            position: relative;
            
        }
    }

    #circles {
        width: 150%;
        position: absolute;
        z-index: 0;
        bottom: -45%;
        left: -25%; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto;

        @media (max-width: 768px) {
            width: 250%;
            left: -75%;
            bottom: -150%;
        }
    }
`

function ProductHighlightBig({productName, desc}) {
    return(
        <Container>
            <HalfContainer style={{width: "60%"}}>
                <img id="zx9"></img>
                <img id="circles" src={circles}></img>
            </HalfContainer>
            <HalfContainer style={{width: "40%", padding: "2rem"}}>
                <div>
                    <h1>{productName}</h1>
                    {desc ? <p>{desc}</p> : ""}
                    <SeeProductButton version="black"></SeeProductButton>
                </div>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightBig;