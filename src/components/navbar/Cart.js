import styled from "styled-components";
import { css } from "styled-components";
import CheckoutButton from "../buttons/CheckoutButton";

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 120px;

    display: flex;
    flex-direction: column;

    width: 23.563rem;
    height: fit-content;
    box-sizing: border-box;
    padding: 2.5rem;

    border-radius: 10px;
    background-color: white;

    color: black;
    margin: 0;
    z-index: 3;

    h5 {
        margin: 0;
    }

`

const ScreenBlackOut = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
`

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h6 {
        margin: 0;
    }

    a {
        text-decoration: underline;
    }

    p {
        margin: 0;
        color: var(--black);
        opacity: 0.3;

        span {
            text-transform: uppercase;
        }
    }
`

function Cart({version, setShowCart}) {

    function onClick() {
        setShowCart(false);
    }

    return(
        <div>
            <Container>
                <TextContainer>
                    <h5>Cart (x)</h5>
                    <a><p>Remove all</p></a>
                </TextContainer>
                <ItemsContainer>
                    <p>There is nothing in the cart yet!</p>
                </ItemsContainer>
                <TextContainer>
                    <p><span>Total</span></p>
                    <h6>sum</h6>
                </TextContainer>
                <CheckoutButton/>
            </Container>
            <ScreenBlackOut onClick={onClick}/>
        </div>
    )

}

export default Cart;
