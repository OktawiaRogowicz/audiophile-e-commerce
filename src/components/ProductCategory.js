import styled from "styled-components";
import ShopButton from "./buttons/ShopButton";

const Container = styled.div`

`

function ProductCategory({categoryName, categoryImage}) {
    return(
        <Container>
            <h5>{categoryName}</h5>
            <ShopButton></ShopButton>
        </Container>
    );
}

export default ProductCategory;