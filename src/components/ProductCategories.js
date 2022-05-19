import styled from "styled-components";
import ProductCategory from "./ProductCategory";

const Container = styled.div`

`

function ProductCategories() {
    return(
        <Container>
            <ProductCategory categoryName="Headphones"/>
            <ProductCategory categoryName="Speakers"/>
            <ProductCategory categoryName="Earphones"/>
        </Container>
    );
}

export default ProductCategories;