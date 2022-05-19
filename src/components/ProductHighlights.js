import styled from "styled-components";
import ProductHighlight from "./ProductHighlight";

const Container = styled.div`

`

function ProductHighlights() {
    return(
        <Container>
            <ProductHighlight productName={"ZX9 speaker"}/>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            <ProductHighlight productName={"ZX7 speaker"}/>
            <ProductHighlight productName={"YX1 earphones"}/>
        </Container>
    );
}

export default ProductHighlights;