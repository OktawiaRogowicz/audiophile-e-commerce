import styled from "styled-components";

const Container = styled.button`
    height: 3rem;
    width: 10rem;
    background-color: var(--orange);
    text-transform: uppercase;
    color: white;
    border: none;

    &:hover, &:active, &:focus {
        background-color: var(--light_orange);
    }
`

function SeeProductButton() {
    return(
        <Container>
            See Product
        </Container>
    );
}

export default SeeProductButton;