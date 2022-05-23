import styled from "styled-components";
import { css } from "styled-components";
import React, { useState } from 'react';
import Cart from "./Cart";
import { NavLink } from 'react-router-dom';

import logo from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/logo.svg";
import cart from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-cart.svg";

const Container = styled.div`
    height: 6.063rem;
    background-color: transparent;
    color: lightgrey;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;

    &::after {
        content: "";
        position: absolute;
        background-color: var(--white);
        opacity: 0.5;
        width: 100%;
        height: 1px;
        bottom: 0;
        ${props => props.version === "footer" && css`
            opacity: 0;
        `}
    }

    img {
        height: 1.75rem;
    }

    a {
        &:hover, &:active, &:focus {
            cursor: pointer;
        }

        text-decoration: none;
        color: var(--grey);
    }

    div {
        display: flex;
        flex-direction: row;

        h6 {
            margin: 0 1rem 0 1rem;
        }
    }
`

function Navbar({version}) {

    const [showCart, setShowCart] = useState(false);

    function onClickCartIcon() {
        setShowCart(!showCart);
    }

    return(
        <div style={{position: "relative"}}>
            <Container version={version}>
                <img src={logo}></img>
                <div>
                    <NavLink to="/"><a><h6>Home</h6></a></NavLink>
                    <NavLink to="/headphones"><a><h6>Headphones</h6></a></NavLink>
                    <NavLink to="/speakers"><a><h6>Speakers</h6></a></NavLink>
                    <NavLink to="/earphones"><a><h6>Earphones</h6></a></NavLink>
                </div>
                {version === "footer" ? "" : <a onClick={onClickCartIcon}><img src={cart}></img></a>}
            </Container>
            { showCart ? <Cart setShowCart={setShowCart}/> : "" }
        </div>
    );
}

export default Navbar;