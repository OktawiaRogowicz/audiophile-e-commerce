import styled from "styled-components";
import ShopButton from "./buttons/ShopButton";

const Container = styled.div`
    height: 17.813rem;
    width: 100%;
    max-width: 350px;
    position: relative;

    box-sizing: border-box;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    z-index: 1;

    img {
        max-width: 75%;
        margin: 0;
    }
    h6 {
        margin: 0.25rem;
    }
`

const Background = styled.div`
    position: absolute;
    min-width: 100%;
    height: 75%;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0.313rem;
    background-color: var(--light_grey);
    z-index: -1;
`

function ProductCategory({categoryName, categoryImage}) {
    return(
        <Container>
                <Background/>
                <img src={categoryImage}></img>
                <h6>{categoryName}</h6>
                <ShopButton></ShopButton>
        </Container>
    );
}

export default ProductCategory;