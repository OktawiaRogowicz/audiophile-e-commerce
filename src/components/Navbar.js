import styled from "styled-components";
import logo from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/logo.svg"

const Container = styled.div`
    height: 6.063rem;
    background-color: black;
    color: lightgrey;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 1.75rem;
    }

    div {
        display: flex;
        flex-direction: row;
    }
`

function Navbar() {
    return(
        <Container>
            <img src={logo}></img>
            <div>
                <h6>Home</h6>
                <h6>Headphones</h6>
                <h6>Speakers</h6>
                <h6>Earphones</h6>
            </div>
            <a>Cart</a>
        </Container>
    );
}

export default Navbar;