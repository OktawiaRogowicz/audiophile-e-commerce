import styled from "styled-components";
import ShopButton from "./buttons/ShopButton";

const Container = styled.div`

`

function ProductCategory({categoryName, categoryImage}) {
    return(
        <Container>
            <h1>{categoryName}</h1>
            <ShopButton></ShopButton>
        </Container>
    );
}

export default ProductCategory;