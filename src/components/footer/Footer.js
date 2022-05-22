import styled from "styled-components";
import Navbar from "../navbar/Navbar";

import iconFacebook from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-facebook.svg";
import iconInstagram from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-instagram.svg";
import iconTwitter from "../../audiophile-ecommerce-website/starter-code/assets/shared/desktop/icon-twitter.svg";

const Foot = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: grey;
`

const HalfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        max-height: 1.5rem;
        max-width: 1.5rem;
    }
`

const HalfContainerSecond = styled(HalfContainer)`
    width: 100%;
    display: block;
    margin-right: 0;
    margin-bottom: 0;
    position: relative;

    div {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }

    img {
        max-height: 1.5rem;
        max-width: 1.5rem;
        margin: 0.5rem;
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