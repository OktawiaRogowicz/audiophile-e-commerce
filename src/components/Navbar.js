import styled from "styled-components";

const Container = styled.div`
    background-color: black;
    color: grey;
`

function Navbar() {
    return(
        <Container>
            Home
            Headphones
            Speakers
            Earphones
        </Container>
    );
}

export default Navbar;