import styled from "styled-components";

export const ProductContainer = styled.div`
    height: 35rem;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductHalfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    img {
        align-self: flex-start;
        max-height: 100%;
        border-radius: 10px;
    }
`

export const ProductTextContainer = styled.div`

    width: 80%;

    h2 {
        margin: 0;
    }

    #desc {
        color: var(--light_black);
        margin: 2.5rem 0 2.5rem 0;
    }

`

export const ProductInput = styled.input`
    width: 7.5rem;
    height: 3rem;
    background-color: var(--grey);
    border: none;
    margin-right: 1rem;
    text-align: center;
    box-sizing: border-box;
    font-weight: 700;
`