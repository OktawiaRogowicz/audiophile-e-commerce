import styled from "styled-components";
import SeeProductButton from "./buttons/SeeProduct";

const Container = styled.div`

`

function ProductHighlight({productName}) {
    return(
        <Container>
            <h1>{productName}</h1>
            <SeeProductButton></SeeProductButton>
        </Container>
    );
}

export default ProductHighlight;