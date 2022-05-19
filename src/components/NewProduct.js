import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";

const Container = styled.div`
    display: flex;  
    flex-direction: row;

    background-color: black;
`

const HalfContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
`

function NewProduct() {
    return(
        <Container>
            <HalfContainer>
                <div>
                    <h6>New product</h6>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <SeeProductButton></SeeProductButton>
                </div>
            </HalfContainer>
            <HalfContainer>
                <img></img>
            </HalfContainer>
        </Container>
    );
}

export default NewProduct;