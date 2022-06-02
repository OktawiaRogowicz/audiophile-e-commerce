import styled from "styled-components";
import arrow from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-arrow-right.svg"

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.5);
    
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