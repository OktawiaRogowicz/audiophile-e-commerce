import styled from "styled-components";
import arrow from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-arrow-right.svg"

const Container = styled.a`
    img {
        margin: 0 0 0 0.3rem;
    }
`

function ShopButton() {
    return(
        <Container>
            Shop
            <img src={arrow}></img> 
        </Container>
    );
}

export default ShopButton;