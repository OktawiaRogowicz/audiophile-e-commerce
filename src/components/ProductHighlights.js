import styled from "styled-components";
import ProductHighlightBig from "./ProductHighlightBig";
import ProductHighlightSmall from "./ProductHighlightSmall";
import ProductHighlightCut from "./ProductHighlightCut";

const Container = styled.div`
    height: fit-content;

    & > div:not(:first-child):not(:last-child) {
        margin: 3rem 0 3rem 0;
    }
`

function ProductHighlights() {
    return(
        <Container>
            <ProductHighlightBig
                productName={"ZX9 speaker"}
                desc={"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}
            />
            <ProductHighlightSmall productName={"ZX7 speaker"}/>
            <ProductHighlightCut productName={"YX1 earphones"}/>
        </Container>
    );
}

export default ProductHighlights;