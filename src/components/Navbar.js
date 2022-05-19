import styled from "styled-components";
import logo from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/logo.svg"
import cart from "../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-cart.svg"

const Container = styled.div`
    height: 6.063rem;
    background-color: transparent;
    color: lightgrey;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        background-color: var(--white);
        opacity: 0.5;
        width: 100%;
        height: 1px;
        bottom: 0;
    }

    img {
        height: 1.75rem;
    }

    a {
        &:hover, &:active, &:focus {
            cursor: pointer;
        }
    }

    div {
        display: flex;
        flex-direction: row;

        h6 {
            margin: 0 1rem 0 1rem;
        }
    }
`

function Navbar() {
    return(
        <Container>
            <img src={logo}></img>
            <div>
                <a><h6>Home</h6></a>
                <a><h6>Headphones</h6></a>
                <a><h6>Speakers</h6></a>
                <a><h6>Earphones</h6></a>
            </div>
            <a><img src={cart}></img></a>
        </Container>
    );
}

export default Navbar;