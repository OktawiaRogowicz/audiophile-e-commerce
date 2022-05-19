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

function SeeProductButton({version}) {

    const ButtonText = "See Product";

    return(
        <div>
            { version === "orange" ?
                <Version1>{ButtonText}</Version1> : 
                <Version2>{ButtonText}</Version2>
            }
        </div>
    );
}

export default SeeProductButton;