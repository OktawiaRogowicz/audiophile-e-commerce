import styled from "styled-components";

const Container = styled.div`
    background-color: black;
    color: grey;
`

function Footer() {
    return(
        <Container>
            Home
            Headphones
            Speakers
            Earphones

            <p>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                visit our demo facility - we’re open 7 days a week.
            </p>

            <h4>Copyright 2021. All Rights Reserved</h4>
        </Container>
    );
}

export default Footer;