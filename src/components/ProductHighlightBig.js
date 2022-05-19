import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";
import circles from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/pattern-circles.svg";
import imagezx9 from "../audiophile-ecommerce-website/starter-code/assets/home/desktop/image-speaker-zx9.png";

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

    h1 {
        margin: 0;
        color: var(--white);
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
        max-width: 23rem;
        position: absolute;
        bottom: -1rem;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        z-index: 1;
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
    }
`

function ProductHighlightBig({productName, desc}) {
    return(
        <Container>
            <HalfContainer style={{width: "60%"}}>
                <img id="zx9" src={imagezx9}></img>
                <img id="circles" src={circles}></img>
            </HalfContainer>
            <HalfContainer style={{width: "40%", padding: "2rem"}}>
                <div>
                    <h1>{productName}</h1>
                    {desc ? <p>{desc}</p> : ""}
                    <SeeProductButton version="white"></SeeProductButton>
                </div>
            </HalfContainer>
        </Container>
    );
}

export default ProductHighlightBig;