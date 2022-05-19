import styled from "styled-components";

const Container = styled.button`
    height: 3rem;
    width: 10rem;
    text-transform: uppercase;
    border: none;

    &:hover, &:active, &:focus {
        color: var(--white);
    }
`

const Version1 = styled(Container)`
    background-color: var(--orange);
    color: white;

    &:hover, &:active, &:focus {
        background-color: var(--light_orange);
    }
`

const Version2 = styled(Container)`
    background-color: var(--white);
    color: var(--black);

    border: 0.094rem solid var(--black);

    &:hover, &:active, &:focus {
        background-color: var(--black);
    }
`

const Version3 = styled(Container)`
    background-color: var(--black);
    color: var(--white);

    &:hover, &:active, &:focus {
        background-color: var(--white);
        color: var(--black);
        border: 0.094rem solid var(--black);
    }
`

function SeeProductButton({version}) {

    const ButtonText = "See Product";

    if (version === "orange") {
        return <Version1>{ButtonText}</Version1>;
    } else if (version === "white") {
        return <Version2>{ButtonText}</Version2>;
    } else if (version === "black")
        return <Version3>{ButtonText}</Version3>;
}

export default SeeProductButton;