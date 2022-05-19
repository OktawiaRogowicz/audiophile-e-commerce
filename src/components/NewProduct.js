import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";

const Container = styled.div`

`

function NewProduct() {
    return(
        <Container>
            <h2>New product</h2>
            <h1>XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

            <SeeProductButton></SeeProductButton>
        </Container>
    );
}

export default NewProduct;