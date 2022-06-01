import styled from "styled-components";
import Navbar from "../navbar/Navbar";

import iconFacebook from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-facebook.svg";
import iconInstagram from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-instagram.svg";
import iconTwitter from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-twitter.svg";

const Foot = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2rem;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 6.313rem;
        height: 5px;
        background-color: var(--orange);
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    color: grey;
`

const HalfContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        max-height: 1.5rem;
        max-width: 1.5rem;
    }
`

const HalfContainerSecond = styled(HalfContainer)`
    width: fit-content;
    display: block;
    position: absolute;
    top: 50%;
    right: 0;

    div {
        position: relative;
        transform: translateY(-50%);
    }

    img {
        max-height: 1.5rem;
        max-width: 1.5rem;
        margin: 0.5rem;

        &:active, &:focus, &:hover {
            cursor: pointer;
            filter: brightness(0) saturate(100%) invert(58%) sepia(97%) saturate(444%) hue-rotate(326deg) brightness(90%) contrast(87%);
        }
    }
`

function Footer() {
    return(
        <Foot>
            <Navbar version="footer"/>
            <Container>
                <HalfContainer>
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we’re open 7 days a week.
                    </p>
                    <p><b>Copyright 2021. All Rights Reserved</b></p>
                </HalfContainer>
                <HalfContainerSecond>
                    <div>
                        <img src={iconFacebook}></img>
                        <img src={iconInstagram}></img>
                        <img src={iconTwitter}></img>
                    </div>
                </HalfContainerSecond>
            </Container>
        </Foot>
    );
}

export default Footer;